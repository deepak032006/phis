import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const secretKey = process.env.STRIPE_SECRET_KEY;

// Do NOT return here — just check
const stripe = secretKey
  ? new Stripe(secretKey, {   apiVersion: '2025-06-30.basil', })
  : null;

export async function POST(req: Request) {
  if (!stripe) {
    console.error('❌ STRIPE_SECRET_KEY not set — Stripe not initialized');
    return NextResponse.json({ error: 'Payment service unavailable' }, { status: 500 });
  }

  try {
    const body = await req.json();
    const { totalCost } = body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Subscription Plan',
            },
            unit_amount: Math.round(Number(totalCost) * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error('Stripe session error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
