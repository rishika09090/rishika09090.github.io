import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "BDA",
    company: "Doubtnut",
    date: "Aug 2021 - Nov 2021",
    responsibilities: [
      "Promoted EdTech solutions through strategic client engagement.",
      "Conducted data-driven sales approaches to optimize conversions.",
      "Leveraged technology to analyze user needs and enhance outreach.",
    ],
  },
  {
    job: "Executive",
    company: "TrainingYA",
    date: "Jan 2023 - Sept 2023",
    responsibilities: [
      "Managed digital workflows, documentation, and process automation.",
      "Facilitated cross-team collaboration to improve operational efficiency.",
      "Drafted structured professional communication for stakeholders.",
    ],
  },
  {
    job: "Web Engineer",
    company: "Masai School",
    date: "Oct 2024 - Present",
    responsibilities: [
      "Developing and optimizing scalable web applications.",
      "Collaborating on real-world projects to enhance coding proficiency.",
      "Implementing industry best practices in software development.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
