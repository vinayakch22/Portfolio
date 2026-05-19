"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { featuredProjects } from "@/data/myData";
import ProjectCard from "./ProjectCard";
import ProjectInfo from "./ProjectInfo";
import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";

const FeaturedProjects = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateContent = useTransform(scrollYProgress, [0, 1], [45, -45]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.10, 0.80, 1], [0, 1, 1, 0]);

  return (
    <section
      id="projects"
      className="black-background min-h-screen flex flex-col items-center lg:gap-24 gap-12 pt-[100px] lg:pb-30 sm:pb-24 pb-16 lg:px-44 sm:px-28 px-4"
    >
      <motion.h1
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="sm:text-5xl text-3xl text-center font-bold bg-gradient-to-r bg-clip-text text-transparent from-purple-600 to-purple-200"
      >
        FEATURED PROJECTS
      </motion.h1>
      <div className="flex flex-col sm:gap-36 gap-18" ref={ref}>
        {featuredProjects.map((project) => {
          return (
            <motion.div
              key={project.name}
              className="flex flex-col lg:flex-row lg:gap-15 gap-10"
            >
              <ProjectCard
                image={project.image}
                caption={project.caption}
                link={project.link}
                name={project.name}
                translateContent={translateContent}
                opacityContent={opacityContent}
              />
              <ProjectInfo
                name={project.name}
                github={project.github}
                description={project.description}
                features={project.features}
                technologies={project.technologies}
                opacityContent={opacityContent}
              />
            </motion.div>
          );
        })}
      </div>
      <Link
        href='projects'  
        className="text-lg flex items-center gap-2 no-expand hover:scale-105 transition-transform duration-300"
        >
        View More Projects <MdNavigateNext className="text-3xl p-0.5 border border-white/15 bg-neutral-900 rounded-full" />
      </Link>
    </section>
  );
};

export default FeaturedProjects;
