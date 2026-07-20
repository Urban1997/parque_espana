import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollIcon from "@/assets/icons/Scroll.webp";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          aria-label="Ir al inicio"
          className="
            fixed
            bottom-4 right-4
            sm:bottom-5 sm:right-5
            md:bottom-6 md:right-6
            lg:bottom-8 lg:right-8
            z-50
            flex items-center justify-center
            w-12 h-12
            sm:w-14 sm:h-14
            rounded-full
            bg-[#8f9399]
            hover:bg-[#043351]
            shadow-xl
            transition-all
            duration-300
            cursor-pointer
          "
        >
          <img
            src={ScrollIcon}
            alt="Scroll top"
            loading="lazy"
            className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}