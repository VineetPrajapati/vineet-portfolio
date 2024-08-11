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
    title: "Apple iPhone 15 Pro  --> Desktop Friendly",
    description:
      "Created an immersive user interface website for the Apple iPhone 15 Pro, utilizing React.js, Three.js, GSAP, and TailwindCSS. By implementing cutting-edge technologies, I delivered captivating visual experiences and seamless interactions. My focus was on crafting intuitive and user-friendly interfaces that effectively showcase the features and capabilities of the iPhone 15 Pro.",
    stack: [
      { name: "React.js" },
      { name: "Three.js" },
      { name: "GSAP" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://apple-iphone15-pro.netlify.app/",
    github: "https://github.com/VineetPrajapati/apple_website",
  },
  {
    num: "02",
    category: "frontend",
    title: "Music School Website",
    description:
      "Built a modern and responsive user interface for a music school website using Next.js. By implementing sleek and customizable designs with TailwindCSS, I enhanced the user experience. Additionally, I leveraged the power of Aceternity UI to create intuitive and visually appealing elements tailored specifically for the music education industry",
    stack: [
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "Aceternity UI" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://welcometotheworldofmusic.netlify.app/",
    github: "https://github.com/VineetPrajapati/music-app",
  },
  {
    num: "03",
    category: "frontend",
    title: "Nike Website - UI/UX",
    description:
      "Designed and developed the user interface for Nike's website using React.js and TailwindCSS, implementing responsive and visually captivating designs to enhance the user experience. I collaborated cross-functionally to create intuitive interfaces that align with Nike's brand identity and meet customer expectations.",
    stack: [{ name: "React.js" }, { name: "TailwindCSS" }],
    image: "/assets/work/thumb3.png",
    live: "https://nike-landingpage-ui.netlify.app/",
    github: "https://github.com/VineetPrajapati/nike",
  },
  {
    num: "04",
    category: "frontend",
    title: "gpt-03",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dignissimos porro perferendis, ex recusandae voluptate maxime assumenda est mollitia labore ab saepe, necessitatibus fuga? Nesciunt eaque nobis hic accusantium illo?",
    stack: [{ name: "React.js" }, { name: "Javascript" }, { name: "CSS" }],
    image: "/assets/work/thumb4.png",
    live: "https://gpt-o3.netlify.app/",
    github: "https://github.com/VineetPrajapati/gpt3",
  },
  {
    num: "05",
    category: "frontend",
    title: "Brainwave",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dignissimos porro perferendis, ex recusandae voluptate maxime assumenda est mollitia labore ab saepe, necessitatibus fuga? Nesciunt eaque nobis hic accusantium illo?",
    stack: [
      { name: "React.js" },
      { name: "Javascript" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/thumb5.png",
    live: "https://brainwave-ui-app.netlify.app/",
    github: "https://github.com/VineetPrajapati/Brainwave",
  },
  {
    num: "06",
    category: "frontend",
    title: "Modern Bank",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dignissimos porro perferendis, ex recusandae voluptate maxime assumenda est mollitia labore ab saepe, necessitatibus fuga? Nesciunt eaque nobis hic accusantium illo?",
    stack: [
      { name: "React.js" },
      { name: "Javascript" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/thumb6.png",
    live: "https://modernbankingsystem.netlify.app/",
    github: "https://github.com/VineetPrajapati/bank_modern_app",
  },
  {
    num: "07",
    category: "frontend",
    title: "Family Golf",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dignissimos porro perferendis, ex recusandae voluptate maxime assumenda est mollitia labore ab saepe, necessitatibus fuga? Nesciunt eaque nobis hic accusantium illo?",
    stack: [{ name: "HTMl" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/assets/work/thumb7.png",
    live: "https://symphonious-griffin-e85181.netlify.app/",
    github: "https://github.com/VineetPrajapati/Sidecup-Family-Golf---Project1",
  },
  {
    num: "08",
    category: "frontend",
    title: "Netflix",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dignissimos porro perferendis, ex recusandae voluptate maxime assumenda est mollitia labore ab saepe, necessitatibus fuga? Nesciunt eaque nobis hic accusantium illo?",
    stack: [{ name: "HTMl" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/assets/work/thumb8.png",
    live: "https://joyful-sopapillas-df396f.netlify.app/",
    github: "https://github.com/VineetPrajapati/Netflix-Clone",
  },
  {
    num: "09",
    category: "frontend",
    title: "Weather app",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dignissimos porro perferendis, ex recusandae voluptate maxime assumenda est mollitia labore ab saepe, necessitatibus fuga? Nesciunt eaque nobis hic accusantium illo?",
    stack: [{ name: "React.js" }, { name: "Javascript" }, { name: "TailwindCSS" }, { name: "OpenWeather" }],
    image: "/assets/work/thumb9.png",
    live: "https://o1weather.netlify.app/",
    github: "https://github.com/VineetPrajapati/weather_app",
  },
  {
    num: "10",
    category: "frontend",
    title: "Unique Password Generator",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dignissimos porro perferendis, ex recusandae voluptate maxime assumenda est mollitia labore ab saepe, necessitatibus fuga? Nesciunt eaque nobis hic accusantium illo?",
    stack: [{ name: "React.js" }, { name: "Javascript" }, { name: "TailwindCSS" }, { name: "Hooks" }],
    image: "/assets/work/thumb10.png",
    live: "https://uniquepasswordgeneration.netlify.app/",
    github: "https://github.com/VineetPrajapati/passwordGenerator",
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
                    <div className="h-full rounded-lg relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" />

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
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 w-full justify-between"
                btnStyles="rounded-full hover:bg-accent-hover text-primary font-bold text-2xl text-[22px] w-[50px] h-[50px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
