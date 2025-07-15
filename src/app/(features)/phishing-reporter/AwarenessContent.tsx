// components/AwarenessContent.tsx
export default function AwarenessContent() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-14 space-y-10">
        {/* Section 1 */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
           One-Click Phishing Reporting
          </h2>
          <p className="text-gray-600 text-lg">
          In the relentless landscape of cybersecurity, email phishing remains a pervasive threat. Recognizing the critical need for a proactive and user-centric solution, Phish Defence introduces the Phishing Reporter Plugin—a sophisticated tool compatible with Microsoft O365 and G Suite. This plugin empowers users to seamlessly report suspicious emails from any device, fostering quick triage and fortifying overall email security.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Sets the Phishing Reporter Plugin Apart?
          </h2>
          <p className="text-gray-600 text-lg">
            The Phishing Reporter Plugin is an innovative cybersecurity tool designed to actively involve users in identifying and mitigating phishing threats within their email environments. Notably, this plugin is tailored to seamlessly integrate with Microsoft O365 and G Suite, ensuring a harmonious fit within existing email infrastructures.
          </p>
        </div>
      </div>
    </section>
  );
}
