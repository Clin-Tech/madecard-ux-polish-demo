"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FeatureCard({ children, delay = 0 }) {
  const reduce = useReducedMotion();
  const initial = reduce ? {} : { opacity: 0, y: 12 };
  const animate = reduce ? {} : { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.35, delay }}
      className="card-surface rounded-2xl border border-black/10 p-6 body shadow-md"
    >
      {children}
    </motion.div>
  );
}
