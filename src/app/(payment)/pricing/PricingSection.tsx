"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import FeatureList from './components/FeatureList';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const pricingTiers = [
  { min: 1500, baseRate: 0.51, enterpriseAdd: 0.07, addonRate: 0.12 },
  { min: 500, baseRate: 0.65, enterpriseAdd: 0.09, addonRate: 0.16 },
  { min: 100, baseRate: 0.74, enterpriseAdd: 0.06, addonRate: 0.25 },
  { min: 0, baseRate: 0.80, enterpriseAdd: 0.20, addonRate: 0.30 },
];



export default function PricingSection() {
  const [employees, setEmployees] = useState(5);
  const [enterprise, setEnterprise] = useState(false);
  const [whatsapp, setWhatsapp] = useState(true);
  const [sms, setSms] = useState(false);
  const [voice, setVoice] = useState(false);
  const [totalCost, setTotalCost] = useState("0.00");
  const [costPerEmployee, setCostPerEmployee] = useState("0.00");

  const handleCheckout = async () => {
    const totalAmount = Number(totalCost);

    if (isNaN(totalAmount) || totalAmount <= 0) {
      alert("Invalid total amount.");
      return;
    }

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ totalCost: totalAmount }),
      });

      const data = await res.json();

      if (!data.id) {
        throw new Error("Invalid Stripe session ID.");
      }

      const stripe = await stripePromise;
      await stripe?.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong during checkout.");
    }
  };

  useEffect(() => {
    const tier = pricingTiers.find((t) => employees >= t.min);

    if (!tier) {
      setTotalCost("0.00");
      setCostPerEmployee("0.00");
      return;
    }

    const addonCount = [whatsapp, sms, voice].filter(Boolean).length;
    const baseRate = tier.baseRate;
    const enterpriseAdd = enterprise ? tier.enterpriseAdd : 0;
    const addonRate = addonCount * tier.addonRate;
    const ratePerEmployee = baseRate + enterpriseAdd + addonRate;
    const total = (employees * ratePerEmployee).toFixed(2);

    setTotalCost(total);
    setCostPerEmployee(ratePerEmployee.toFixed(2));
  }, [employees, enterprise, whatsapp, sms, voice]);


  return (
    <div className="space-y-10 mt-20">
      <section className="text-center py-5">
        <div className="inline-block bg-[#149c8c] text-white uppercase font-semibold px-8 rounded-full">
          Get Started Today
        </div>
      </section>

      <div className="bg-gradient-to-br from-[#e0f7f4] via-[#cdeeea] to-[#c7ebde] py-10 px-6 rounded-lg shadow-xl max-w-4xl mx-auto">
        <FeatureList />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
          {/* Control Panel */}
          <div className="bg-white rounded-xl p-6 shadow-md space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Number of Employees
              </label>
              <input
                type="range"
                min="0"
                max="5000"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <input
                type="number"
                min="0"
                max="5000"
                value={employees}
                onChange={(e) => setEmployees(Math.max(0, Number(e.target.value)))}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Feature Toggles */}
            <ToggleWithDetails
              id="enterprise"
              label="Premium Upgrade"
              checked={enterprise}
              onChange={setEnterprise}
              details={[
                "Premium Customer Support",
                "Custom Template",
                "Custom Landing Page",
                "SSO (Single Sign‑On)",
                "Campaign Management",
              ]}
            />
            <ToggleWithDetails
              id="whatsapp"
              label="WhatsApp Threat Assessment"
              checked={whatsapp}
              onChange={setWhatsapp}
              details={[
                "One WhatsApp campaign",
                "Customised Message",
                "Comprehensive report",
              ]}
            />
            <ToggleWithDetails
              id="sms"
              label="SMS Threat Assessment"
              checked={sms}
              onChange={setSms}
              details={[
                "One SMS campaign",
                "Customised Message",
                "Comprehensive report",
              ]}
            />
            <ToggleWithDetails
              id="voice"
              label="Voice Threat Assessment"
              checked={voice}
              onChange={setVoice}
              details={[
                "One Voice Call campaign",
                "Local Number",
                "Comprehensive report",
                "Multiple Call Templates",
              ]}
            />
          </div>

          {/* Summary & Purchase */}
          <div className="bg-blue-100 rounded-xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#45c2a4] mb-4">Summary</h3>
              <p className="text-lg">
                Total Cost: <span className="font-semibold">${totalCost}/month</span>
              </p>
              <p className="text-lg">
                Cost Per Employee: <span className="font-semibold">${costPerEmployee}/month</span>
              </p>
            </div>

            <button
              disabled={employees === 0}
              onClick={handleCheckout}
              className={`mt-6 py-2 px-4 rounded-md transition text-white ${employees === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#45c2a4] hover:bg-[#3db194]"
                }`}
            >
              Purchase Subscription
            </button>


          </div>
        </div>

        <p className="text-sm text-gray-600 text-center mt-6">
          Please use a business email address to proceed.
        </p>
        <p className="text-xs text-gray-500 text-center mt-2">
          Need a custom plan? View our{" "}
          <Link
            href="/agreement.pdf"
            target="_blank"
            className="text-blue-600 underline"
            rel="noopener noreferrer"
          >
            Subscription Agreement
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="text-blue-600 underline">
            contact us
          </Link>
          .
        </p>

        <Script src="https://js.stripe.com/v3" strategy="afterInteractive" />
      </div>
    </div>
  );
}

interface ToggleWithDetailsProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  details: string[];
}

function ToggleWithDetails({
  id,
  label,
  checked,
  onChange,
  details,
}: ToggleWithDetailsProps) {
  return (
    <div>
      <label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="form-checkbox h-4 w-4 text-blue-600"
        />
        <span className="text-sm font-medium">{label}</span>
      </label>

      {checked && (
        <ul className="mt-2 ml-6 list-disc text-gray-700">
          {details.map((item, idx) => (
            <li key={idx} className="text-sm">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
