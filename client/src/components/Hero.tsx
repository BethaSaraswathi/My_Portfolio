import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function Hero() {
  const { toast } = useToast();

  const handleDownloadResume = async () => {
    try {
      const response = await apiRequest("GET", "/api/resume/download");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Saraswathi_Betha_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      
      toast({
        title: "Resume Downloaded",
        description: "Thank you for downloading my resume!",
      });
    } catch (error) {
      toast({
        title: "Download Error",
        description: "Please contact me directly for my resume.",
        variant: "destructive",
      });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="text-gradient">Saraswathi</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full-Stack Software Engineer specializing in AI/ML integration, cloud technologies, and modern web applications
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button 
              onClick={handleDownloadResume}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-medium"
            >
              <i className="fas fa-download mr-2"></i>
              Download Resume
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 font-medium hover:bg-blue-600 hover:text-white"
            >
              Get In Touch
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a 
              href="https://www.linkedin.com/in/bsaraswathi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://github.com/BethaSaraswathi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://leetcode.com/u/nBruUrdGbc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <i className="fas fa-code"></i>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-60"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-40 right-20 w-6 h-6 bg-purple-500 rounded-full opacity-60"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-3 h-3 bg-green-500 rounded-full opacity-60"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
    </section>
  );
}
