import { resumeData } from "../../client/src/lib/resume-data";

export async function generateResumePDF(): Promise<Buffer> {
  // Simple text-based resume content
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
${Object.entries(resumeData.technicalSkills).map(([category, skills]) => 
  `${category}: ${Array.isArray(skills) ? skills.join(', ') : skills}`
).join('\n')}

WORK EXPERIENCE
${resumeData.workExperience.map(exp => 
  `${exp.title} | ${exp.company} | ${exp.period}
${exp.responsibilities.map(resp => `• ${resp}`).join('\n')}`
).join('\n\n')}

PROJECTS
${resumeData.projects.map(project => 
  `${project.title} | ${project.date}
${project.description}`
).join('\n\n')}

EDUCATION
${resumeData.education.map(edu => 
  `${edu.degree}
${edu.institution} | ${edu.period} | GPA: ${edu.gpa}
Relevant Coursework: ${edu.coursework}`
).join('\n\n')}

CERTIFICATIONS & RECOGNITION
${resumeData.certifications.join('\n')}

---
For the complete interactive portfolio, visit: [Portfolio Website]
Contact me directly for additional information.
  `.trim();

  // Create a simple PDF-like buffer (in production, use a proper PDF library like puppeteer or jsPDF)
  const buffer = Buffer.from(resumeContent, 'utf-8');
  
  return buffer;
}
