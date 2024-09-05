"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaArrowCircleRight,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

import { SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const about = {
  title: "About Me",
  description:
    "Passionate Computer Science undergrad specializing in front-end web development. Skilled in HTML, CSS, and JavaScript, with handson experience in React. Proactive in exploring emerging trends to enhance user experiences. Strong problem-solving abilities honed through coursework and personal projects. Eager to contribute to front-end development teams, leveraging academic knowledge to deliver clean, intuitive interfaces.",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Vineet Prajaptai",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 9120508661",
    },
    {
      fieldName: "Email",
      fieldValue: "vineetprajapati2203@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "Fresher",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },

    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "Fresher !",
  items: [
    {
      company: "",
      position: "",
      duration: "",
    },
    {
      company: "",
      position: "",
      duration: "",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  // description:
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, repellendus.",
  items: [
    {
      institution: "Chandigarh University",
      degree: "Bachlore of Engineering in CSE",
      duration: "2020-2024",
    },
    {
      institution: "Tribhuvan Devi Academy",
      degree: "Intermidiate",
      duration: "2019-2020",
    },
    {
      institution: "Tribhuvan Devi Academy",
      degree: "Matriculation",
      duration: "2017-2018",
    },
  ],
};

const certificate = {
  icon: "/assets/resume/cap.svg",
  title: "My Certificates",
  // description:
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, repellendus.",
  items: [
    {
      institution: "Internshala",
      degree: "Full Stack Development",
      duration: "Jul 31, 2022",
      button: "/assets/certificates/web-dev-training-certificate.pdf"
    },
    {
      institution: "NPTEL",
      degree: "Software Testing",
      duration: "Jul-Oct 2022",
      button: "/assets/certificates/software-testing.jpg"
    },
    {
      institution: "NPTEL",
      degree: "Data Mining",
      duration: "Jan-Mar 2023",
      button: "/assets/certificates/data-mining.jpg"
    },
    {
      institution: "Coursera",
      degree: "Computer Vision for Engineering and Science",
      duration: "Oct 30, 2023",
      button: "/assets/certificates/computer-vision.pdf"
    },
    {
      institution: "Coursera",
      degree: "Preparing for Google Cloud Certificate",
      duration: "Feb 26, 2024",
      button: "/assets/certificates/cloud-developer.pdf"
    },
    {
      institution: "Udemy",
      degree: "PowerPoint Masterclass",
      duration: "Aug 30, 2021",
      button: "/assets/certificates/cloud-developer.pdf"
    },
    {
      institution: "Coursera",
      degree: "NoSQL, Big Data, and Spark Foundations Specialization",
      duration: "Mar 09, 2023",
      button: "/assets/certificates/nosql.pdf"
    },
    {
      institution: "Chandigarh University",
      degree: "Tech Invent 2021",
      duration: "Sept 10, 2021",
      button: "/assets/certificates/cu.png"
    },
    {
      institution: "Infosys | Springboard",
      degree: "TypeScript Essentials & Angular",
      duration: "Oct 10, 2022",
      button: "/assets/certificates/typescript-angular.pdf"
    },
  ],
};

const skills = {
  title: "My Skills",
  // description:
  // "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, asperiores?",
  skillList: [
    {
      icon: <TbBrandCpp />,
      name: "C++",
    },
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiMysql />,
      name: "MySql",
    },
    {
      icon: <FaGit />,
      name: "git",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>{" "}
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-lg">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto">
                  {experience.description}
                </p>
                {/* <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="bg-accent w-[6px] h-[6px] rounded-full"></span>
                            <p className="text-white/60 ">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea> */}
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-lg">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="flex max-w-[600px] text-white/60 mx-auto ">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="bg-accent w-[6px] h-[6px] rounded-full"></span>
                            <p className="text-white/60 ">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>

                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="certificates" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-lg md:h-full">
                <h3 className="text-4xl font-bold">{certificate.title}</h3>
                <p className="flex max-w-[600px] text-white/60 mx-auto ">
                  {certificate.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {certificate.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[3000px] min-h-[30px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="bg-accent w-[6px] h-[6px] rounded-full mt-4"></span>
                            <p className="text-white/60 mt-4 w-full ">{item.institution}</p>
                          </div>

                          <Link
                            href={item.button}
                            target="_blank"
                          >
                            <Button
                              varient="outline"
                              size="sm"
                              className="uppercase flex items-center gap-2"
                            >
                              <span>certificate</span>
                              <FiDownload className="text-xl" />
                            </Button>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 gap-y-6 max-w-[800px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4 flex-wrap"
                      >
                        <span className="text-white/60">
                          {item.fieldName} :{" "}
                        </span>
                        <span className="text-xl ">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="projects" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-lg">
                <h3 className="text-4xl font-bold text-white">Work/Projects</h3>
                <Link href="/work">
                  <Button varient="outline" className="uppercase gap-2">
                    Work <FaArrowCircleRight />
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
0;
