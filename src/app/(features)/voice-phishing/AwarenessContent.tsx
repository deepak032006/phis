// components/AwarenessContent.tsx
export default function AwarenessContent() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-14 space-y-10">
        {/* Section 1 */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Understanding Vishing Simulation
          </h2>
          <p className="text-gray-600 text-lg">
            In the ever-evolving landscape of cybersecurity, organizations must take proactive measures to defend against a variety of threats. Phish Defence introduces its Vishing Simulation feature, a powerful tool designed to elevate your cybersecurity strategy by simulating and assessing the risks associated with voice-based phishing attacks, commonly known as Vishing. its SMS Simulation feature, a powerful tool designed to fortify your defenses against SMS-based phishing attacks. Dive into this comprehensive simulation experience to understand and mitigate the risks associated with SMS threats
          </p>
        </div>
       
        {/* Section 2 */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What is Vishing Simulation?
          </h2>
          <p className="text-gray-600 text-lg">
            Vishing Simulation is an advanced cybersecurity training approach that replicates real-world scenarios involving voice-based phishing attacks. This feature enables organisations to assess their susceptibility to Vishing attacks, empowering users to recognise and respond effectively to potential threats.
          </p>
        </div>
      </div>
    </section>
  );
}
