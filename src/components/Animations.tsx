import { motion } from "framer-motion";

interface AnimProps {
  children: React.ReactNode;
  className?: string;
}

/* Animación 1: Fade In Up - Suave y elegante */
export function AnimFadeUp({ children, className }: AnimProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] // cubic-bezier suave
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Animación 2: Fade In Scale - Suave y natural */
export function AnimScale({ children, className }: AnimProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.9, 
        ease: [0.34, 1.56, 0.64, 1] // cubic-bezier smooth
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Animación 3: Fade In Slide Right - Suave y fluida */
export function AnimSlideRight({ children, className }: AnimProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 1, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}