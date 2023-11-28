"use client";

import { YugiCards } from "@/types";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";
import { useRef } from "react";

export default function AnimatedYugiCard({ card }: { card: YugiCards }) {
  const ref = useRef(null);
  const { x, y } = useMousePosition(ref);

  const rotateX = y / 15;
  const rotateY = x / 15;

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, perspective: 2000 }}
      transition={{ duration: 0.5 }}
      className="h-fit w-fit">
      <Image
        className="z-40"
        src={card.img ? card.img : "/cardBack.jpg"}
        alt="card"
        width={180}
        height={260}
      />
    </motion.div>
  );
}
