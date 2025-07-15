const features = [
  {
    icon: "🌍",
    title: "Seamless Integration for O365 and G Suite Environments",
    description:
    "Enjoy a hassle-free integration experience as the Phishing Reporter Plugin seamlessly embeds itself within Microsoft O365 and G Suite environments. This compatibility ensures a smooth implementation process and a cohesive collaboration with existing email platforms."
  },
  {
    icon: "📚",
    title: "Cross-Device Reporting for Ultimate Accessibility",
    description:
    "Users can report suspicious emails with ease, irrespective of the device they are using—be it desktops, laptops, tablets, or smartphones. This cross-device functionality guarantees that users can actively contribute to email security from anywhere and at any time."
  },
  {
    icon: "🔌",
    title: "Intuitive Reporting Process for User-Friendly Experience",
    description:
    "The reporting process is intuitively designed, offering users a straightforward experience. With just a few clicks, users can effortlessly report a suspicious email, providing vital information to IT and security teams for in-depth analysis."
  },
  {
    icon: "🎨",
    title: "Quick Triage Accelerates Threat Response",
    description:
    "Once a suspicious email is reported, the Phishing Reporter Plugin excels in facilitating rapid triage. By categorising and prioritising reported emails, security teams can efficiently focus on potential threats, minimising the response time to imminent risks."
  },
  {
    icon: "✅",
    title: "Customisable Reporting Options for Tailored Security Policies",
    description:
    "The Phishing Reporter Plugin provides organisations with customisable reporting options. This flexibility allows tailoring the reporting process to align seamlessly with specific security policies and reporting requirements, ensuring a bespoke fit for diverse organisational needs"
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
