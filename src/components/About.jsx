import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[200px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-3 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-full h-20 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        AlfaDAO is an exclusive community consisting of power DeFi and NFT users
        who are actively involved with researching and hunting alfa. By joining
        AlfaDAO, you will be granted access to our community, custom alfa
        scraping tools, DA meetings, AMAs, and far more valuable content.
        <p>
          As many of you know, finding projects early is only half the battle.
          Other challenges include keeping up with announcements, tracking
          dates, analyzing smart contracts and red flags, as well as many other
          tedious administrative tasks. By creating custom decentralized tools,
          DAO members, collectively, are given the ability to tweak and optimize
          the DAO tools to best fit each developing narrative and trend.
        </p>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-5">
        {services.map((service, index) => (
          <Link to="https://opensea.io/collection/alfadao-access">
            <ServiceCard key={service.title} index={index} {...service} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
