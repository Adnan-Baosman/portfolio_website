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
    description:"Developed user-centric interfaces and optimized web application",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
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
      "Designed and developed the IGBC website in close collaboration with the client. Focused on creating a user-friendly interface and seamless navigation to enhance user experience and engagement.",
      tags: ["JavaScript", "HTML", "CSS", "Bootsrap"],
    imageUrl: igbc,
  },
  {
    title: "CII Energy",
    description:
      "Led the design and development of the CII Energy website, collaborating closely with the project manager to ensure a cohesive and visually appealing online presence to effectively represent CII Energy's objectives.",
      tags: ["JavaScript", "HTML", "CSS", "Bootsrap"],
    imageUrl: ciienergy,
  },
  
  {
    title: "a1Spaces",
    description:
      "Developed a dynamic website for A1 Places, a real estate company, using React. Focused on delivering an intuitive user experience and responsive design to effectively showcase property listings.",
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: a1spaces,
  },
  {
    title: "Jighisol",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Javacript", "HTML", "CSS", "WordPress", "Bootstrap"],
    imageUrl: jighisol,
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
