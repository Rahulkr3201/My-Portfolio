import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";
export default function Logo() {
  return (
    <motion.div
      className="w-[100px]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <img
        src={logo}
        alt="user-photo"
        className="bg-neutral-800 dark:bg-slate-50 rounded-full border-none"
      />
    </motion.div>
  );
}
