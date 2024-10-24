"use client";

import { useState } from "react";
import { add } from "@/utils/helper";
import { motion } from "framer-motion";
import CalculatorTitle from "./CalculatorTitle";
import CalculatorInput from "./CalculatorInput";
import ButtonGroup from "./ButtonGroup";
import ResultDisplay from "./Result";
import FeaturesModal from "../Modals/FeaturesModal";

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
        <CalculatorTitle toggleModal={toggleModal} />
        <CalculatorInput input={input} setInput={setInput} />
        <ButtonGroup
          handleCalculate={handleCalculate}
          resetInput={resetInput}
        />
        <ResultDisplay result={result} error={error} />
        <FeaturesModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
      </motion.div>
    </div>
  );
}
