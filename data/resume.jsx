import {
  FaAws,
  FaJava,
  FaJs,
  FaPython,
  FaGitAlt,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import { DiMysql } from "react-icons/di";

import {
  SiDjango,
  SiFastapi,
  SiPostgresql,
} from "react-icons/si";

export const experience = {
  title: "Work Experience",
  description:
    "Hands-on experience in Python backend development, AWS Lambda serverless architecture, REST API design, and AI/ML integration.",
  items: [
    {
      company: "Banao Technologies Pvt Ltd",
      position: "Python Serverless Developer Intern",
      duration: "Feb 2026 – Aug 2026",
      isCurrent: false,
      bullets: [
        "Engineered and deployed 30+ AWS Lambda functions in Python, powering scalable serverless REST APIs used across 3 internal services.",
        "Designed, tested, and debugged 50+ backend API endpoints, writing unit and integration tests that reduced post-deployment defects by an estimated 20%.",
        "Partnered with a 5-member cross-functional team via Git-based workflows to ship backend features and bug fixes on a bi-weekly release cycle.",
      ],
    },
    {
      company: "Excerpt Technologies Pvt Ltd",
      position: "Cyber Security Intern",
      duration: "Feb 2023 – Jun 2023",
      isCurrent: false,
      bullets: [
        "Built secure OTP-based authentication workflows adopted across the company’s login and identity-verification systems.",
        "Conducted vulnerability assessments on 10+ application modules and applied secure coding practices that closed identified risk areas.",
        "Supported the security team in identifying, triaging, and resolving 20+ application security issues within sprint timelines.",
      ],
    },
  ],
};

export const education = {
  title: "Education",
  description:
    "Computer Science and Engineering education with a strong foundation in software development.",
  items: [
    {
      institution: "Dr. Ambedkar Institute of Technology",
      degree:
        "BE in Computer Science and Engineering – 84% (CGPA equivalent: 8.4/10)",
      duration: "2023 – 2026",
    },
    {
      institution: "Govt. Polytechnic Chintamani",
      degree:
        "Diploma in Computer Science and Engineering – 86% (CGPA equivalent: 8.6/10)",
      duration: "2020 – 2023",
    },
  ],
};

export const certification = "Cybersecurity – Infosys Springboard";

export const skillGroups = [
  {
    group: "Languages & Frameworks",
    color: "cyan",
    skills: [
      {
        icon: <FaPython />,
        name: "Python",
        purpose: "Backend development and serverless applications",
      },
      {
        icon: <FaJava />,
        name: "Java",
        purpose: "Programming language",
      },
      {
        icon: <FaJs />,
        name: "JavaScript",
        purpose: "Web development",
      },
      {
        icon: <SiDjango />,
        name: "Django",
        purpose: "Web applications and REST APIs",
      },
      {
        icon: <SiFastapi />,
        name: "FastAPI",
        purpose: "RESTful API development",
      },
      {
        icon: <FaReact />,
        name: "React.js",
        purpose: "Frontend applications",
      },
      {
        icon: <FaNodeJs />,
        name: "Node.js",
        purpose: "Full-stack development",
      },
    ],
  },

  {
    group: "Cloud & Databases",
    color: "purple",
    skills: [
      {
        icon: <FaAws />,
        name: "AWS Lambda",
        purpose: "Serverless architecture",
      },
      {
        icon: <SiPostgresql />,
        name: "PostgreSQL",
        purpose: "Relational databases",
      },
      {
        icon: <DiMysql />,
        name: "MySQL",
        purpose: "Relational databases",
      },
      {
        icon: <FaGitAlt />,
        name: "Git & GitHub",
        purpose: "Version control and collaboration",
      },
    ],
  },

  {
    group: "AI, Testing & Core CS",
    color: "gray",
    skills: [
      {
        icon: <FaPython />,
        name: "Machine Learning",
        purpose: "AI/ML applications",
      },
      {
        icon: <FaPython />,
        name: "NLP & Prompt Engineering",
        purpose: "AI/ML applications",
      },
      {
        icon: <FaPython />,
        name: "LLM Integration",
        purpose: "AI/ML integration",
      },
      {
        icon: <FaPython />,
        name: "API & Unit Testing",
        purpose: "Testing, debugging, and quality",
      },
      {
        icon: <FaPython />,
        name: "Data Structures, DBMS & OOP",
        purpose: "Core computer science",
      },
    ],
  },
];

export const skills = {
  title: "Technical Skills",
  skillList: skillGroups.flatMap((group) =>
    group.skills.map(({ icon, name }) => ({
      icon,
      name,
    }))
  ),
};