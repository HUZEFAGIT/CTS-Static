import { useState } from "react";
import { Link } from "react-router-dom";

// import { FaChevronDown } from "react-icons/fa";

import doctorsData from "../data/doctorsData";

const Doctors = () => {
  const [firstSlice, setFirstSlice] = useState(0);
  const [secondSlice, setSecondSlice] = useState(9);

  const handleSlice = (page: number) => {
    if (firstSlice === 0 && page === 2) {
      setFirstSlice(9);
      setSecondSlice(18);
    } else {
      setFirstSlice(0);
      setSecondSlice(9);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-8 px-4 bg-teal-500 text-white lg:px-16 lg:py-20">
        <div className="flex flex-col items-center gap-y-4 mb-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-y-4 mb-8 md:basis-2/4 lg:basis-2/6">
            <h1 className="text-4xl text-balance md:text-5xl">
              Find your trusted{" "}
              <span className="font-playfair-display text-white italic">
                healthcare
              </span>{" "}
              specialists.
            </h1>

            <p className="text-white">
              Connect with experienced, board-certified doctors who are dedicated 
              to providing personalized, compassionate care. From routine check-ups 
              to specialized treatments, CaretoSure's network of healthcare 
              professionals is here to support your wellness journey every step of the way.
            </p>
          </div>

          <img
            src="/assets/images/healthcare-hero.jpg"
            alt="Doctor tending to patient."
            className="max-h-[400px] md:w-[30%] md:max-h-none md:basis-2/6 rounded-xl"
          />
        </div>
      </section>
      {/* Doctors Grid */}
      <section className="py-8 px-4 text-teal-900 lg:px-16 lg:py-10">
        <h2 className="font-semibold text-4xl text-balance md:text-5xl">
          Expert{" "}
          <span className="font-playfair-display italic text-teal-400">
            Healthcare Providers
          </span>
        </h2>

        {/* <div className="my-8 flex items-center border border-teal-300 rounded-2xl overflow-hidden xl:max-w-[50%]">
          <FaChevronDown className="mx-4 cursor-pointer text-teal-600" />
          <input
            type="text"
            placeholder="Search by specialty, name, or condition"
            className="mr-auto py-2 pl-2 outline-teal-400 xl:basis-2/3"
          />
          <button className="h-full py-2 px-4 self-end bg-teal-300 font-bold hover:bg-teal-400 active:bg-teal-200 active:text-purple-800 lg:py-4 lg:px-6">
            Find Doctor
          </button>
        </div> */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-10">
          {...doctorsData.slice(firstSlice, secondSlice).map((doctor) => {
            return (
              <Link key={doctor.id} to={`/doctors/${doctor.id}`}>
                <div
                  className="mb-8 p-2 flex flex-col gap-y-2 bg-teal-100 text-teal-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 sm:p-4"
                >
                  <img
                    src={doctor.url}
                    alt="Doctor"
                    className="w-full min-w-60 h-64 object-cover object-top rounded-2xl sm:min-w-64"
                  />
                  <h3 className="text-2xl font-bold">Dr. {doctor.name}</h3>
                  <p className="mb-2 text-teal-700">{doctor.qualifications}</p>
                  <p className="text-sm text-teal-600">
                    {doctor.specialty}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="w-fit mx-auto flex gap-x-1 text-xl font-semibold">
          <button
            onClick={() => handleSlice(1)}
            className={`px-2 border-2 border-teal-200 rounded hover:bg-teal-100 ${
              firstSlice === 0 ? "bg-teal-50 cursor-default" : ""
            }`}
          >
            1
          </button>

          <button
            onClick={() => handleSlice(2)}
            className={`px-2 border-2 border-teal-200 rounded hover:bg-teal-100 ${
              firstSlice === 9 ? "bg-teal-50 cursor-default" : ""
            }`}
          >
            2
          </button>

          <button
            onClick={() => handleSlice(2)}
            className="px-2 border-2 border-teal-200 rounded hover:bg-teal-100"
          >
            &#10095;
          </button>
        </div>
      </section>
    </>
  );
};

export default Doctors;