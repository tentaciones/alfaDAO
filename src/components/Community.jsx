import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import { communities } from "../constants";
import { Link } from "react-router-dom";
const Community = () => {
  return (
    <div>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Join Community
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-2 -mt-20">
        {communities.map((Community) => (
          <>
            <Link to={Community.link}>
              <div className="w-28 h-28" key={Community.name}></div>

              <div class="w-[60px] h-[60px] mx-auto">
                <div class="relative group">
                  <div class="absolute  -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <a className="w-full" href={Community.link}>
                    <div class="relative w-[60px] h-[60px]   bg-black  ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
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

export default SectionWrapper(Community, "");
