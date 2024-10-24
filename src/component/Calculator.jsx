"use client";

import { useState } from "react";
import { add } from "@/utils/helper";
import { motion } from "framer-motion";
import { FiDelete, FiPlusCircle, FiInfo } from "react-icons/fi";
import FeaturesModal from "./FeaturesModal";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCalculate = () => {
    try {
      setError(null);
      const sum = add(input);
      setResult(sum);
    } catch (err) {
      setError(err.message);
    }
  };

  const resetInput = () => {
    setInput("");
    setResult(null);
    setError(null);
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="parent-container">

    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
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

      <motion.textarea
        placeholder="Enter numbers (Use comma or new line)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        whileHover={{ scale: 1.05 }}
        className="input-box"
        rows={5}
      />

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

      {error ? (
        <motion.p
          className="error"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      ) : (
        <motion.p
          className="result"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {result !== null ? `Result: ${result}` : ""}
        </motion.p>
      )}

      <FeaturesModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </motion.div>
    </div>
  );
}
