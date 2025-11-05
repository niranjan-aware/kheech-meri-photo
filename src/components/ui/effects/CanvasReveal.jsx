import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const CanvasReveal = ({ 
  children, 
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[244, 63, 94], [218, 155, 55]],
  containerClassName,
  dotSize = 3,
}) => {
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawDots = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.floor(canvas.width / (dotSize * 4));
      const rows = Math.floor(canvas.height / (dotSize * 4));

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * (dotSize * 4) + dotSize * 2;
          const y = j * (dotSize * 4) + dotSize * 2;

          const distanceToMouse = Math.sqrt(
            Math.pow(x - mouseXSpring.get(), 2) + Math.pow(y - mouseYSpring.get(), 2)
          );

          let opacity = 0;
          if (isHovered) {
            const maxDistance = canvas.width / 2;
            const normalizedDistance = Math.min(distanceToMouse / maxDistance, 1);
            opacity = opacities[Math.floor(normalizedDistance * opacities.length)];
          } else {
            opacity = 0.1;
          }

          const colorIndex = Math.floor(Math.random() * colors.length);
          const [r, g, b] = colors[colorIndex];

          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(drawDots);
    };

    drawDots();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered, mouseXSpring, mouseYSpring, colors, opacities, dotSize]);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      className={`relative ${containerClassName}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default CanvasReveal;