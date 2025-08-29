import { useState } from "react";
import { useToast } from "../utils/toast-context";
import { IoArrowForward, IoStar } from "react-icons/io5";

const patients = [
  { name: "Jacob Jones", url: "/assets/images/reviews/patient-1.jpg" },
  { name: "Jenny Wilson", url: "/assets/images/reviews/patient-2.jpg" },
  { name: "Leslie Alexander", url: "/assets/images/reviews/patient-3.jpg" },
];

const Contact = () => {
  const toast = useToast();
  const [showUpload, setShowUpload] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [doneAck, setDoneAck] = useState(false);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setImages(files);
    setPreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const handleCloseUpload = () => {
    setShowUpload(false);
    setImages([]);
    setPreviews([]);
    setDoneAck(false);
  };

  const handleDone = () => {
    setDoneAck(true);
    setTimeout(() => {
      setShowUpload(false);
      setImages([]);
      setPreviews([]);
      setDoneAck(false);
    }, 1200);
  };

  return (
    <>
      {/* Header Section */}
      <section className="py-8 px-4 bg-[#1190ce] text-white text-center lg:px-16 lg:py-20">
        <div className="mb-4 flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <h1 className="text-4xl text-balance font-medium md:text-5xl flex items-center gap-4">
              Book your{" "}
              <span className="text-teal-400 font-playfair-display italic">
                appointment
              </span>
            </h1>
            <button
              className="bg-teal-400 text-white font-semibold px-4 py-2 rounded-xl shadow-lg hover:bg-teal-500 transition text-lg animate-pulse"
              onClick={() => setShowUpload(true)}
            >
              Upload Prescription
            </button>
          </div>
          <p className="md:px-52 lg:px-80">
            Explore our blog for the latest medical knowledge, patient stories,
            and tips to lead a healthier life.
          </p>
        </div>
        {/* Upload Modal/Area */}
        {showUpload && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 shadow-lg w-full max-w-md relative flex flex-col items-center">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                onClick={handleCloseUpload}
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4 text-teal-600 text-center">
                Upload Prescription
              </h2>
              {!doneAck ? (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    capture="environment"
                    onChange={handleFiles}
                    className="mb-6 mx-auto block w-64 h-16 text-lg border-2 border-teal-400 rounded-lg p-4 cursor-pointer bg-gray-100"
                    style={{ fontSize: "1.1rem" }}
                  />
                  <div className="flex flex-wrap gap-4 justify-center mb-4">
                    {previews.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt={`Prescription Preview ${idx + 1}`}
                        className="h-24 w-24 object-cover rounded-lg border"
                      />
                    ))}
                  </div>
                  {previews.length > 0 && (
                    <button
                      className="mt-2 bg-teal-500 text-white px-6 py-3 rounded-lg text-lg flex items-center justify-center gap-2"
                      onClick={handleDone}
                    >
                      Done
                    </button>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-8">
                  <span className="text-green-500 text-5xl mb-2">&#10003;</span>
                  <span className="text-teal-600 text-xl font-bold">Done!</span>
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Appointment form Section */}
      <section className="py-8 px-4 text-teal-400 text-center lg:px-16 lg:py-20">
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="w-full grid grid-cols-1 gap-2 lg:w-2/4 lg:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="w-fit text-lg text-teal-600 font-bold"
              >
                First Name*
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Eg.: William"
                className="mb-2 p-2 border border-[#047c7b] rounded-xl focus:outline-teal-400 placeholder:text-gray-500 text-black"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="surname"
                className="w-fit text-lg text-teal-600 font-bold"
              >
                Last Name*
              </label>
              <input
                required
                type="text"
                name="surname"
                placeholder="Eg.: Smith"
                className="mb-2 p-2 border border-[#047c7b] rounded-xl focus:outline-teal-400 placeholder:text-gray-500 text-black"
              />
            </div>

            <div className="flex flex-col gap-2 lg:col-span-2">
              <label
                htmlFor="email"
                className="w-fit text-lg text-teal-600 font-bold"
              >
                Email*
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="Eg.: williamsmith@gmail.com"
                className="mb-2 p-2 border border-[#047c7b] rounded-xl focus:outline-teal-400 placeholder:text-gray-500 text-black"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="w-fit text-lg text-teal-600 font-bold"
              >
                Phone*
              </label>
              <input
                required
                type="number"
                name="phone"
                placeholder="Eg.: +1 444 5555"
                className="mb-2 p-2 border border-[#047c7b] rounded-xl focus:outline-teal-400 placeholder:text-gray-500 text-black"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="appointment"
                className="w-fit text-lg text-teal-600 font-bold"
              >
                Appointment Date*
              </label>
              <input
                required
                type="date"
                name="appointment"
                placeholder="dd-mm-yy"
                className="mb-2 p-2 border border-[#047c7b] rounded-xl focus:outline-teal-400 placeholder:text-gray-500 text-black"
              />
            </div>

            <div className="flex flex-col gap-2 lg:col-span-2">
              <label
                htmlFor="state"
                className="w-fit text-lg text-teal-600 font-bold"
              >
                State
              </label>
              <input
                type="text"
                name="state"
                placeholder="Eg.: California"
                className="mb-2 p-2 border border-[#047c7b] rounded-xl focus:outline-teal-400 placeholder:text-gray-500 text-black"
              />
            </div>

            <div className="mb-8 flex flex-col gap-2 lg:col-span-2">
              <label
                htmlFor="note"
                className="w-fit text-lg text-teal-600 font-bold"
              >
                Note*
              </label>
              <textarea
                required
                name="note"
                placeholder="Text"
                className="p-2 border border-[#047c7b] rounded-xl focus:outline-teal-400 placeholder:text-gray-500 text-black"
              ></textarea>
            </div>

            <button
              type="submit"
              onClick={() => toast?.open("Appointment scheduled succesfully.")}
              className="w-fit py-4 px-8 flex items-center gap-x-4 text-xl bg-teal-500 text-white rounded-xl lg:hover:bg-teal-600 ease-in-out duration-200 active:scale-95"
            >
              Submit{" "}
              <span className="text-2xl">
                <IoArrowForward />
              </span>
            </button>
          </div>

          <img
            src="/assets/images/appointment-image.jpg"
            alt=""
            className="w-full h-96 object-cover rounded-2xl lg:w-2/4 lg:h-[600px]"
          />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-8 px-4 text-teal-600 lg:px-16 lg:py-20">
        <h2 className="mb-16 font-semibold text-4xl text-balance md:text-5xl">
          Our{" "}
          <span className="font-playfair-display italic text-teal-900">
            patient's
          </span>{" "}
          feedback
        </h2>

        <div className="w-full flex flex-col gap-4 lg:flex-row">
          {patients.map((patient) => (
            <div className="p-4 flex flex-col gap-y-4 bg-teal-100 font-semibold text-lg rounded-xl lg:gap-y-6">
              {/* Profile pic // Name // Rating */}
              <div className="flex items-center gap-x-6">
                <img
                  src={patient.url}
                  alt={`${patient.name}'s profile picture`}
                  className="h-16 w-16 object-cover rounded-full shadow-md"
                />

                <div className="flex flex-col gap-y-2 font-semibold text-xl lg:text-2xl text-teal-900">
                  <p>{patient.name}</p>
                  <span className="flex gap-x-1 text-yellow-400">
                    <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar />
                  </span>
                </div>
              </div>

              {/* Review */}
              <p className="text-teal-900">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                similique veritatis aliquam id, quae esse laborum reiciendis. Id
                qui, eveniet ut atque veniam excepturi optio quibusdam,
                reiciendis molestias dignissimos ab.
              </p>

              <span className="mb-8 text-teal-900">16:08 PM Mar 20 2023</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Contact;
