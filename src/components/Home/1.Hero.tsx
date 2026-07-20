import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import tennis from "@/assets/images/Home/Hero.png";
import { HomeContent } from "../../constants/Home"; 

export default function Hero() {
  const { title, description, buttonText, buttonLink, imageAlt } = HomeContent.hero;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative flex min-h-150 flex-col overflow-hidden bg-header-gradient text-white md:flex-row">
      {/* Texto: mitad izquierda */}
      <motion.div
        className="z-10 flex flex-1 items-center justify-center px-6 py-16 text-center md:justify-start md:px-16 md:text-left lg:text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div>
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-white/90"
          >
            {description}
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to={buttonLink}
              className="mt-8 inline-block rounded-md bg-[#B20026] px-6 py-3 font-semibold hover:bg-red-800"
            >
              {buttonText}
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Imagen: mitad derecha */}
      <motion.div
        className="h-75 w-full sm:h-95 md:h-auto md:flex-1"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={tennis}
          alt={imageAlt}
        className="h-full w-full object-cover object-top md:object-bottom-right md:object-contain"
        />
      </motion.div>
    </section>
  );
}