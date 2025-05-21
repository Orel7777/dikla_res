"use client";

import { useRef, PropsWithChildren } from "react";
import { motion, useSpring, useMotionValue, type MotionValue } from "framer-motion";

export interface SpotlightProps extends PropsWithChildren {
  /**
   * Size of the spotlight effect in pixels
   */
  size?: number;
  /**
   * CSS classes to apply to the component
   */
  className?: string;
  /**
   * Spring animation options for the spotlight effect
   */
  springOptions?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
}

export function Spotlight({
  children,
  size = 200,
  className = "",
  springOptions
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Use motion values for the spotlight position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Add spring effect to the motion
  const springConfig = {
    stiffness: springOptions?.stiffness ?? 100,
    damping: springOptions?.damping ?? 30,
    mass: springOptions?.mass ?? 1,
  };
  
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  return (
    <motion.div 
      ref={ref} 
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      style={{ position: "relative" }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px"
        style={{
          background: `radial-gradient(${size}px circle at ${springX}px ${springY}px, var(--spotlight-color, white) 0%, transparent 80%)`,
        }}
      />
      {children}
    </motion.div>
  );
} 