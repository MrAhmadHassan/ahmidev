"use client";
import { motion, useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [backgroundElements, setBackgroundElements] = useState([]);

  // Generate random elements only after component mounts on client
  useEffect(() => {
    const elements = Array.from({ length: 3 }, () => ({
      width: Math.random() * 300 + 50,
      height: Math.random() * 300 + 50,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      xOffset: Math.random() * 100 - 50,
      yOffset: Math.random() * 100 - 50,
      duration: Math.random() * 10 + 5,
    }));
    setBackgroundElements(elements);
  }, []);

  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {backgroundElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-100/30"
            style={{
              width: element.width,
              height: element.height,
              top: element.top,
              left: element.left,
            }}
            animate={{
              x: [0, element.xOffset],
              y: [0, element.yOffset],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content with animations */}
      <div className="z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-5xl font-bold text-gray-900 tracking-tight"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Hi, I'm Ahmad 
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="inline-block ml-2"
            >
              👋
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.p
          className="mt-6 text-xl text-gray-700 font-medium max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span
            className="inline-block"
            whileHover={{ scale: 1.05, color: "#3B82F6" }}
          >
            Full-Stack Java, JavaScript & Python Developer
          </motion.span>
          {" | "}
          <motion.span
            className="inline-block"
            whileHover={{ scale: 1.05, color: "#3B82F6" }}
          >
            Web Apps, Automation, API
          </motion.span>
          {" | "}
          <motion.span
            className="inline-block"
            whileHover={{ scale: 1.05, color: "#3B82F6" }}
          >
            Freelancer
          </motion.span>
          {" | "}
          <motion.span
            className="inline-block"
            whileHover={{ scale: 1.05, color: "#3B82F6" }}
          >
            Learner
          </motion.span>
        </motion.p>

        <motion.button
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Get In Touch
        </motion.button>
      </div>
    </section>
  );
}
