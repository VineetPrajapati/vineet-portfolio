"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowDownRight, BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
Link;

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Apple iPhone 15 Pro",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque beatae eum veritatis repudiandae maiores. In.",
    stack: [{ name: "React.js" }, { name: "Three.js" }, { name: "GSAP" }, { name: "TailwindCSS" }],
    image: "/assets/work/thumb1.png",
    live: "https://apple-iphone15-pro.netlify.app/",
    github: "https://github.com/VineetPrajapati/apple_website",
  },
  {
    num: "02",
    category: "frontend",
    title: "Music School Website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque beatae eum veritatis repudiandae maiores. In.",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }, { name: "Aceternity UI" }],
    image: "/assets/work/thumb2.png",
    live: "https://welcometotheworldofmusic.netlify.app/",
    github: "https://github.com/VineetPrajapati/music-app",
  },
  {
    num: "03",
    category: "frontend",
    title: "Nike Website - UI/UX",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque beatae eum veritatis repudiandae maiores. In.",
    stack: [{ name: "React.js" }, { name: "TailwindCSS" }],
    image: "/assets/work/thumb3.png",
    live: "https://nike-landingpage-ui.netlify.app/",
    github: "https://github.com/VineetPrajapati/nike",
  },
];

Swiper;

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handdleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-normal font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project category */}
              {/* <h2 className="text-[42px] font-bold leading-normal text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2> */}
              
              {/* project title */}
              <h2 className="text-[42px] font-bold leading-normal text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* last comma */}
                      {index != project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20" />

              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* githut repo */}

                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handdleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] rounded-lg relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          alt={project.title}
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* slider button */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent opacity-50 rounded-full hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
