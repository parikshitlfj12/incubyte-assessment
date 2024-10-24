import { motion } from "framer-motion";

export default function CalculatorInput({ input, setInput }) {
  return (
    <motion.textarea
      placeholder="Enter numbers (Use comma or new line)"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      whileHover={{ scale: 1.05 }}
      className="input-box"
      rows={5}
    />
  );
}
