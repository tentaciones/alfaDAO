import React from "react";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";

import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="md:px-32 px-5">
      <div className=" flex flex-col h-[200px] items-center justify-center rounded-2xl bg-black-100">
        <p className={styles.sectionSubText}>Collab Request form</p>
        <button
          type="submit"
          className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
        >
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSexZfYUr5xJ1z_13ueSO_v-lYquHFz4_h7F_Uy64OnAUIjRdQ/viewform">
            <h3 className={styles.sectionHeadText}>Contact.</h3>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
