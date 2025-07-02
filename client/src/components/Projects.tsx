import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI-Powered Resume Analyzer",
    description: "Resume review app using OpenAI API, LangChain, and Streamlit with semantic matching and LLM-based improvement suggestions.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    technologies: ["OpenAI API", "LangChain", "Streamlit"],
    date: "May 2025",
  },
  {
    title: "Personal Study Assistant Chatbot",
    description: "Interactive chatbot using Python, LangChain, and GPT-4 with RAG for academic queries and feedback loops.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    technologies: ["Python", "GPT-4", "RAG"],
    date: "Apr 2025",
  },
  {
    title: "Space Adventures – Interactive STEM Platform",
    description: "Educational platform using React.js, Node.js, MongoDB with AI-based simulations and gamified features.",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    technologies: ["React.js", "Node.js", "TensorFlow.js"],
    date: "May 2025",
  },
  {
    title: "Face Detection & Recognition System",
    description: "Real-time attendance tracker using Python, TensorFlow, and OpenCV with 95%+ recognition accuracy.",
    image: "https://itchronicles.com/wp-content/uploads/2023/07/face-recognition.jpg",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    date: "Dec 2023",
  },
  {
    title: "Hotel Reservation System",
    description: "Full-stack platform with PHP, JavaScript, MySQL for hotel bookings with secure login and payment workflows.",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    technologies: ["PHP", "JavaScript", "MySQL"],
    date: "May 2024",
  },
  {
    title: "VR Game – James Webb Space Telescope",
    description: "VR educational games using Unity3D for Oculus Quest to teach astronomy concepts through immersive experiences.",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    technologies: ["Unity3D", "VR", "Oculus Quest"],
    date: "Oct 2022",
  },
];

const techColors: Record<string, string> = {
  "OpenAI API": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "LangChain": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  "Streamlit": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  "Python": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "GPT-4": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  "RAG": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  "React.js": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "Node.js": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  "TensorFlow.js": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
  "TensorFlow": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
  "OpenCV": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  "PHP": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "JavaScript": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
  "MySQL": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  "Unity3D": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "VR": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  "Oculus Quest": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
};

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Some of my recent work</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover bg-gray-50 dark:bg-gray-800 h-full overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className={techColors[tech] || "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400 hover:underline">
                        <i className="fab fa-github mr-1"></i>Code
                      </Button>
                      <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400 hover:underline">
                        <i className="fas fa-external-link-alt mr-1"></i>Demo
                      </Button>
                    </div>
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
