import { motion } from "motion/react";

const Indicator = () => {
  return (
    <section className={`absolute -top-[.4rem] -right-[.4rem]`}>
      <motion.div
        animate={{ translateY: [5, 0, 5] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="bg-red-200 size-3 rounded-full flex items-center justify-center"
      >
        <div className="bg-red-500 rounded-full size-1"></div>
      </motion.div>
    </section>
  );
};

export default Indicator;
