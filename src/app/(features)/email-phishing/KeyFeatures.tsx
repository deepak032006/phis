const features = [
  {
    icon: "🌍",
    title: "Realistic Scenarios for Immersive Training",
    description:
      "Phish Defence's Email Phishing Simulation goes beyond generic scenarios. Our tool meticulously crafts lifelike phishing attempts, replicating the tactics used by real cybercriminals. This immersive experience allows organisations and individuals to experience the full spectrum of phishing threats."
  },
  {
    icon: "📚",
    title: "Click Capture for Targeted Insights",
    description:
      "Elevate your security posture by capturing detailed click data during simulations. Our tool provides insights into user interactions, enabling organisations to identify potential vulnerabilities and enhance their security awareness programs."
  },
  {
    icon: "🔌",
    title: "Credentials Harvesting Simulations",
    description:
      "Simulate sophisticated phishing attacks targeting user credentials. Evaluate user responses to credential harvesting attempts, and leverage these insights to tailor training programs that effectively combat credential-based compromises."
  },
  {
    icon: "🎨",
    title: "QR Code Attacks Assessment",
    description:
      "Explore the risks associated with QR code-based phishing attacks. Phish Defence's Email Phishing Simulation enables organisations to assess user reactions to QR codes embedded in emails, offering a detailed analysis of potential vulnerabilities."
  },
  {
    icon: "✅",
    title: "Attachment Threat Scenarios",
    description:
      "Evaluate your organization's resilience against attachment-based threats. Our simulations include scenarios with malicious attachments, providing a robust assessment of how users handle potential malware threats."
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
