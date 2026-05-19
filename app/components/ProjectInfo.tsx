import { Projects } from "@/data/myData";
import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { VscGithubAlt } from "react-icons/vsc";
import { motion, MotionValue } from "motion/react";

interface ProjectInfoProps extends Projects {
  opacityContent?: MotionValue<number>
}

const variants = {
  hidden: {
    opacity: 0,
    y: 25
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const childVariants = {
  hidden: {
    opacity: 0,
    y: 25
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

const ProjectInfo: React.FC<ProjectInfoProps> = (props) => {
  return (
    <motion.div 
      className="w-full flex flex-col gap-6"
      style={{
        opacity: props.opacityContent
      }}
      >
      <div className="flex items-center gap-2">
        <h2 className="relative lg:text-3xl text-2xl bg-gradient-to-r bg-clip-text text-transparent from-purple-400 to-purple-200 font-semibold lg:before:content-[''] lg:before:h-1 lg:before:w-[25px] lg:before:rounded-full lg:before:bg-gradient-to-r before:from-purple-600 before:to-purple-200 lg:before:absolute lg:before:top-1/2 lg:before:-left-[35px]">
          {props.name}
        </h2>
        <a
          href={props.github}
          target="_blank"
          className="no-expand hover:scale-110 transition-all duration-300 p-1"
        >
          <VscGithubAlt className="lg:text-2xl text-xl" />
        </a>
      </div>
      <p className="text-neutral-400">{props.description}</p>
      <ul className="flex flex-col gap-1.5">
        {props.features?.map((feat, idx) => {
          return (
            <li key={idx} className="flex items-center gap-1 text-sm">
              <MdNavigateNext className="text-xl text-purple-400" />
              {feat}
            </li>
          );
        })}
      </ul>
      <motion.div 
        className="flex flex-wrap gap-3"
        variants={variants}
        initial='hidden'
        whileInView='visible'  
      >
        {props.technologies?.map((tech, idx) => {
          return (
            <motion.div 
                key={idx}
                className="flex items-center gap-1 text-sm bg-neutral-900 px-3 py-1 border border-neutral-700 rounded-lg shadow-lg shadow-purple-500/10"
                variants={childVariants}
              >
              <img
                src={`/icons/${tech}.svg`}
                alt=""
                className="h-4"
              />
              <h3 className="opacity-90">{tech}</h3>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ProjectInfo;
