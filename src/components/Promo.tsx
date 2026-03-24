import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/d11ecb34-00f3-4292-9b0b-057a2f67f3dd/files/1cce45f3-1857-476a-a306-4249844794a2.jpg"
            alt="Романтическая атмосфера"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/30" />
      <h3 className="absolute top-12 left-6 text-white uppercase z-10 text-sm md:text-base tracking-[0.3em] font-light">
        ♪ С любовью и музыкой
      </h3>

      <p className="absolute bottom-12 left-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl z-10 leading-tight" style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>
        Каждая мелодия этого вечера будет звучать для вас — наших самых близких и любимых.
      </p>
    </div>
  );
}