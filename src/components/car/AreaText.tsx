"use client"

import { motion } from "framer-motion";

const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 1.05,
      },
    },
  };
  const textP = {
    hidden: {
      y:"100%"
    },
    show: {
        y:0,
        transition: {
            ease:"easeInOut",
          },
    }
  };

const AreaText = ({text}:{text:string}) => {
    return (
         <motion.div variants={container} className="overflow-hidden flex" initial="hidden" animate="show"> 
            {text.split("").map((char, index) => (
                <motion.p variants={textP} key={index} className="text-5xl font-bold text-red-600">{char}</motion.p>
            ))}
        </motion.div>
    );
};

export default AreaText;