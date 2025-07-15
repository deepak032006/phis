import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Heroicons from Tailwind

const featuresColumn1 = [
  "Online Training Platform",
  "Phishing Attack Simulator",
  "Unlimited Email Phishing",
  "Email Domain Spoofing",
  "Creative Email Templates",
];

const featuresColumn2 = [
  "Microsoft Integration",
  "Google Integration",
  "Phishing Reporter Plugin",
  "Campaign Report",
  "Managed Phishing Sites",
];

const featuresColumn3 = [
  "Learning Resource Library",
  "Multi-Language Support",
  "Interactive Learning",
  "Standard Customer Support",
];

export default function FeatureList() {
  const allColumns = [featuresColumn1, featuresColumn2, featuresColumn3];

  return (
    <section className="bg-white py-10 px-4 rounded-lg">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-extrabold text-center text-[#149c8c] mb-12">
          Core Features Included
        </h3>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {allColumns.map((column, colIdx) => (
            <div
              key={colIdx}
              className="bg-gray-50 rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition duration-200"
            >
              <ul className="space-y-4">
                {column.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-[#1eb39e] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
