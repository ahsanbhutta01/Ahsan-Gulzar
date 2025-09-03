import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.jpg";


import { RiHtml5Line, RiCss3Line, RiJavascriptLine, RiReactjsLine, RiNextjsFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiMongodb, SiTailwindcss, SiRedux } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Ahsan Gulzar",
  role: "Full Stack Developer",
  subheading:
    "With 2 years of full-stack development experience, I build efficient, scalable web applications. Not on the job hunt, but always curious about interesting projects.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "B. E-commerce Website",
    description:
      `A full-featured e-commerce website built with React and Node.js. It includes user authentication, product management, order management and an integrated payment gateway. <br/>
      To check admin funtionality use these credentials: 
    <span style="color: #e63946; font-size: 15px; font-weight: bold;margin-left:25px">example@gmail.com(123456)</span>`,
    techStack: ["React", "Node.js", "Express", "MongoDB", " MongoDB", "Tailwind CSS", "Cloudinary", "Redux Toolkit"],
    imgSrc: project1,
    link: " https://b-ecommerce-xu3h.vercel.app/",
  },
  {
    id: 4,
    title: "B-Docs – Real-time Collaborative Document",
    description:
      "A collaborative document editing platform that allows multiple users to edit in real-time. It features live cursors, version history, and user authentication for secure collaboration.",
    techStack: ["NextJS", "Shadcn UI", "Convex Database", "Live blocks", "TipTap editor", "Clerk", "Tailwind CSS", "Zustand"],
    imgSrc: project4,
    link: "https://b-docx.vercel.app/",
  },
  {
    id: 5,
    title: "B. Meet (video and audio sharing)",
    description:
      "A real-time video and audio communication platform enabling seamless group meetings. It supports screen sharing, chat, and secure authentication for collaboration.",
    techStack: ["NextJs", "TailwindCSS", "Shadcn UI", "OAuth Providers"],
    imgSrc: project5,
    link: "https://b-meet.vercel.app/",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "This is a fully responsive portfolio website built using HTML, CSS, and Tailwind CSS. The site showcases my skills, featured projects, and contact information in a clean and modern layout and seamless dark mode toggle for enhanced user experience.",
    techStack: ["HTML", "Tailwind CSS"],
    imgSrc: project2,
    link: "https://tailwind-project-ahsan-s-projects-96f5cfc9.vercel.app/",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600 size-9" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500 size-9" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500 size-9" />,
  },
  {
    name: "NextJS",
    icon: <RiNextjsFill className="size-9" />
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400 size-9" />,
  },
  {
    name: "Node.js",
    icon: <DiNodejs className="text-green-500 size-20 -mt-7 -mb-6" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600 size-9" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400 size-9" />,
  },
  {
    name: "Reduxjs",
    icon: <SiRedux className="text-[#3498db] size-9" />,
  },
  {
    name: "Zustand",
    icon: (
      <img src="/zustand.svg" alt="Zustand" className="size-12 -mb-2" />
    )
  }
];

export const EXPERIENCES = [
  {
    yearRange: "2025 - Present",
    role: "Senior Full Stack Developer",
    company: "B.",
    description:
      "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.",
    techStack: ["TypeScript", "React.js", "Nextjs", "MongoDB"],
  },
  {
    yearRange: "2023 - 2024",
    role: "Frontend Developer",
    company: "B. ",
    description:
      "Designed and developed user interfaces for web applications using React.js. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
    techStack: ["HTML", "CSS", "Reactjs", "Tailwind CSS", "GSAP"],
  },

  {
    yearRange: "2021- 2022",
    role: "Software Engineer",
    company: "Xpert Prime",
    description:
      "Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.",
    techStack: ["Javacript", "TypeScript", "Reactjs", "Nodejs", "MongoDB", "Tailwind CSS"],
  },
  {
    yearRange: "2023 - 2024",
    role: "Full Stack Developer",
    company: "B. Ecommerce",
    description:
      "Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.",
    techStack: ["Javacript", "Reactjs", "Nodejs", "MongoDB", "Tailwind CSS", "JWT", "Redux Toolkit"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Information Technology",
    institution: "Quaid-I-Azam University, Islamabad",
    duration: "2021 - 2025",
    description:
      "Graduated with honors in Information Technology, focusing on algorithms, data structures, and Full Stack development. Completed a \"Financial Advisor\"  project on scalable cloud architectures.",
  },
  {
    id: 3,
    degree: "Certified React Developer",
    institution: "Udemy",
    duration: "2024",
    description:
      "Earned a certification in advanced React.js development, including hooks, context API, and performance optimization.",
  },
];

export const TESTIMONIAL = {
  name: "Ali Zain",
  title: "CEO, TechCorp",
  quote:
    "Working with \"Ahsan Gulzar\" was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage,
};
