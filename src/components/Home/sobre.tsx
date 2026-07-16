import { motion } from "framer-motion";
import Image1 from "@/assets/images/Nosotros/Image1.jpg";
import Image2 from "@/assets/images/Nosotros/Image2.jpg";
import Image3 from "@/assets/images/Nosotros/Image3.jpg";

export default function SobreNosotros() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="rounded-b-[80px] bg-gradient-to-b from-[#F2F4F7] to-[#D6DFED] py-16 lg:rounded-b-[130px] lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Título */}
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-[#043351] sm:text-4xl lg:text-5xl">
            Un espacio pensado para convivir y disfrutar
          </h2>
          <p className="mt-8 text-base leading-8 text-gray-800 sm:text-lg lg:text-2xl">
            <strong>Parque España Puebla</strong> es un club social,
            deportivo y cultural enfocado en la convivencia familiar,
            el bienestar y la recreación. Contamos con{" "}
            <strong>instalaciones deportivas, actividades culturales</strong>{" "}
            y espacios diseñados para que personas de todas las edades
            disfruten de una comunidad activa, moderna y llena de tradición.
          </p>
        </motion.div>

        {/* Galería */}
        <motion.div
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.img
            src={Image1}
            alt="Instalaciones"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="h-72 w-full rounded-bl-[40px] rounded-tr-[20px] rounded-br-[20px] object-cover shadow-lg transition duration-300 cursor-pointer"
          />
          <motion.img
            src={Image2}
            alt="Actividades"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="h-72 w-full rounded-[20px] object-cover shadow-lg transition duration-300 cursor-pointer"
          />
          <motion.img
            src={Image3}
            alt="Familias"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="h-72 w-full rounded-tl-[20px] rounded-br-[40px] rounded-bl-[20px] object-cover shadow-lg transition duration-300 cursor-pointer"
          />
        </motion.div>
      </div>
    </section>
  );
}