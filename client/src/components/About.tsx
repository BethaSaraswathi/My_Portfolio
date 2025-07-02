import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Get to know me better</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center">
              <i className="fas fa-user text-6xl text-white opacity-50"></i>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
              <i className="fas fa-code text-2xl text-gray-800"></i>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Versatile Software Engineer</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With a strong foundation in full-stack development, cloud technologies, and AI/ML tools, I bring versatility and innovation to every project. My experience spans building web applications, integrating large language models (LLMs), and deploying intelligent systems using modern technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm skilled in prompt engineering and LLM integration using tools like OpenAI API, LangChain, and TensorFlow. I also leverage modern AI productivity tools to enhance development efficiency and code quality.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-4 shadow-sm">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3.8</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">GPA (MSCS)</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 shadow-sm">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">8+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projects</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
