import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Software Development Intern",
    company: "Globus IT Company",
    period: "Nov 2022 – Apr 2023",
    color: "bg-blue-600",
    achievements: [
      "Developed and maintained full-stack web applications using HTML, CSS, JavaScript, and backend technologies",
      "Assisted in database design and optimization using SQL to ensure data integrity and performance",
      "Collaborated with senior developers to debug issues, write scalable code, and enhance system stability",
    ],
  },
  {
    title: "Social Media Marketing Intern",
    company: "Kleen Security",
    period: "Mar 2022 – Aug 2022",
    color: "bg-purple-600",
    achievements: [
      "Managed and scheduled content across LinkedIn, Instagram, and Twitter, resulting in a 40% increase in brand visibility",
      "Analyzed performance metrics using Google Analytics and Meta Insights to optimize strategy",
      "Supported lead generation through targeted ad campaigns, increasing social media followers by 25%",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">My professional journey</p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 dark:bg-gray-600"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.title}
                className="relative flex items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="flex-1 mr-8 text-right">
                      <Card className="card-hover shadow-lg">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{exp.company}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{exp.period}</p>
                          <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2 text-left">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>• {achievement}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${exp.color} rounded-full border-4 border-white dark:border-gray-900`}></div>
                    <div className="flex-1 ml-8"></div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 mr-8"></div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${exp.color} rounded-full border-4 border-white dark:border-gray-900`}></div>
                    <div className="flex-1 ml-8">
                      <Card className="card-hover shadow-lg">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                          <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{exp.company}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{exp.period}</p>
                          <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>• {achievement}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
