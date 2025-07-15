const features = [
  {
    icon: "🌍",
    title: "Realistic Scenarios for Practical Training",
    description:
      "Phish Defence's SMS Simulation feature goes beyond theoretical exercises. It creates authentic scenarios mirroring actual SMS phishing attacks. Users experience lifelike situations, allowing them to develop practical skills in identifying and mitigating SMS threats."
  },
  {
    icon: "📚",
    title: "Click and Interaction Tracking",
    description:
      "Capture detailed data on user interactions with simulated SMS phishing messages. This tracking mechanism provides valuable insights into user behaviour, helping organisations identify vulnerable points and enhance their security awareness initiatives."
  },
  {
    icon: "🔌",
    title: "URL and Link Analysis",
    description:
      "Evaluate how users handle URLs and links within SMS messages. Phish Defence's SMS Simulation analyses user responses to potentially malicious links, providing organisations with actionable data to bolster their defenses against phishing attacks."
  },
  {
    icon: "🎨",
    title: "Content Customisation",
    description:
      "Tailor SMS simulations to match the specific characteristics of your organisation. Customise the content, language, and context of SMS messages to ensure simulations are relevant and impactful for your users."
  },
  {
    icon: "✅",
    title: "Real-time Reporting and Analytics",
    description:
      "Access real-time reports and analytics to gauge the effectiveness of SMS simulations. Identify trends, measure progress, and make informed decisions based on comprehensive data, strengthening your organisation's overall security posture."
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
          All The Things You Need To Secure Your Organisation
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
