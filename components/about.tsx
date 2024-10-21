"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">

      Welcome to my portfolio! Here, you'll explore the projects that define my journey as a frontend developer. I focus on building efficient and intuitive web applications using tools like React and Next.js. I'm passionate about delivering high-quality work and continuously improving my craft. Thank you for visiting, and I look forward to the chance to collaborate and create something great together.
      </p>

    </motion.section>
  );
}
