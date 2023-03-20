import React from "react";
import "./styles.css";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";

import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="md:px-32 flex px-5 justify-center">
      <button
        type="submit"
        className=" py-3 px-8  outline-none  text-white font-bold shadow-md shadow-primary bg-[#915eff] collaborate"
      >
        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSexZfYUr5xJ1z_13ueSO_v-lYquHFz4_h7F_Uy64OnAUIjRdQ/viewform">
          <h3 className="text-xl">Contact</h3>
        </Link>
      </button>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
