import { useEffect, useRef, useState } from "react";

interface ThreadsBackgroundProps {
  className?: string;
}

const ThreadsBackground = ({ className = "" }: ThreadsBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial dark mode state
    setIsDark(document.documentElement.classList.contains("dark"));
    
    // Watch for dark mode changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    
    return () => observer.disconnect();
  }, []);

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
    window.addEventListener("resize", resizeCanvas);

    // Thread parameters (matching React Bits Threads spec)
    const numThreads = 60;
    const amplitude = 2.9 * 10; // Scale amplitude
    const distance = 0.3;
    const threads: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      amplitude: number;
      wavelength: number;
      phase: number;
    }> = [];

    // Initialize threads
    for (let i = 0; i < numThreads; i++) {
      threads.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * distance,
        vy: (Math.random() - 0.5) * distance,
        amplitude: amplitude * (0.8 + Math.random() * 0.4),
        wavelength: 80 + Math.random() * 120,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const drawThread = (
      ctx: CanvasRenderingContext2D,
      thread: typeof threads[0],
      mouseX: number,
      mouseY: number
    ) => {
      ctx.beginPath();
      ctx.moveTo(thread.x, thread.y);

      const segments = 50;
      for (let i = 1; i <= segments; i++) {
        const t = i / segments;
        const distance = Math.sqrt(
          Math.pow(mouseX - thread.x, 2) + Math.pow(mouseY - thread.y, 2)
        );
        const mouseInfluence = Math.max(0, 1 - distance / 300) * 20;

        const x = thread.x + thread.vx * t * 300 + 
                  Math.sin(t * thread.wavelength + thread.phase) * thread.amplitude +
                  (mouseX - thread.x) * mouseInfluence * 0.01;
        const y = thread.y + thread.vy * t * 300 +
                  (mouseY - thread.y) * mouseInfluence * 0.01;

        ctx.lineTo(x, y);
      }

      // Color matches the spec: [0.12, 0.41, 0.07] converted to RGB
      // For dark mode: emerald green, for light mode: subtle dark
      const color = isDark 
        ? `rgba(31, 105, 18, ${0.15 + Math.random() * 0.1})` // emerald green for dark (RGB from HSL)
        : `rgba(0, 0, 0, ${0.08 + Math.random() * 0.05})`; // subtle dark for light mode
      
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      threads.forEach((thread) => {
        // Update position
        thread.x += thread.vx;
        thread.y += thread.vy;

        // Wrap around edges
        if (thread.x < 0) thread.x = canvas.width;
        if (thread.x > canvas.width) thread.x = 0;
        if (thread.y < 0) thread.y = canvas.height;
        if (thread.y > canvas.height) thread.y = 0;

        // Update phase for wave animation
        thread.phase += 0.02;

        drawThread(ctx, thread, mouseX, mouseY);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
};

export default ThreadsBackground;

