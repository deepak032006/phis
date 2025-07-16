'use client';

import {
  Headphones,
  Bug,
  Puzzle,
  MessageCircle,
  Users,
  Settings,
} from "lucide-react";

import Image from "next/image";

export default function PartnerFeatures() {
  const features = [
    {
      icon: <Headphones className="w-7 h-7" />,
      title: "White Label Solutions",
      description:
        "Personalize our state-of-the-art products to your brand, delivering a seamless and unique client experience.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Bug className="w-7 h-7" />,
      title: "Rotational License",
      description:
        "Unlimited MSSP licenses facilitate seamless scalability, enabling the extension of services to an unrestricted number of clients.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Puzzle className="w-7 h-7" />,
      title: "Global Presence",
      description:
        "Partner with our global presence for diverse markets & opportunities, expanding borders with a trusted industry leader.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <MessageCircle className="w-7 h-7" />,
      title: "Tailored Support",
      description:
        "Unique partner support includes personalized training, dedicated account management & a steadfast commitment.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Marketing and Branding",
      description:
        "Utilize our brand strength to elevate yours. Engage in co-branded marketing, promotions, and materials for enhanced market visibility.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: <Settings className="w-7 h-7" />,
      title: "Innovative Solutions",
      description:
        "Partner with us to lead in tech and innovation. Be the first to provide groundbreaking solutions to your clients.",
      color: "bg-teal-100 text-teal-600",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="text-center relative">
            {/* Decorative dot image behind the 3rd item */}
            {index === 2 && (
              <div className="absolute -top-10 right-0 w-16 h-16 opacity-30 pointer-events-none hidden md:block">
                <Image
                  src="https://themepanthers.com/nioland/pages/wp-content/uploads/2023/08/home-17-banner-dot.png"
                  alt="Decorative Dot"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}

            <div
              className={`flex items-center justify-center w-16 h-16 ${feature.color} rounded-full mx-auto mb-4`}
            >
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
