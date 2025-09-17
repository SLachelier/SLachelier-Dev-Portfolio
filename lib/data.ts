import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import buildTxImg from "@/public/buildTX.jpg";
import mlTranslatorImg from "@/public/mltranslator.png";
import vnArcadeImg from "@/public/vnarcade.png";
import fullCartImg from "@/public/fullcart.png";

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
    title: "Graduated coding bootcamp",
    location: "Austin, TX",
    description:
      "I graduated after 6 months of studying. I immediately worked on new development projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Technical Support Engineer",
    location: "Salt Lake City, UT",
    description:
      "I telework as a Technical Support Engineer for the Canvas LMS while still building freelance projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    title: "Freelance Full-Stack Developer",
    location: "Remote",
    description:
      "I freelance projects to gain more experience. My stack is composed of React, Next.js, Node.js, TypeScript, Tailwind, SQL, Express.js and MongoDB",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ML Translator",
    tgtLink: "https://mltranslator.vercel.app/",
    description:
      "A machine learning web app that transcribes recorded or uploaded audio, and translates it into any language.",
    tags: ["React", "Node.js", "Vite", "Tailwind", "Machine Learning Models"],
    imageUrl: mlTranslatorImg,
  },
  {
    title: "Visual Novel Arcade",
    tgtLink: "https://vnarcade.vercel.app/",
    description:
      "A website dedicated to serving as a platform for creatives to create & publish their own interactive visual novels.",
    tags: [
      "MongoDB",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Tailwind",
      "GraphQL",
      "Framer Motion",
    ],
    imageUrl: vnArcadeImg,
  },
  {
    title: "BuildTX Database",
    tgtLink: "https://earnest-smakager-954b20.netlify.app/",
    description:
      "Web app using the TxDOT API to quickly search and filter construction projects.",
    tags: ["React", "Scss", "Bootstrap", "Node.js", "MongoDB", "Express.js"],
    imageUrl: buildTxImg,
  },
  {
    title: "FullCart",
    tgtLink: "https://fullcartpwa.vercel.app/",
    description:
      "A PWA that allows users to easily create and auto-save shopping lists from their phones.",
    tags: ["Firebase", "HTML", "CSS", "JavaScript"],
    imageUrl: fullCartImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Framer Motion",
  "Tailwind",
  "BootStrap",
  "Scss",
  "Node.js",
  "Git",
  "CI/CD",
  "Docker",
  "Rest APIs",
  "Microservices",
  "Cloud Development",
  "MongoDB",
  "PostgreSQL",
  "NoSQL",
  "MySQL",
  "SQL",
  "Redux",
  "GraphQL",
  "Firebase",
  "Stripe",
  "Express",
  "Java",
  "Python",
  "Handlebars",
  "JWT",
  "Agile Scrum Methodology",
] as const;
