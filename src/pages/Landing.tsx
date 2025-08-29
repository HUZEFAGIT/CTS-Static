import { useState } from "react";
import { FaDna, FaStethoscope, FaLaptopMedical } from "react-icons/fa";
import { IoArrowForward, IoClose } from "react-icons/io5";

import DoctorSlider from "../components/DoctorSlider";
import NewsSlider from "../components/NewsSlider";

import faqData from "../data/faqData";
import { Link } from "react-router-dom";

const Landing = () => {
  // FAQ Section state handling
  const [displayFAQ, setDisplayFAQ] = useState(0);

  const handleFAQ = (id: number) => {
    if (id !== displayFAQ) {
      setDisplayFAQ(id);
    } else if (id === displayFAQ) {
      setDisplayFAQ(0);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="py-8 px-4 text-white lg:p-16"
        style={{ backgroundColor: "#1092c9" }}
      >
        <div className="flex flex-col items-center gap-y-4 mb-8 md:flex-row">
          <h1 className="text-4xl text-balance mr-auto md:basis-1/3 md:text-5xl">
            We provide world class{" "}
            <span className="font-playfair-display text-teal-400 italic">
              treatment
            </span>{" "}
            for everyone.
          </h1>

          <div className="flex flex-col gap-y-4 md:basis-1/3">
            <p className="w-fit">
              Our healthcare team is dedicated to delivering advanced medical care
              using the latest technology and evidence-based practices. We strive
              to ensure every patient receives personalized attention and the
              highest quality treatment.
            </p>

            <Link
              to={"/contact"}
              className="w-fit py-4 px-8 flex items-center gap-x-4 bg-teal-500 font-medium text-white rounded-2xl lg:hover:bg-teal-600 ease-in-out duration-200 active:scale-95"
            >
              Make Appointment <IoArrowForward className="text-2xl" />
            </Link>
          </div>
        </div>

        <img
          src="/assets/images/landing/hero.jpg"
          alt="Scientist at work"
          className="w-full h-4/5 max-h-[700px] object-cover rounded-2xl"
        />
      </section>

      {/* "Core Values" Section (fields of study) */}
      <section className="py-16 px-4 text-[#04beb4] lg:p-16">
        <h2 className="text-3xl font-semibold mb-2">
          Our{" "}
          <span className="font-playfair-display italic text-[#1b9ca6]">
            Core
          </span>{" "}
          Values
        </h2>

        <p className="mb-12">
          We believe in compassion, innovation, and integrity. Our commitment is
          to provide ethical healthcare, foster continuous learning, and always
          put our patients first.
        </p>

        <div className="flex flex-wrap justify-around gap-y-8 [&>*]:rounded-3xl">
          <div className="max-w-80 p-8 flex flex-col gap-y-4 bg-emerald-100">
            <div className="w-fit p-4 text-3xl bg-emerald-200 rounded-full">
              <FaDna />
            </div>

            <h3 className="text-xl font-bold">Early Cancer Detection</h3>

            <p>
              We utilize advanced screening methods to detect cancer at its
              earliest stages, improving outcomes and offering hope to patients
              and families.
            </p>

            <a className="w-fit text-xl text-teal-400 font-semibold" href="#">
              Read More
            </a>
          </div>

          <div className="max-w-80 p-8 flex flex-col gap-y-4 bg-orange-100">
            <div className="w-fit p-4 text-3xl bg-orange-200 rounded-full">
              <FaStethoscope />
            </div>

            <h3 className="text-xl font-bold">Clinical Neurophysiology</h3>

            <p>
              Our specialists diagnose and treat neurological disorders using
              state-of-the-art equipment and research-driven approaches for optimal
              patient care.
            </p>

            <a className="w-fit text-xl text-teal-400 font-semibold" href="#">
              Read More
            </a>
          </div>

          <div className="max-w-80 p-8 flex flex-col gap-y-4  bg-emerald-100">
            <div className="w-fit p-4 text-3xl  bg-emerald-200 rounded-full">
              <FaLaptopMedical />
            </div>

            <h3 className="text-xl font-bold">Gastroenterology</h3>

            <p>
              We offer comprehensive digestive health services, from routine
              screenings to complex procedures, ensuring comfort and effective
              treatment for every patient.
            </p>

            <a className="w-fit text-xl text-teal-400 font-semibold" href="#">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* Health and well-being Section */}
      <section className="py-8 px-4 text-white lg:px-16 lg:py-24"
      style={{backgroundColor:'#1092c9'}}
      >
        <div className="flex flex-col items-center gap-y-4 mb-8 md:flex-row">
          <h3 className="text-2xl font-semibold mr-auto md:basis-2/4 md:text-4xl">
            Finding new ways to improve the{" "}
            <span className="font-playfair-display italic text-teal-400">
              health and well-being
            </span>{" "}
            of people everywhere.
          </h3>

          <div className="flex flex-col gap-y-4 md:basis-1/3">
            <p className="w-fit text-xl">
              Our team is constantly researching and implementing innovative
              solutions to enhance patient wellness and promote healthier
              communities.
            </p>

            <Link
              to={"/about"}
              className="w-fit py-4 px-8 flex items-center gap-x-4 bg-teal-500 font-medium text-white rounded-2xl lg:hover:bg-teal-600 ease-in-out duration-200 active:scale-95"
            >
              Read More <IoArrowForward className="text-2xl" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-2 [&>*]:h-full [&>*]:rounded-xl md:gap-x-6">
          <img
            loading="lazy"
            src="/assets/images/landing/consultation-1.jpg"
            alt="A medical consultation."
          />
          <img
            loading="lazy"
            src="/assets/images/landing/consultation-2.jpg"
            alt="A medical consultation."
          />
          <img
            loading="lazy"
            src="/assets/images/landing/consultation-3.jpg"
            alt="A medical consultation."
          />
        </div>
      </section>

      {/* Doctors Showcase Section */}
      <section className="py-8 px-4 text-teal-400 lg:px-16 lg:py-24">
        <div className="flex flex-col items-center gap-y-4 mb-8 md:flex-row">
          <h4 className="text-4xl font-semibold mr-auto md:basis-1/3">
            Discover our Highly Qualified{" "}
            <span className="font-playfair-display text-[#1391ce] italic">
              Doctors
            </span>
          </h4>

          <Link
            to={"/doctors"}
            className="w-fit py-4 px-8 self-start flex items-center gap-x-4 bg-teal-500 font-medium text-white rounded-2xl lg:hover:bg-teal-600 ease-in-out duration-200 active:scale-95"
          >
            See All Doctors <IoArrowForward className="text-2xl" />
          </Link>
        </div>

        <DoctorSlider />

        <span className="text-teal-400 text-center md:hidden">
          *Swipe left or right to see more.
        </span>
      </section>

      {/* FAQ Section */}
      <section className="py-8 px-4 text-white-900 cursor-pointer lg:px-16 lg:py-24"
        style={{ backgroundColor: "#1391ce" }}>
        <h5 className="text-2xl md:text-4xl font-semibold mb-12">
          Frequently Asked{" "}
          <span className="text-white font-playfair-display italic">
            Questions
          </span>
        </h5>

        <div className="flex flex-col">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="flex flex-wrap gap-y-4 border-b border-cyan-900 [&>*]:px-4 [&>*]:select-none"
              onClick={() => handleFAQ(faq.id)}
            >
              <div className="w-full py-4 flex items-center justify-between group">
                <p className="basis-4/5 font-bold cursor-pointer ease-linear duration-150 group-hover:text-white-500 lg:text-xl">
                  {faq.question}
                </p>
                <span
                  className={`text-4xl ease-in-out duration-300 ${
                    displayFAQ === faq.id ? "rotate-0" : "rotate-45"
                  } cursor-pointer`}
                  onClick={() => handleFAQ(faq.id)}
                >
                  <IoClose />
                </span>
              </div>

              <p
                className={`${
                  displayFAQ === faq.id ? "block" : "hidden"
                } basis-full pb-4 font-semibold cursor-default animate-slide-in-top`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="py-8 px-4 text-teal-900 lg:px-16 lg:py-24">
        <div className="flex flex-col items-center gap-y-4 mb-8 md:flex-row">
          <h4 className="text-4xl font-semibold mr-auto md:basis-1/3">
            Our Latest{" "}
            <span className="font-playfair-display text-teal-400 italic">
              News
            </span>
          </h4>

          <Link
            to={"/blog"}
            className="w-fit py-4 px-8 self-start flex items-center gap-x-4 bg-teal-500 font-medium text-white rounded-2xl lg:hover:bg-teal-600 ease-in-out duration-200 active:scale-95"
          >
            Read all news <IoArrowForward className="text-2xl" />
          </Link>
        </div>

        <NewsSlider />

        <span className="text-teal-950 text-center md:hidden">
          *Swipe left or right to see more.
        </span>
      </section>
    </>
  );
};

export default Landing;
