import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I'm an aspiring full stack developer diving deep into the world of web development. With a solid foundation in React and Tailwind CSS, I'm now expanding my skills to encompass the full stack, delving into technologies like Node.js and MongoDB. Additionally, I'm mastering Redux Toolkit to efficiently manage state in my applications. Proficient in Git version control, I'm committed to continuous learning and improvement. My aim is to combine my expertise in front-end development with newfound back-end skills to create dynamic and seamless web experiences that elevate user engagement and satisfaction.`;

export const ABOUT_TEXT = `Hey there! I'm Bogdan, a passionate individual hailing from the beautiful city of Novi Sad, Serbia. By day, I'm a graduate from the Technical College of Vocational Studies here in Novi Sad, and by night, I'm a volleyball enthusiast and a dedicated frontend developer.

My journey in the world of technology has led me to work on various personal frontend projects, where I've honed my skills and unleashed my creativity. But beyond the code, I'm guided by a strong moral compass rooted in deductive reasoning, shaping not only my work but also my approach to life.

In my free time, you'll often find me spiking balls on the volleyball court, constantly striving to improve my game and push my limits. And when I'm not diving for the perfect serve, I'm fueled by the ambition to become a full stack developer, continuously seeking opportunities to expand my knowledge and expertise.

Life, to me, is all about growth and self-improvement. Whether it's mastering a new programming language or perfecting my volleyball technique, I thrive on the challenge of bettering myself in every aspect of my life.`;

export const EXPERIENCES = [
  {
    year: "Mar 2022 - May 2022",
    role: "React.js Intern",
    company: "Cloud9 Web Services",
    description: `Developed projects using React.js, focusing on component-based architecture. Engaged in diverse tasks assigned by my mentor to broaden skills and contribute to project success.`,
    technologies: ["Javascript", "React.js", "Json-API"],
  },
];

export const PROJECTS = [
  {
    title: "Bank Promotion",
    image: project1,
    link:'https://github.com/BogdanT258/ecommerce_pop/tree/main/bank_modern_app',
    host:'https://hoobankbt.netlify.app/',
    description:
      "A website for crypto currency promotion and deals that specified bank gives.",
    technologies: ["React", "Tailwind"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    link:'https://github.com/BogdanT258/Portfolio',
    host:'',
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Tailwind", "React", "Framer Motion"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    link:'https://github.com/BogdanT258/elios_lite',
    host:'',
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["React", "Tailwind", "Firebase", "Redux"],
  },
];

export const CONTACT = {
  address: "Novi Sad, Serbia",
  phoneNo: "+381 64 13 88 241 ",
  email: "bogdantrivic1@gmail.com",
};
