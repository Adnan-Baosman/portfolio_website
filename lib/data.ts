import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import igbc from "@/public/igbc.png";
import ciienergy from "@/public/ciienergy.png";
import jighisol from "@/public/jighisol.png";
import jighisol1 from "@/public/jighisol1.png";
import medpack from "@/public/medpack.png";
import a1spaces from "@/public/a1spaces.png";
import foodbazaar from "@/public/foodbazaar.jpg";
import tadoprojects from "@/public/tadoprojects.png";

import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  
  {
    title: "Frontend Developer at Miraki Technologies",
    location: "Hyderabad, India",
    description:"Focused on developing user-centric interfaces and optimizing web applications for better performance and usability.",
    icon: React.createElement(FaReact),
    date: "2020 - Present",
  },
  {
    title: "Bachelor of Engineering (Computer Science),",
    location: "Karnataka, India",
    description:"I have graduated from Visvewarayya Technological University  (VTU) in the year 2019.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "IGBC",
    description:
      "Designed and developed the IGBC website in collaboration with the client, focusing on a user-friendly interface and seamless navigation to enhance engagement",
      tags: ["JavaScript", "HTML", "CSS", "Bootsrap"],
    imageUrl: igbc,
  },
  {
    title: "CII Energy",
    description:"Designed and developed the UI of the CII Energy website, collaborating with the project manager to create an effective online presence reflecting CII's goals.",
      tags: ["JavaScript", "HTML", "CSS", "Bootsrap"],
    imageUrl: ciienergy,
  },
  
  {
    title: "a1Spaces",
    description:
      "Developed a dynamic website for A1Spaces, a real estate company, using React. An intuitive user experience and responsive design to showcase property listings.",
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: a1spaces,
  },
  {
    title: "Food Bazaar",
    description: "Built a Swiggy clone as a personal project, utilizing Swiggy's live APIs. Developed with React, Redux, and Tailwind CSS.",
    tags: ["React", "Redux", "Tailwind CSS", "Swiggy API"],
    imageUrl: foodbazaar,
  },
  
  {
    title: "Jighisol",
    description:
      "Developed a responsive website for Jighisol, a solar product company, focused on product visibility and streamlining sales.",
    tags: ["Javacript", "HTML", "CSS", "WordPress", "Bootstrap"],
    imageUrl: jighisol,
  },
  {
    title: "TaDo Projects",
    description:
      "Built a responsive website for TaDo Projects, a real estate company, aimed at enhancing property listings and streamlining the sales workflow",
    tags: ["Javacript", "HTML", "CSS", "WordPress", "Bootstrap"],
    imageUrl: tadoprojects,
  },
  
  {
    title: "MedPack",
    description:
      "Designed and developed the complete Medpack India website, focusing on frontend development to create a user-friendly and responsive experience.",
    tags: ["Javacript", "HTML", "CSS","WordPress", "Bootstrap"],
    imageUrl: medpack,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Framer Motion",
] as const;
