"use client";

import { YugiCards } from "@/types";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function AnimatedYugiCard({ card }: { card: YugiCards }) {
  const x = useMotionValue(240);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 480], [30, -30]);
  const rotateY = useTransform(x, [0, 400], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const resetPosition = () => {
    x.set(240);
    y.set(200);
  };

  return (
    <motion.div
      className="mouseContainer"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}>
      <motion.div
        style={{
          height: 260,
          width: 180,
          rotateY,
          rotateX,
          perspective: 600,
        }}
        transition={{ duration: 0.5 }}>
        <Image
          className="z-40"
          src={card.img ? card.img : "/cardBack.jpg"}
          alt="card"
          width={180}
          height={260}
        />
      </motion.div>
    </motion.div>
  );
}
