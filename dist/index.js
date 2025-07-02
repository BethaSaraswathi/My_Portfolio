// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// client/src/lib/resume-data.tsx
var resumeData = {
  personalInfo: {
    name: "Saraswathi Betha",
    email: "saraswathibethawar@gmail.com",
    phone: "+1 (551)-260-5719",
    location: "Woodbridge, NJ",
    linkedin: "https://www.linkedin.com/in/bsaraswathi",
    github: "https://github.com/BethaSaraswathi",
    leetcode: "https://leetcode.com/u/nBruUrdGbc/"
  },
  summary: "Versatile Software Engineer with a strong foundation in full-stack development, cloud technologies, and AI/ML tools. Experienced in building web applications, integrating large language models (LLMs), and deploying intelligent systems using Python, JavaScript, and cloud platforms like AWS. Skilled in prompt engineering and LLM integration using tools like OpenAI API, LangChain, and TensorFlow. Proficient with modern AI productivity tools such as GitHub Copilot, Codeium, Claude.ai, NotebookLM, Replit, Tabnine, Google AI Studio, and Gamma.ai.",
  technicalSkills: {
    "Languages & Frameworks": ["Python", "JavaScript", "SQL", "HTML/CSS", "React.js", "Node.js", "Firebase", "MongoDB", "PHP", "MySQL", "Bootstrap", "TensorFlow.js"],
    "AI Tools & Libraries": ["OpenAI API", "LangChain", "Streamlit", "Hugging Face Transformers", "TensorFlow", "OpenCV", "scikit-learn", "GitHub Copilot", "Codeium", "Claude.ai", "NotebookLM", "Replit", "Tabnine", "Google AI Studio", "Gamma.ai"],
    "Cloud & DevOps": ["AWS (EC2, Lambda, S3, SageMaker)", "Google Colab", "Render", "GitHub Actions", "Docker (basic)"],
    "Concepts": ["Prompt Engineering (basic)", "Retrieval-Augmented Generation (RAG)", "LLM App Development", "REST APIs"],
    "Others": ["Git", "WebGL", "Matplotlib", "Seaborn", "Microsoft Office"]
  },
  workExperience: [
    {
      title: "Software Development Intern",
      company: "Globus IT Company",
      period: "Nov 2022 \u2013 Apr 2023",
      responsibilities: [
        "Developed and maintained full-stack web applications using HTML, CSS, JavaScript, and backend technologies.",
        "Assisted in database design and optimization using SQL to ensure data integrity and performance.",
        "Collaborated with senior developers to debug issues, write scalable code, and enhance system stability through documentation and code reviews."
      ]
    },
    {
      title: "Social Media Marketing Intern",
      company: "Kleen Security",
      period: "Mar 2022 \u2013 Aug 2022",
      responsibilities: [
        "Managed and scheduled content across LinkedIn, Instagram, and Twitter, resulting in a 40% increase in brand visibility.",
        "Analyzed performance metrics using Google Analytics and Meta Insights to optimize strategy and boost engagement.",
        "Supported lead generation through targeted ad campaigns, increasing social media followers by 25%."
      ]
    }
  ],
  projects: [
    {
      title: "AI-Powered Resume Analyzer",
      date: "May 2025",
      description: "Developed a resume review app using OpenAI API, LangChain, and Streamlit; utilized Claude.ai and NotebookLM to assist with analysis insights. Deployed using Render with GitHub Actions for CI/CD; enabled semantic matching to roles with LLM-based improvement suggestions."
    },
    {
      title: "Personal Study Assistant Chatbot",
      date: "Apr 2025",
      description: "Built an interactive chatbot using Python, LangChain, OpenAI GPT-4, and Claude.ai; integrated with Replit and NotebookLM for rapid testing. Used Retrieval-Augmented Generation (RAG) to answer academic queries and improve response quality through user feedback loops."
    },
    {
      title: "Space Adventures \u2013 Interactive STEM Simulation Platform",
      date: "May 2025",
      description: "Built an educational platform using React.js, Node.js, MongoDB, TensorFlow.js; enabled AI-based simulations and Firebase authentication. Achieved <3s load times and 75%+ user engagement by implementing gamified features and responsive design."
    },
    {
      title: "Face Detection & Recognition Attendance System",
      date: "Dec 2023",
      description: "Designed a real-time attendance tracker using Python, TensorFlow, and OpenCV; achieved over 95% recognition accuracy. Enhanced security with encrypted role-based access and reduced manual logging effort by 80%."
    },
    {
      title: "Customer Satisfaction Analysis \u2013 E-commerce",
      date: "Dec 2024",
      description: "Conducted sentiment and trend analysis on customer reviews using Python, Pandas, Matplotlib, and Seaborn. Delivered division-level recommendations to improve retention and satisfaction based on data visualization insights."
    },
    {
      title: "Hotel Reservation System",
      date: "May 2024",
      description: "Built a full-stack platform with PHP, JavaScript, MySQL, Bootstrap for hotel bookings; added secure login and payment workflows. Created admin dashboard and booking logic that increased operational efficiency by 75%."
    },
    {
      title: "Calorie Count-Down Mobile App (Prototype)",
      date: "Dec 2024",
      description: "Created a mobile app prototype in Figma with AI-powered meal recognition, integrated gamified health tracking system. Conducted iterative UI/UX testing and planned wearable integration for future versions."
    },
    {
      title: "Virtual Reality Game \u2013 James Webb Space Telescope",
      date: "Oct 2022",
      description: "Developed VR educational games using Unity3D for Oculus Quest to teach astronomy concepts to children. Created modules like Maze Adventure and Telescope Builder for immersive STEM engagement."
    }
  ],
  education: [
    {
      degree: "Master of Science in Computer Science (MSCS)",
      institution: "Montclair State University, Montclair, NJ",
      period: "Aug 2023 - May 2025",
      gpa: "3.8/4.0",
      coursework: "Software Development, Human\u2013Computer Interaction, Data Science, Computer Security, Web Development"
    },
    {
      degree: "Bachelor of Engineering in Information Technology (B.Tech)",
      institution: "G. Narayanamma Institute of Technology & Science, Hyderabad, India",
      period: "May 2023",
      gpa: "7.5/10",
      coursework: "DBMS, Operating Systems, Data Structures, Computer Networks, Web Technologies"
    }
  ],
  certifications: [
    "Prompt Engineering for Developers \u2013 DeepLearning.AI / OpenAI, (May 2025)",
    "Generative AI with LLMs \u2013 Deeplearning.AI, (Mar 2025)",
    "Machine Learning Specialization \u2013 Stanford Online (Coursera), (Jan 2025)",
    "AI for Everyone \u2013 Andrew Ng (Coursera), (Apr 2024)",
    "AWS Certified Cloud Practitioner \u2013 Amazon, In Progress",
    "Global Nominee \u2013 NASA Space Apps International Challenge, (Oct 2022)",
    "Social Media Marketing Internship Certificate \u2013 Kleen Infosec Pvt Ltd, (Jan 2021)",
    "Certificate \u2013 Programming for Everybody (University of Michigan, Coursera), (Sept 2020)",
    "Elite Certificate \u2013 Joy of Computing using Python (NPTEL \u2013 IIT Madras), (Apr 2020)"
  ]
};

// server/services/resume-pdf.ts
async function generateResumePDF() {
  const resumeContent = `
SARASWATHI BETHA
Software Engineer

Contact Information:
Email: ${resumeData.personalInfo.email}
Phone: ${resumeData.personalInfo.phone}
Location: ${resumeData.personalInfo.location}
LinkedIn: ${resumeData.personalInfo.linkedin}
GitHub: ${resumeData.personalInfo.github}
LeetCode: ${resumeData.personalInfo.leetcode}

PROFESSIONAL SUMMARY
${resumeData.summary}

TECHNICAL SKILLS
${Object.entries(resumeData.technicalSkills).map(
    ([category, skills]) => `${category}: ${Array.isArray(skills) ? skills.join(", ") : skills}`
  ).join("\n")}

WORK EXPERIENCE
${resumeData.workExperience.map(
    (exp) => `${exp.title} | ${exp.company} | ${exp.period}
${exp.responsibilities.map((resp) => `\u2022 ${resp}`).join("\n")}`
  ).join("\n\n")}

PROJECTS
${resumeData.projects.map(
    (project) => `${project.title} | ${project.date}
${project.description}`
  ).join("\n\n")}

EDUCATION
${resumeData.education.map(
    (edu) => `${edu.degree}
${edu.institution} | ${edu.period} | GPA: ${edu.gpa}
Relevant Coursework: ${edu.coursework}`
  ).join("\n\n")}

CERTIFICATIONS & RECOGNITION
${resumeData.certifications.join("\n")}

---
For the complete interactive portfolio, visit: [Portfolio Website]
Contact me directly for additional information.
  `.trim();
  const buffer = Buffer.from(resumeContent, "utf-8");
  return buffer;
}

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/resume/download", async (req, res) => {
    try {
      const pdfBuffer = await generateResumePDF();
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", 'attachment; filename="Saraswathi_Betha_Resume.pdf"');
      res.setHeader("Content-Length", pdfBuffer.length);
      res.send(pdfBuffer);
    } catch (error) {
      console.error("Error generating PDF:", error);
      res.status(500).json({ error: "Failed to generate resume PDF" });
    }
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      console.log("Contact form submission:", { name, email, subject, message });
      res.json({ success: true, message: "Contact form submitted successfully" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ error: "Failed to process contact form" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = process.env.PORT || 5e3;
  const host = process.env.NODE_ENV === "development" ? "localhost" : "0.0.0.0";
  server.listen(port, host, () => {
    log(`serving on http://${host}:${port}`);
  });
})();
