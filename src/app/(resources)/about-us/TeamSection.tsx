import React from "react";

const teamMembers = [
  {
    name: "Umang Snehi",
    role: "Co-founder | Director of Sales and Partnerships",
    image: "https://phishdefense.com/wp-content/uploads/2024/05/Thomas-911-1.jpg",
    linkedin: "https://www.linkedin.com/in/sgcrishna/",
    highlight: true,
  },
  {
    name: "Dr Amit Chaubey",
    role: "CISO & Advisor",
    image: "https://phishdefense.com/wp-content/uploads/2024/03/Amit-Chaubey-1.jpg",
    linkedin: "https://www.linkedin.com/in/amit-chaubey/",
    highlight: true,
  },
  {
    name: "Vijaykumar Dayinde",
    role: "CIO at Malaysia Airports & Advisor",
    image: "https://phishdefense.com/wp-content/uploads/2024/04/image.webp",
    linkedin: "https://www.linkedin.com/in/vijaykumar-dayinde-44937813/",
  },
  {
    name: "Geff Wenborn",
    role: "Chief Operating Officer, Bank of Sydney & Advisor",
    image: "https://phishdefense.com/wp-content/uploads/2024/04/images-1.jpeg",
    linkedin: "https://www.linkedin.com/in/geoff-wenborn-35b454b/",
  },
  {
    name: "Kalyan Achyutuni",
    role: "Chief Technology Officer, Censa",
    image: "https://phishdefense.com/wp-content/uploads/2024/04/kalyan-removebg-preview.webp",
    linkedin: "https://www.linkedin.com/in/kalyan-achyutuni-94829057/",
  },
  {
    name: "Mike Rahmati",
    role: "Co-Founder & Co-CEO at Plerion",
    image: "https://phishdefense.com/wp-content/uploads/2024/05/1549581751577-1.jpeg",
    linkedin: "https://www.linkedin.com/in/mikerahmati/",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mt-10 text-m inline-block bg-[#149c8c]  text-white rounded-full px-8 text-lg mb-8">
            Our Story
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch for personalized assistance. We're here to help and provide solutions tailored to your requirements.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`relative bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 ${
                member.highlight ? "sm:col-span-2 xl:col-span-2" : ""
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-85 object-cover object-top"
              />
              <div className="p-2 text-left">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
