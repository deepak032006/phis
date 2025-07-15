// components/AwarenessContent.tsx
export default function AwarenessContent() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-14 space-y-10">
        {/* Section 1 */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Understanding Awareness Training in a Dynamic Landscape
          </h2>
          <p className="text-gray-600 text-lg">
            In the ever-evolving landscape of cybersecurity, organisations face a growing
            need for robust Awareness Training programs to fortify their defenses against
            an array of threats. <strong>Phish Defence</strong> leads the charge in offering
            a comprehensive Awareness Training solution, featuring multilingual content,
            SCORM modules, API integration, customisable content, compliance training,
            interactive training, and engaging quizzes.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            The Role of Awareness Training in Cybersecurity
          </h2>
          <p className="text-gray-600 text-lg">
            Awareness Training is a cornerstone of any robust cybersecurity strategy. It
            equips employees with the knowledge and skills needed to recognise, resist, and
            respond effectively to various cyber threats, including phishing, social
            engineering, and compliance-related issues.
          </p>
        </div>
      </div>
    </section>
  );
}
