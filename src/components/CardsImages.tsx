import { motion } from "framer-motion";

export default function Card({ name, variants }: any) {
  return (
    <motion.div variants={variants}>
      <motion.div
        className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-full bg-gray-300 " />
        <motion.div
          className="absolute inset-0 bg-black/40 flex items-end justify-center p-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white text-2xl font-bold text-center">{name}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}