import { motion } from "framer-motion";
import { FiInfo } from "react-icons/fi";

export default function CalculatorTitle({ toggleModal }) {
  return (
    <motion.div className="title-wrapper">
      <motion.h1
        className="title"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <span role="img" aria-label="calculator">
          🧮
        </span>{" "}
        String Calculator
      </motion.h1>
      <motion.button
        className="info-button"
        onClick={toggleModal}
        whileHover={{ scale: 1.2 }}
        aria-label="info"
      >
        <FiInfo size={12} />
      </motion.button>
    </motion.div>
  );
}
