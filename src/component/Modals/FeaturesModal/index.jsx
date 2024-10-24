/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function FeaturesModal({ isModalOpen, toggleModal }) {
  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2 className="modal-title">Calculator Features</h2>
                <motion.button
                  className="close-button"
                  onClick={toggleModal}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiX size={24} />
                </motion.button>
              </div>

              <ul className="modal-features">
                <li>1. Input: A string of comma-separated numbers</li>
                <li>
                  2. Output: Sum of the numbers (Example: “1,5” returns 6)
                </li>
                <li>
                  3. Handle new lines as delimiters (Example: "1\n2,3" returns
                  6)
                </li>
                <li>
                  4. Support custom delimiters (Example: "//;\n1;2" returns 3)
                </li>
                <li>
                  5. Throw an exception for negative numbers (Example: "-1,-2")
                </li>
              </ul>

              <motion.button
                className="close-button-text"
                onClick={toggleModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
