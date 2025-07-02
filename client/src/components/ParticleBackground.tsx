import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  opacity: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const particles: Particle[] = [];
    const particleCount = 80; // Increased particle count
    
    const colors = theme === "dark" 
      ? ["#60A5FA", "#A78BFA", "#34D399", "#F59E0B", "#EC4899", "#8B5CF6"]
      : ["#3B82F6", "#6366F1", "#10B981", "#F59E0B", "#E11D48", "#7C3AED"];

    // Initialize particles with more varied properties
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2, // Increased speed
        vy: (Math.random() - 0.5) * 1.2, // Increased speed
        radius: Math.random() * 3 + 0.5, // More varied sizes
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.7 + 0.3, // More visible particles
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles with enhanced movement
      particles.forEach((particle, index) => {
        // Add wave motion for more organic movement
        const time = Date.now() * 0.001;
        const waveX = Math.sin(time + index * 0.1) * 0.3;
        const waveY = Math.cos(time + index * 0.15) * 0.3;
        
        particle.x += particle.vx + waveX;
        particle.y += particle.vy + waveY;

        // Smooth boundary wrapping instead of bouncing
        if (particle.x < -particle.radius) particle.x = canvas.width + particle.radius;
        if (particle.x > canvas.width + particle.radius) particle.x = -particle.radius;
        if (particle.y < -particle.radius) particle.y = canvas.height + particle.radius;
        if (particle.y > canvas.height + particle.radius) particle.y = -particle.radius;

        // Pulsating opacity for breathing effect
        const pulseOpacity = particle.opacity + Math.sin(time * 2 + index * 0.5) * 0.2;
        
        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        
        // Add glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 3
        );
        gradient.addColorStop(0, particle.color + Math.floor(Math.max(0, Math.min(1, pulseOpacity)) * 255).toString(16).padStart(2, '0'));
        gradient.addColorStop(1, particle.color + '00');
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw solid center
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(Math.max(0, Math.min(1, pulseOpacity)) * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });

      // Enhanced connections with varying opacity
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 120;

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            
            // Create gradient line
            const lineGradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            lineGradient.addColorStop(0, theme === "dark" ? `rgba(96, 165, 250, ${opacity})` : `rgba(59, 130, 246, ${opacity})`);
            lineGradient.addColorStop(0.5, theme === "dark" ? `rgba(167, 139, 250, ${opacity * 1.5})` : `rgba(99, 102, 241, ${opacity * 1.5})`);
            lineGradient.addColorStop(1, theme === "dark" ? `rgba(52, 211, 153, ${opacity})` : `rgba(16, 185, 129, ${opacity})`);
            
            ctx.strokeStyle = lineGradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="particle-bg" />;
}
