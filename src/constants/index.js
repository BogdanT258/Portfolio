import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm an aspiring full stack developer diving deep into the world of web development. With a solid foundation in React and Tailwind CSS, I'm now expanding my skills to encompass the full stack, delving into technologies like Node.js and MongoDB. Additionally, I'm mastering Redux Toolkit to efficiently manage state in my applications. Proficient in Git version control, I'm committed to continuous learning and improvement. My aim is to combine my expertise in front-end development with newfound back-end skills to create dynamic and seamless web experiences that elevate user engagement and satisfaction.`;

export const ABOUT_TEXT = `I'm a dynamic and driven web developer, currently focused on mastering the intricacies of the full stack. While my journey began with a strong emphasis on front-end development, where I excel in React and Tailwind CSS, I'm now venturing into the realms of Node.js and MongoDB, expanding my skill set to encompass the entire stack. Alongside this, I'm diving deep into Redux Toolkit for efficient state management and honing my expertise in Git version control. In addition to my current pursuits, I'm deeply passionate about the field of web security and aspire to expand my expertise in this area. With the ever-growing importance of cybersecurity in today's digital landscape, I'm committed to making a meaningful impact in safeguarding digital assets and protecting user privacy. I thrive in collaborative environments, where I relish the opportunity to tackle complex challenges and deliver innovative solutions. Beyond coding, I'm an avid explorer of the outdoors and a passionate volleyball player. My commitment to lifelong learning and innovation drives me to continuously seek out new opportunities for growth and development.`;

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
    description:
      "A website for crypto currency promotion and deals that specified bank gives.",
    technologies: ["React", "Tailwind"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    link:'https://github.com/BogdanT258/Portfolio',
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Tailwind", "React", "Framer Motion"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    link:'https://github.com/BogdanT258/elios_lite',
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
