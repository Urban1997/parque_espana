import { motion } from "framer-motion";
import AppStore from "@/assets/images/Home/App_Store.png";
import GooglePlay from "@/assets/images/Home/Google_Play.png";
import Mobile from "@/assets/images/Home/Mobile.png";

export default function App() {
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
    <section className="bg-header-gradient py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-end"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contenido izquierdo */}
          <motion.div variants={itemVariants} className="text-white pl-0 mb-19">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold mb-8 leading-tight text-left">
              Tu parque desde cualquier lugar
            </h2>

            <p className="text-lg sm:text-lg md:text-xl mb-12 leading-relaxed font-light text-left">
              Consulta información, realiza pagos, reserva amenidades y accede a
              los servicios del club desde la app móvil
            </p>

            <div className="flex gap-4 sm:gap-6 md:gap-8">
              <img src={GooglePlay} alt="Google Play" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain transition" />
              <img src={AppStore} alt="App Store" className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain transition" />
            </div>
          </motion.div>

          {/* Imagen derecha */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-end -mb-20 md:-mb-32 lg:-mb-40"
          >
            <img
              src={Mobile}
              alt="App móvil"
              className="w-72 sm:w-96 md:w-125 lg:w-150 object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}