import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/d11ecb34-00f3-4292-9b0b-057a2f67f3dd/files/0d283dc8-6536-499f-9f17-9f5398772b0e.jpg"
          alt="Свадебный пейзаж"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/25" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm md:text-base uppercase tracking-[0.4em] mb-6 opacity-80 font-light">
          Мы приглашаем вас разделить нашу радость
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4 leading-none"
          style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>
          Анастасия & Александр
        </h1>
        <div className="flex items-center justify-center gap-4 mt-8 opacity-90">
          <div className="h-px w-16 bg-white/60" />
          <p className="text-lg md:text-xl tracking-widest uppercase font-light">
            14 июня 2026
          </p>
          <div className="h-px w-16 bg-white/60" />
        </div>
      </div>
    </div>
  );
}