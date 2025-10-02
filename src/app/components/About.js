'use client';
import Image from "next/image";
export default function About() {
  const skills = [
    { name: "Fintech", years: "3+ years" },
    { name: "Web Development", years: "3+ years" },
    { name: "DevOps", years: "1+ year" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center tracking-tight text-gray-800">
          About <span className="text-blue-600 font-extrabold">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about.jpg"
              alt="Profile"
              width={400}
              height={400}
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm Ahmad, a passionate Java developer with experience in fintech and microservices.
              I love building scalable applications and learning new technologies.
            </p>

            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="font-medium text-gray-500">{skill.name}</span>
                  <span className="text-gray-500 text-sm">{skill.years}</span>
                </div>
              ))}
            </div>

            <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg 
              hover:bg-blue-700 transition-colors duration-300 shadow-md">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
