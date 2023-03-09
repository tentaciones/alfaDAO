import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { communities } from "../constants";
import { textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
const Community = () => {
  return (
    <div className=" h-[200px]   md:h-[400px]  md:fixed mt-[60px] md:mt-0 ">
      <div className="flex flex-col justify-center  ">
        {communities.map((Community) => (
          <>
            <Link to={Community.link}>
              <div
                className="md:w-[60px] md:h-[60px] h-7 w-7"
                key={Community.name}
              ></div>

              <div class="md:w-[60px] md:h-[60px] h-7 w-7 mx-auto">
                <div class="relative group">
                  <div class="absolute  -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <a className="w-full" href={Community.link}>
                    <div class="relative md:w-[60px] md:h-[60px] h-7 w-7   bg-black  ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 ">
                      <img
                        src={Community.icon}
                        alt=""
                        className="w-full h-full rounded-lg"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Community, "community");
