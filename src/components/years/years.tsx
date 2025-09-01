import { motion } from "framer-motion";
import  styles from "./years.module.css";
import { FC } from "react";

interface YearsProps {
  currentItems: { year: number }[];
}

export const Years: FC<YearsProps> = ({ currentItems }) => {
  return (
    <article className={styles.years}>
      <motion.p
        className={styles.year_from}
        key={currentItems[0]?.year}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {currentItems[0]?.year}
      </motion.p>
      <motion.p
        className={styles.year_to}
        key={currentItems[currentItems.length - 1]?.year}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {currentItems[currentItems.length - 1]?.year}
      </motion.p>
    </article>
  );
};
