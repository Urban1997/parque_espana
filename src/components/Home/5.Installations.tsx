import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Cards from "../CardsImages";
import { HomeContent } from "../../constants/Home";

export default function Installations() {
  const { title, cards, buttonText, buttonLink } = HomeContent.installations;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const firstThree = cards.slice(0, 3);
  const lastTwo = cards.slice(3, 5);

  return (
    <section className="bg-[#F2F4F7] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-[#3C3C3C] mb-12 sm:mb-16">
          {title}
        </h2>

        <motion.div
          className="flex flex-col gap-6 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Primera fila */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl justify-items-center">
            {firstThree.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="w-full max-w-75 sm:max-w-none"
              >
                <Cards name={item.name} />
              </motion.div>
            ))}
          </div>

          {/* Segunda fila */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 w-full max-w-5xl justify-items-center">
            <motion.div
              variants={itemVariants}
              className="w-full max-w-75 sm:max-w-none md:col-span-2 md:col-start-2"
            >
              <Cards name={lastTwo[0].name} />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="w-full max-w-75 sm:max-w-none md:col-span-2 md:col-start-4"
            >
              <Cards name={lastTwo[1].name} />
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            to={buttonLink}
            className="inline-block rounded-lg bg-[#0097b2] px-8 py-3 text-sm sm:text-base font-semibold text-white hover:bg-sky-700 transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}