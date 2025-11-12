"use client";

import { useEffect, useRef } from 'react';

interface DitherProps {
  color?: string;
  opacity?: number;
  speed?: number;
}

export default function Dither({ 
  color = '#800080', // purple by default
  opacity = 0.15,
  speed = 0.0005
}: DitherProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Dither pattern animation
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += speed;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Parse the color
      const hexColor = color.replace('#', '');
      const r = parseInt(hexColor.substring(0, 2), 16);
      const g = parseInt(hexColor.substring(2, 4), 16);
      const b = parseInt(hexColor.substring(4, 6), 16);
      
      // Create dither pattern
      const ditherSize = 4;
      const spacing = 8;
      
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          // Create animated noise pattern
          const noise = Math.sin(x * 0.01 + time * 10) * Math.cos(y * 0.01 + time * 10);
          const alpha = (noise + 1) / 2; // Normalize to 0-1
          
          if (alpha > 0.5) {
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            ctx.fillRect(x, y, ditherSize, ditherSize);
          }
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [color, opacity, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

