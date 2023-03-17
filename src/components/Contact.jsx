import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";

import { Link } from "react-router-dom";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    Name: "",
    Twitter: "",
    Discord: "",
    Message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbyY1st1avH1f_qafAW9IxGjkA-l-sm37rN0Vw532UXbFVrMD7q-Y82X5E3qixWF7NU/exec",
      {
        method: "POST",
        body: form,
      }
    ).then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          Name: "",
          Twitter: "",
          Discord: "",
          Message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "chideracharles65",
          from_email: form.email,
          to_email: "chideracharles654@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            Name: "",
            Twitter: "",
            Discord: "",
            Message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="px-32">
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
