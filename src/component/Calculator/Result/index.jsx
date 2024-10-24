import { motion } from "framer-motion";

export default function ResultDisplay({ result, error }) {
  if (error) {
    return (
      <motion.p
        className="error"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {error}
      </motion.p>
    );
  }

  return (
    <motion.p
      className="result"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {result !== null ? `Result: ${result}` : ""}
    </motion.p>
  );
}
