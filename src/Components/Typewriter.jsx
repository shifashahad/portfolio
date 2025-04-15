import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Typewriter = () => {
  const words = ["Python Developer", "MERN Developer", "Frontend Developer"];
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const text = words[currentWordIndex];
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (prev.length < text.length) {
          return prev + text[prev.length];
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setDisplayedText("");
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }, 1000);
          return prev;
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, [currentWordIndex]);

  return (
    <h1
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        display: "flex",
        whiteSpace: "pre-wrap",
      }}
    >
      {displayedText.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="cursor"
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        |
      </motion.span>
    </h1>
  );
};

export default Typewriter;
