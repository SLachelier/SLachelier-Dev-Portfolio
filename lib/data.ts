import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import buildTxImg from "@/public/buildTX.jpg";
import megaBytesImg from "@/public/megabytes.png";
import nowYouKnowImg from "@/public/nowyouknow.png";

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
    title: "Graduated bootcamp",
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
      "I telework as a Technical Support Engineer while still building freelance projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
  {
    title: "Freelance Full-Stack Developer",
    location: "Frisco, TX",
    description:
      "I freelance projects to gain more experience. My stack is composed of React, Next.js, TypeScript, Tailwind, SQL and MongoDB",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },

] as const;

export const projectsData = [
  {
    title: "BuildTX Database",
    description:
      "Web app using the TxDOT API to quickly search and filter construction projects.",
    tags: ["React", "Scss", "Bootstrap", "Node.js", "MongoDB", "Express.js"],
    imageUrl: buildTxImg,
  },
  {
    title: "MegaBytes",
    description:
      "A restaurant finder for highly rated restaurants in cities around the world.",
    tags: ["React", "Node.js", "Bootstrap", "MongoDB", "Express.js"],
    imageUrl: megaBytesImg,
  },
  {
    title: "NowYouKnow",
    description:
      "A a game where users can play against a friend to learn about each other so that they can build deeper friendships and community.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "GraphQL", "Bootstrap", "Scss", "JWT"],
    imageUrl: nowYouKnowImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Scss",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Stripe",
  "Express",
  "Java",
  "Python",
  "JWT",
  "Framer Motion",
] as const;