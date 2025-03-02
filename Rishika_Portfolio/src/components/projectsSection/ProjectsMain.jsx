import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Miss Mart",
    year: "A fully functional e-commerce platform inspired by Bigbasket. Miss Mart offers an intuitive shopping experience with features like browsing products, adding items to the cart, and managing user accounts.",
    align: "right",
    image: `${import.meta.env.BASE_URL}website-img-1.jpg`,
    link: "https://rishika09090.github.io/MissMart/",
    githubLink: "https://github.com/rishika09090/MissMart"
  },
  {
    name: "ToDo App",
    year: "A Full-Stack To-Do App built with Node.js, React, and MongoDB. It offers seamless email authentication, efficient Redis caching, secure JWT session management, and intuitive CRUD operations for users to manage their tasks effortlessly.",
    align: "left",
    image: `${import.meta.env.BASE_URL}website-img-2.webp`,
    link: "https://65677556-9326-43b1-bdf3-ae161fdd6d24.e1-us-east-azure.choreoapps.dev/",
    githubLink: "https://github.com/rishika09090/to-do-app-frontend"
  },
  {
    name: "My Portfolio Website",
    year: "A sleek portfolio website built with React, showcasing projects and skills. It features a Contact Me form powered by EmailJS for seamless email communication.",
    align: "right",
    image: `${import.meta.env.BASE_URL}website-img-3.jpg`,
    link: "#",
    githubLink: "https://github.com/rishika09090/rishika09090.github.io"
  },
  // {
  //   name: "Bank of Luck",
  //   year: "May2024",
  //   align: "left",
  //   image: "./public/website-img-4.jpg",
  //   link: "#",
  // },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
              githubLink={project.githubLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
