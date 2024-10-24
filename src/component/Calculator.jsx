"use client";

import { useState } from "react";
import { add } from "@/utils/helper";
import { motion } from "framer-motion";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      setError(null);
      const sum = add(input);
      setResult(sum);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>String Calculator</h1>
      <motion.input
        type="text"
        placeholder="Enter numbers"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        whileHover={{ scale: 1.05 }}
        className="input-box"
      />
      <motion.button
        onClick={handleCalculate}
        whileTap={{ scale: 0.9 }}
        className="calculate-button"
      >
        Calculate
      </motion.button>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <p className="result">{result}</p>
      )}
    </div>
  );
}
