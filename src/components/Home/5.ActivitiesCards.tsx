import { motion } from "framer-motion";

export default function ActivitiesCards({ items }: { items: any[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="grid grid-cols-1 gap-6 md:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map((item) => (
        <motion.div key={item.id} variants={itemVariants}>
          <motion.div
            className="relative h-72 rounded-2xl overflow-hidden cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full bg-gray-300" />
            <motion.div
              className="absolute inset-0 bg-black/40 flex items-end p-4"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-white text-2xl font-bold">{item.name}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}