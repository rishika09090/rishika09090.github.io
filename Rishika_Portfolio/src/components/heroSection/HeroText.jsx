import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BsDownload } from "react-icons/bs";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        Back-End Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Rishika <br className="sm:hidden md:block" />
        Kumari
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        A passionate Web Engineer and eager learner, driven
        <br />
        to build innovative and scalable web solutions.
      </motion.p>

      {/* Download Resume Button */}
      <motion.a
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        href="/Rishika_Portfolio/resume.pdf" 
        download="Rishika_Kumari_Resume.pdf" 
        className="mt-4 px-6 py-3 bg-orange text-white font-semibold text-lg rounded-lg flex items-center gap-2 w-fit mx-auto md:mx-0 hover:bg-orange-700 transition-all duration-300"
      >
        <BsDownload /> My Resume
      </motion.a>
    </div>
  );
};

export default HeroText;
