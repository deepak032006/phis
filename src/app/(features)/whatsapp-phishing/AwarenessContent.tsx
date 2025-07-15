// components/AwarenessContent.tsx
export default function AwarenessContent() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-14 space-y-10">
        {/* Section 1 */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Understanding WhatsApp Text Simulation
          </h2>
          <p className="text-gray-600 text-lg">
            In the dynamic landscape of cybersecurity, organisations must proactively fortify their defenses against a variety of threats. Phish Defence introduces its WhatsApp Text Simulation feature, a powerful tool designed to enhance your cybersecurity strategy by simulating and assessing the risks associated with WhatsApp-based phishing attacks.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What is WhatsApp Text Simulation?
          </h2>
          <p className="text-gray-600 text-lg">
            WhatsApp Text Simulation is a proactive cybersecurity training approach that replicates real-world scenarios involving text-based phishing attacks within the WhatsApp platform. This feature enables organisations to assess their susceptibility to phishing attacks on WhatsApp, empowering users to recognise and respond effectively to potential threats.
          </p>
        </div>
      </div>
    </section>
  );
}
