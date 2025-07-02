import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Montclair State University, NJ",
    period: "Aug 2023 - May 2025",
    gpa: "3.8/4.0",
    courses: "Software Development, Human–Computer Interaction, Data Science, Computer Security, Web Development",
    icon: "fas fa-graduation-cap",
    iconBg: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    degree: "Bachelor of Engineering in Information Technology",
    school: "G. Narayanamma Institute of Technology & Science, Hyderabad, India",
    period: "Completed May 2023",
    gpa: "7.5/10",
    courses: "DBMS, Operating Systems, Data Structures, Computer Networks, Web Technologies",
    icon: "fas fa-university",
    iconBg: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
];

const certifications = [
  {
    name: "Prompt Engineering for Developers",
    issuer: "DeepLearning.AI / OpenAI",
    date: "May 2025",
    icon: "fas fa-certificate",
    color: "text-yellow-500",
  },
  {
    name: "Generative AI with LLMs",
    issuer: "Deeplearning.AI",
    date: "Mar 2025",
    icon: "fas fa-robot",
    color: "text-blue-500",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford Online",
    date: "Jan 2025",
    icon: "fas fa-brain",
    color: "text-green-500",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon",
    date: "In Progress",
    icon: "fas fa-cloud",
    color: "text-orange-500",
  },
  {
    name: "NASA Space Apps Challenge",
    issuer: "Global Nominee",
    date: "Oct 2022",
    icon: "fas fa-rocket",
    color: "text-red-500",
  },
  {
    name: "Joy of Computing using Python",
    issuer: "IIT Madras",
    date: "Apr 2020",
    icon: "fas fa-code",
    color: "text-purple-500",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Academic background</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex items-start mb-4">
                    <div className={`w-12 h-12 ${edu.iconBg} rounded-lg flex items-center justify-center mr-4`}>
                      <i className={`${edu.icon} ${edu.iconColor} text-xl`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                      <p className={`${edu.iconColor} font-medium`}>{edu.school}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{edu.period}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Badge variant="secondary" className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                      GPA: {edu.gpa}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Relevant Coursework:</strong> {edu.courses}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Certifications & Recognition</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <i className={`${cert.icon} text-2xl ${cert.color} mb-2`}></i>
                    <h4 className="font-medium mb-1 text-sm">{cert.name}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{cert.issuer} ({cert.date})</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
