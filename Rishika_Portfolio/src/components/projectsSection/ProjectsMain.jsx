import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Miss Mart",
    year: "Jan 2025",
    align: "right",
    image: `${import.meta.env.BASE_URL}website-img-1.jpg`,
    link: "https://rishika09090.github.io/MissMart/",
  },
  {
    name: "ToDo App",
    year: "Feb 2025",
    align: "left",
    image: `${import.meta.env.BASE_URL}website-img-2.webp`,
    link: "#",
  },
  {
    name: "My Portfolio Website",
    year: "Feb 2025",
    align: "right",
    image: `${import.meta.env.BASE_URL}website-img-3.jpg`,
    link: "#",
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
