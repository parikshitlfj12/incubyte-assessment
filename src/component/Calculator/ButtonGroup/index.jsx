import { motion } from "framer-motion";
import { FiDelete, FiPlusCircle } from "react-icons/fi";

export default function ButtonGroup({ handleCalculate, resetInput }) {
  return (
    <motion.div
      className="button-group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <motion.button
        onClick={handleCalculate}
        whileTap={{ scale: 0.9 }}
        className="calculate-button"
        whileHover={{ backgroundColor: "#555" }}
      >
        <FiPlusCircle className="icon" /> Calculate
      </motion.button>

      <motion.button
        onClick={resetInput}
        whileTap={{ scale: 0.9 }}
        className="reset-button"
        whileHover={{ backgroundColor: "#f33" }}
      >
        <FiDelete className="icon" /> Reset
      </motion.button>
    </motion.div>
  );
}
