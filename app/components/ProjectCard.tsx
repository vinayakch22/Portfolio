import { Projects } from "@/data/myData";
import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { motion, MotionValue } from "motion/react";

interface ProjectCardProps extends Projects {
  translateContent?: MotionValue<number>,
  opacityContent?: MotionValue<number>
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <a className="w-full no-expand" href={props.link} target="_blank">
      <motion.div 
      style={{ 
        y: props.translateContent,  
        opacity: props.opacityContent
      }}
      className="p-2 rounded-3xl bg-[#F2F2F20C] border-1 border-white/15 shadow-sm shadow-white group">
        <div className="flex flex-col lg:gap-15 gap-5 sm:pt-10 pt-5 lg:px-15 sm:px-12 px-7 bg-gradient-to-b from-neutral-900 to-neutral-500 rounded-2xl overflow-hidden">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-10">
            <p className="lg:text-xl sm:text-lg text-base sm:w-4/5 w-full">{props.caption}</p>
            <GrLinkNext className="lg:text-4xl text-2xl group-hover:translate-x-5 transition-all duration-300 ease-in-out" />
          </div>
          <div>
            <img
              className="w-full bg-purple-400 shadow-[0_0_30px_#DDDDDD] rounded-lg translate-y-2 group-hover:-rotate-4 group-hover:scale-115 transition-transform duration-400"
              src={`projects/${props.image}`}
              alt={props.name}
            />
          </div>
        </div>
      </motion.div>
    </a>
  );
};

export default ProjectCard;
