import { 
  FaJava, 
  FaReact, 
  FaGitAlt, 
  FaDocker, 
  FaAws,
  FaDatabase,
  FaNetworkWired // Added for microservices
} from 'react-icons/fa';
import { 
  SiSpringboot, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiJavascript,
  SiJenkins 
} from 'react-icons/si';

// Remove the TbMicroservices import

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Java", level: 90, icon: FaJava },
        { name: "Spring Boot", level: 85, icon: SiSpringboot },
        { name: "Microservices", level: 80, icon: FaNetworkWired }, // Changed icon
        { name: "SQL", level: 85, icon: FaDatabase }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 75, icon: FaReact },
        { name: "Next.js", level: 70, icon: SiNextdotjs },
        { name: "TailwindCSS", level: 80, icon: SiTailwindcss },
        { name: "JavaScript", level: 85, icon: SiJavascript }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", level: 85, icon: FaGitAlt },
        { name: "Docker", level: 75, icon: FaDocker },
        { name: "AWS", level: 70, icon: FaAws },
        { name: "CI/CD", level: 75, icon: SiJenkins }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Technical <span className="text-blue-600">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <div className="flex items-center gap-2">
                        {skill.icon && 
                          <skill.icon 
                            className="w-5 h-5 text-blue-600" 
                          />
                        }
                        <span className="text-gray-700">{skill.name}</span>
                      </div>
                      <span className="text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
