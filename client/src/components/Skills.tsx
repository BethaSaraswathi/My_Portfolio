import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

interface SkillCategory {
  title: string;
  icon: string;
  iconColor: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    icon: "fas fa-code",
    iconColor: "text-blue-600 dark:text-blue-400",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    title: "AI/ML Tools",
    icon: "fas fa-brain",
    iconColor: "text-purple-600 dark:text-purple-400",
    skills: [
      { name: "OpenAI API", level: 85 },
      { name: "LangChain", level: 80 },
      { name: "TensorFlow", level: 75 },
      { name: "Streamlit", level: 70 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "fas fa-cloud",
    iconColor: "text-green-600 dark:text-green-400",
    skills: [
      { name: "AWS", level: 75 },
      { name: "MongoDB", level: 80 },
      { name: "GitHub Actions", level: 70 },
      { name: "Docker", level: 65 },
    ],
  },
];

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Technologies I work with</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover bg-gray-50 dark:bg-gray-800 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <i className={`${category.icon} ${category.iconColor} mr-3`}></i>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="skill-item">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={isVisible ? skill.level : 0} 
                          className="h-2"
                          style={{
                            transition: `all 2s ease-in-out ${skillIndex * 0.2}s`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
