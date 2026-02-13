import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full Stack Engineer</span>
            <h1 className="h1 my-6">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Vineet Prajapati</span>
            </h1>
            <h2 className="h3 my-4 max-w-lg">
              I build scalable, production-grade web applications using React.js
              and the MERN stack.
            </h2>

            <p className="max-w-[500px] mb-9 text-white/80">
              With hands-on experience developing ERP systems, job portals, and
              startup platforms, I specialize in React.js, Redux Toolkit (RTK
              Query), and full-stack MERN development. I focus on performance,
              scalable architecture, and clean UI.
            </p>

            {/* btn and social */}

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="/assets/resume/Resume.pdf" target="_blank">
                <Button
                  varient="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>View Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mt-8 xl:mb-8">
                <Social
                  containerStyles="flex gap-8"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div>
            <Photo className="order-1 xl:order-none mb-8 xl:mb-0" />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};

export default Home;
