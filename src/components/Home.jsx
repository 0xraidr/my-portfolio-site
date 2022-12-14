import React from "react";
import heroPic from "../assets/anonpfp.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b
     from-black via-black to-slate-800"
    >
      <div
        className="max-w-screen-lg max-auto flex
         flex-col items-center justify-center h-full px-4
         md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <Fade left big>
            <h2
              className=" animation text text-4xl sm:text-7xl 
                font-bold text-white"
            >
              I'm a Full Stack Developer.
            </h2>
          </Fade>
          <Fade right big>
            <p className="text-gray-400 py-4 max-w-md">
              I love to work on web applications using technologies like React
              and Tailwind. Currently, I'm learning the fundamentals of Rust and
              learning how to build Solana programs!
            </p>
          </Fade>
          <div>
            <Fade bottom>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 
                    flex items-center rounded-md bg-gradient-to-br from-black via-gray-800 to-gray-600 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight
                    size={25}
                    className="
                            ml-1"
                  />
                </span>
              </Link>
            </Fade>
          </div>
        </div>

        <div>
          <img
            src={heroPic}
            alt="my profile"
            className="
                rounded-full mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
