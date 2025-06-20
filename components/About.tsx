import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            <span className="text-textGreen font-semibold">
              MERN Stack Developer | Full-Stack Developer
            </span>{" "}
            — I specialize in building dynamic, high-performance web
            applications using
            <span className="text-textGreen">
              {" "}
              React.js, Node.js, Express.js,
            </span>{" "}
            and
            <span className="text-textGreen"> MongoDB</span>. With proficiency
            in both
            <span className="text-textGreen"> MongoDB and MySQL</span>, I adapt
            seamlessly to the specific needs of each project.
          </p>

          <p className="mt-2">
            I excel at creating{" "}
            <span className="text-textGreen">responsive user interfaces</span>,
            designing
            <span className="text-textGreen"> RESTful APIs</span>, and
            integrating
            <span className="text-textGreen">real-time features</span>. I also
            have hands-on experience with
            <span className="text-textGreen">Electron.js</span> to develop
            cross-platform desktop applications that run smoothly across
            Windows, macOS, and Linux.
          </p>

          <p className="mt-2">
            Additionally, I'm well-versed in{" "}
            <span className="text-textGreen">
              Linux-based server management
            </span>
            , including deployment and maintenance using tools like
            <span className="text-textGreen"> CyberPanel, Hostinger,</span> and
            <span className="text-textGreen"> aaPanel</span>. I manage domains,
            configure SSLs, handle databases, and optimize servers for secure
            and stable application hosting.
          </p>

          <p className="mt-2">
            Fast-forward to today, I've had the privilege of working with a
            <span className="text-textGreen">
              startup and an advertising agency
            </span>
            , where I contributed to building products from scratch, solving
            performance issues, and shipping features that matter.
          </p>

          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
