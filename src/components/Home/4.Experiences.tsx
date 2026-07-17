import { motion } from "framer-motion";
import { HomeContent } from "../../constants/Home";
import Racket from "@/assets/images/Home/Racket.png";
import Flags from "@/assets/images/Home/Flags.png";
import Group from "@/assets/images/Home/Group.png";
import Star from "@/assets/images/Home/Star.png";

export default function ExperienceBanner() {
  const { title, items } = HomeContent.experience;

  const images = [Racket, Group, Star, Flags];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-[#F2F4F7] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3C3C3C] text-center mb-6 sm:mb-8">
          {title}
        </h2>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="text-center"
            >
              <img
                src={images[index]}
                alt={item.title}
                className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto mx-auto mb-4 sm:mb-6 object-contain"
              />

              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#3C3C3C] mb-2 sm:mb-3">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-[#3C3C3C] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
