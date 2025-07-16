import React from 'react';
import { IconType } from 'react-icons';

import {
  AiFillFile,
  AiFillClockCircle,
  AiOutlineSecurityScan,
  AiOutlineCloudSync,
} from 'react-icons/ai';

interface Benefit {
  icon: IconType;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: AiFillFile,
    title: 'User Empowerment in the Phishing Battle',
    description:
      "By enabling users to report suspicious emails directly from their inbox, the Phishing Reporter Plugin empowers them to actively contribute to the organisation's overall cybersecurity efforts. This user-centric approach fosters a collective defense against phishing threats.",
  },
  {
    icon: AiFillClockCircle,
    title: 'Timely Threat Identification Reduces Attack Surface',
    description:
      "The plugin's quick reporting and triage capabilities significantly reduce the attack surface by ensuring that potential phishing threats are identified and addressed promptly. Timely identification leads to more effective threat mitigation.",
  },
  {
    icon: AiOutlineSecurityScan,
    title: 'Enhanced Security Awareness Cultivates Vigilance',
    description:
      "Engaging users in the reporting process enhances their awareness of phishing threats. This proactive involvement fosters a culture of cybersecurity awareness within the organisation, creating a more vigilant and resilient workforce.",
  },
  {
    icon: AiOutlineCloudSync,
    title: 'Compatibility and Seamless Integration Simplifies Implementation',
    description:
      "The Phishing Reporter Plugin's seamless integration with Microsoft O365 and G Suite simplifies the implementation process. Organisations can readily leverage this compatibility to enhance their email security strategy without disruptions.",
  },
];

const PhishingBenefits: React.FC = () => {
  return (
    <section className="relative py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-[#45c2a4] uppercase tracking-wide font-semibold mb-2">Benefits</p>
        <h2 className="text-3xl md:text-4xl font-bold">Phishing Reporter Plugin</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="text-teal-600 text-3xl">
                <Icon />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PhishingBenefits;
