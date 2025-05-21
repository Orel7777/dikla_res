"use client";

import { useRef, PropsWithChildren } from "react";
import { motion, useSpring, useMotionValue, useTransform, type MotionValue } from "framer-motion";

export interface TiltProps extends PropsWithChildren {
  /**
   * The strength of the rotation effect. Higher values will result in more pronounced rotation.
   * @default 12
   */
  rotationFactor?: number;
  /**
   * Whether the rotation should be in the reverse direction.
   * @default false
   */
  isRevese?: boolean;
  /**
   * CSS inline styles to apply to the component
   */
  style?: React.CSSProperties;
  /**
   * Additional CSS classes to apply to the component
   */
  className?: string;
  /**
   * Spring animation options for the tilt effect
   */
  springOptions?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
}

export function Tilt({
  children,
  rotationFactor = 12,
  isRevese = false,
  style,
  springOptions,
  className = "",
}: TiltProps) {
  // Use refs instead of state to avoid re-renders
  const ref = useRef<HTMLDivElement>(null);

  // Motion values to track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create spring effect
  const springConfig = {
    stiffness: springOptions?.stiffness ?? 100,
    damping: springOptions?.damping ?? 30,
    mass: springOptions?.mass ?? 1,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], isRevese ? [-rotationFactor, rotationFactor] : [rotationFactor, -rotationFactor]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], isRevese ? [rotationFactor, -rotationFactor] : [-rotationFactor, rotationFactor]),
    springConfig
  );

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    
    // Get mouse position relative to element (normalized from -0.5 to 0.5)
    const mouseXNormalized = (event.clientX - rect.left) / rect.width - 0.5;
    const mouseYNormalized = (event.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(mouseXNormalized);
    mouseY.set(mouseYNormalized);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
} 