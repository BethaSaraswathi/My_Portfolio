import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateResumePDF } from "./services/resume-pdf";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download route
  app.get("/api/resume/download", async (req, res) => {
    try {
      const pdfBuffer = await generateResumePDF();
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Saraswathi_Betha_Resume.pdf"');
      res.setHeader('Content-Length', pdfBuffer.length);
      
      res.send(pdfBuffer);
    } catch (error) {
      console.error('Error generating PDF:', error);
      res.status(500).json({ error: 'Failed to generate resume PDF' });
    }
  });

  // Contact form submission (future enhancement)
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // TODO: Implement email sending logic
      // For now, just log the contact request
      console.log('Contact form submission:', { name, email, subject, message });
      
      res.json({ success: true, message: 'Contact form submitted successfully' });
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ error: 'Failed to process contact form' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
