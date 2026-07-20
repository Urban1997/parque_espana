import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "@/assets/icons/Logo.png";

export default function ParkExperience() {
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

  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
            <img
              src={Logo}
              alt="Logo Parque España"
              className="h-24 sm:h-28 md:h-45 object-contain"
            />
          </motion.div>

          {/* Título */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-[#3C3C3C] mb-12 sm:mb-16"
          >
            Vive la experiencia Parque España
          </motion.h2>

          {/* Descripción */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-[#555555] mb-12 sm:mb-16 max-w-3xl leading-relaxed"
          >
            Disfruta instalaciones deportivas, actividades culturales y espacios diseñados para
            compartir momentos inolvidables en familia.
          </motion.p>

          {/* Botones */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full sm:w-auto justify-center"
          >
            <Link
              to="/actividades"
              className="px-8 sm:px-12 py-4 sm:py-5 bg-[#0097b2] text-white font-semibold rounded-lg hover:bg-[#007a94] transition text-center text-base sm:text-lg"
            >
              Conocer actividades
            </Link>

            <Link
              to="/membresias"
              className="px-8 sm:px-12 py-4 sm:py-5 bg-[#003f99] text-white font-semibold rounded-lg hover:bg-[#002d6f] transition text-center text-base sm:text-lg"
            >
              Membresías
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}