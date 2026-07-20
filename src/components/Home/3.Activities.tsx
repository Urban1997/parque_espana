import { motion } from "framer-motion";
import Cards from "../CardsImages";
import { HomeContent } from "../../constants/Home";

export default function ActivitiesBanner() {
  const { title, descriptionParts, cards } = HomeContent.activities;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="bg-[#F2F4F7] py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3C3C3C] text-center mb-6 sm:mb-8">
          {title}
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-[#3C3C3C] text-justify leading-relaxed mb-12 sm:mb-16">
          {descriptionParts.map((part, i) =>
            part.strong ? (
              <strong key={i}>{part.text}</strong>
            ) : (
              part.text
            )
          )}
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="w-full max-w-75 sm:max-w-none"
            >
              <Cards name={item.name} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}