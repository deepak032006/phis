"use client";

import Link from 'next/link';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export default function CancelPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50 px-4">
      <div className="bg-white rounded-xl shadow-md max-w-md w-full p-8 text-center">
        <div className="flex justify-center mb-4">
          <ExclamationCircleIcon className="h-16 w-16 text-red-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Cancelled</h1>
        <p className="text-gray-600 mb-6">
          Your payment was not completed. Please try again or contact support if you need help.
        </p>
        <Link
          href="/"
          className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
