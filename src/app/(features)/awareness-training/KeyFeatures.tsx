const features = [
  {
    icon: "🌍",
    title: "Multilingual Content for Global Reach",
    description:
      "Phish Defence's Awareness Training stands out with its multilingual content, enabling organizations to provide training in diverse languages. This ensures employees across the globe can access cybersecurity info in their preferred language.",
  },
  {
    icon: "📚",
    title: "SCORM Modules for Seamless Learning Management",
    description:
      "Our solution incorporates SCORM modules, integrating easily with LMS systems. Organizations can manage, track, and report employee progress for an optimized learning experience.",
  },
  {
    icon: "🔌",
    title: "API Integration for Effortless Deployment",
    description:
      "With API integration, Phish Defense’s Awareness Training fits into your existing systems — allowing automated deployment and hassle-free user experience.",
  },
  {
    icon: "🎨",
    title: "Customisable Content Tailored to Your Needs",
    description:
      "Training content can be customised to meet your industry's unique needs or internal policies, ensuring relevance and effectiveness.",
  },
  {
    icon: "✅",
    title: "Compliance Training for Regulatory Adherence",
    description:
      "Includes modules designed for regulatory compliance to help organizations meet required standards with ease.",
  },
  {
    icon: "🎥",
    title: "Interactive Training for Engaging Learning Experiences",
    description:
      "Utilizes engaging media, real-world scenarios, and interactive exercises to create dynamic and memorable training.",
  },
  {
    icon: "📝",
    title: "Interactive Quizzes for Knowledge Reinforcement",
    description:
      "Quizzes reinforce learning and assess retention, highlighting areas for additional attention if needed.",
  },
];

export default function KeyFeatures() {
  return (
    <section className="bg-white py-20 px-6 max-w-7xl mx-auto">
      <header className="text-center max-w-3xl mx-auto mb-16">
        <p className="inline-block bg-teal-600 text-white rounded-full px-8 py-2 font-semibold mb-4">
          Key Features
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
          Phish Defense&apos;s Awareness Training Solution
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Empower your organization with training that’s accessible, customizable, and engaging.
        </p>
      </header>

      <div className="relative border-l-4 border-teal-600 max-w-4xl mx-auto">
        {features.map(({ icon, title, description }, idx) => (
          <div key={idx} className="mb-12 last:mb-0 flex flex-col md:flex-row md:items-start md:space-x-8">
            {/* Icon circle */}
            <div className="flex items-center md:flex-col md:items-center md:w-20">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white text-2xl font-bold shadow-md">
                {icon}
              </span>
              {/* Connector line for desktop */}
              {idx !== features.length - 1 && (
                <span className="hidden md:block w-1 bg-teal-600 flex-grow mt-2 rounded"></span>
              )}
            </div>

            {/* Content */}
            <div className="mt-4 md:mt-0">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-700 leading-relaxed max-w-xl">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
