"use client";

import { motion } from "framer-motion";
import React from "react";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  project: Project;
};

function ExperienceCard({ project }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 snap-center p-5 cursor-pointer transition-opacity duration-200 overflow-hidden w-screen z-20">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-48 w-auto"
        src={urlFor(project.image).url()}
        alt=""
      />
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-2xl font-semibold text-center">{project?.title}</h4>

        <div className="flex flex-row items-center space-x-2 justify-center">
          {project?.technologies.map((technology) => (
            <img
              className="h-10 w-10 rounded-full"
              key={technology?._id}
              src={urlFor(technology?.image).url()}
              alt=""
            />
          ))}
        </div>

        <p className="space-y-4 ml-5 text-lg h-48 overflow-y-scroll md:h-32 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7Ab0A]/80 pr-5">
          {project?.summary}
        </p>
      </div>
    </article>
  );
}

export default ExperienceCard;
