"use client";

import {
  motion,
  MotionValue,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ReactNode,
  useRef,
} from "react";

interface DashboardTiltProps {
  children: ReactNode;
  className?: string;
}

export default function DashboardTilt({
  children,
  className = "",
}: DashboardTiltProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 180,
    damping: 18,
    mass: 0.8,
  });

  const springY = useSpring(rotateY, {
    stiffness: 180,
    damping: 18,
    mass: 0.8,
  });

  const glareX = useSpring(mouseX, {
    stiffness: 220,
    damping: 22,
  });

  const glareY = useSpring(mouseY, {
    stiffness: 220,
    damping: 22,
  });

  const glareBackground = useMotionTemplate`
radial-gradient(
600px circle at ${glareX}px ${glareY}px,
rgba(255,255,255,.22),
transparent 45%
)
`;

  function handleMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    const px = x / rect.width;
    const py = y / rect.height;

    rotateY.set((px - 0.5) * 18);
    rotateX.set((0.5 - py) * 18);
  }

  function reset() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div
      className="relative"
      style={{
        perspective: "1800px",
      }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        whileHover={{
          scale: 1.02,
        }}
        className={`relative transform-gpu ${className}`}
      >
        {children}

        {/* Glass Reflection */}
        <motion.div
          style={{
            background: glareBackground,
          }}
          className="pointer-events-none absolute inset-0 rounded-[32px]"
        />

        {/* Blue Glow */}
        <motion.div
          animate={{
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="pointer-events-none absolute
          -left-20
          top-20
          h-40
          w-40
          rounded-full
          bg-blue-500/30
          blur-[90px]"
        />

        {/* Purple Glow */}
        <motion.div
          animate={{
            opacity: [0.4, 0.75, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="pointer-events-none absolute
          -right-20
          bottom-10
          h-44
          w-44
          rounded-full
          bg-violet-500/30
          blur-[100px]"
        />
      </motion.div>
    </div>
  );
}