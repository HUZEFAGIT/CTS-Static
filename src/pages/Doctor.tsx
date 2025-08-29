// import { Link, useParams } from "react-router-dom";

// import { TbFirstAidKit } from "react-icons/tb";
// import { IoArrowForward } from "react-icons/io5";

// import doctorsData from "../data/doctorsData";

// const Doctor = () => {
//   const params = useParams<{ doctorId: string }>();

//   return (
//     <>
//       {/* Header Section */}
//       <section
//         className="py-8 px-4 lg:px-16 lg:py-20"
//         style={{ backgroundColor: "#02c0b4", color: "#fff" }}
//       >
//         {doctorsData.map((doctor) => {
//           if (doctor.id.toString() === params.doctorId)
//             return (
//               <div className="flex flex-col items-center md:flex-row">
//                 <img
//                   src={doctor.url}
//                   className="h-96 mb-6 object-cover object-top rounded-2xl border-8 md:order-2 lg:w-1/3"
//                   alt="Doctor image"
//                 />

//                 <div className="w-full flex flex-col gap-y-2 md:order-1 md:w-fit md:mr-auto md:gap-y-4">
//                   <h1 className="text-4xl font-playfair-display italic xl:text-6xl">
//                     Dr. Sudeshna Sinha
//                   </h1>
//                   <p className="mb-4 text-2xl text-white font-bold xl:mb-8 xl:text-3xl xl:font-semibold">
//                     MBBS, FBPC (Rheumatology)
//                   </p>

//                   <div className="flex items-center justify-between [&_p]:font-semibold">
//                     <div className="flex flex-col">
//                       <p>Experience</p>
//                       <span className="font-bold text-white">12+</span>
//                     </div>

//                     <div className="px-8 flex flex-col border-l border-r border-teal-300">
//                       <p>Certification</p>
//                       <span className="font-bold text-white">16+</span>
//                     </div>

//                     <div className="flex flex-col">
//                       <p>Patients</p>
//                       <span className="font-bold text-white">20k</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//         })}
//       </section>

//       {/* Details Section */}
//       <section className="py-8 px-4 text-teal-800 md:px-40 lg:py-20 lg:px-80">
//         <div className="mb-8 flex flex-col gap-y-4">
//           <p>
//             <span className="font-bold">Biography: </span>
//             Dr. Sudeshna Sinha is a seasoned rheumatologist with over 12 years
//             of dedicated experience in diagnosing and treating a wide range of
//             rheumatic diseases. With a passion for improving patients' quality
//             of life, Dr. Sinha has established himself as a leading expert in
//             the field. After completing him medical degree at OSU, Dr. Sinha
//             pursued specialized training in rheumatology, recognizing the
//             complexity and challenges of managing autoimmune and musculoskeletal
//             disorders. His commitment to excellence led him to undertake
//             rigorous residency and fellowship programs at renowned institutions,
//             where he honed his skills in the diagnosis and management of
//             conditions such as rheumatoid arthritis, lupus, osteoarthritis, and
//             gout, among others.
//           </p>
//           <p>
//             In addition to his clinical practice, Dr. Sinha is actively involved
//             in research and education, staying abreast of the latest
//             advancements in rheumatology to ensure his patients receive the most
//             cutting-edge care available. He has authored numerous publications
//             in peer-reviewed journals and frequently presents his research
//             findings at national and international conferences.
//           </p>
//           <p>
//             Dr. Sinha is board-certified in rheumatology and maintains
//             affiliations with several professional organizations, including the
//             American College of Rheumatology and the Rheumatology Research
//             Foundation. Patients seeking expert care and compassionate support
//             for rheumatic conditions can trust in Dr. Sudeshna Sinha's expertise
//             and dedication to improving their health and well-being.
//           </p>
//         </div>

//         <div className="flex flex-col gap-y-4">
//           <h2 className="text-2xl font-bold">Specialties</h2>

//           <div className="mb-8 flex flex-col gap-y-2 [&>span]:flex [&>span]:items-center [&>span]:gap-x-2 [&>span]:text-lg">
//             <span>
//               <TbFirstAidKit className="text-2xl" /> Dentistry
//             </span>

//             <span>
//               <TbFirstAidKit className="text-2xl" /> Cosmetic Dentistry
//             </span>

//             <span>
//               <TbFirstAidKit className="text-2xl" /> Emergency Dentistry
//             </span>

//             <span>
//               <TbFirstAidKit className="text-2xl" /> Laser Dentistry
//             </span>

//             <span>
//               <TbFirstAidKit className="text-2xl" /> Endodontics
//             </span>
//           </div>

//           <div className="flex flex-col gap-4 [&>*]:text-lg md:flex-row">
//             <Link
//               to={"/contact"}
//               className="w-fit flex items-center gap-x-2 py-4 px-8 text-white font-semibold bg-teal-500 rounded-lg hover:bg-teal-600 ease-in-out duration-200 active:scale-95"
//             >
//               Make an Appointment <IoArrowForward className="text-xl" />
//             </Link>

//             <div className="w-fit py-4 px-8 text-teal-500 font-semibold border-2 border-teal-500 rounded-lg">
//               +000 5687 4747
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Other Doctors */}
//       <section className="py-8 px-4 text-Azure-950 lg:px-16 lg:py-20">
//         <h3 className="mb-8 font-semibold text-4xl text-balance md:text-5xl">
//           Other{" "}
//           <span className="font-playfair-display italic text-teal-500">
//             Doctors
//           </span>
//         </h3>

//         <div className="flex flex-col gap-4 md:flex-row">
//           {...doctorsData.slice(0, 3).map((doctor) => (
//             <Link to={`/doctors/${doctor.id}`} className="w-full">
//               <div className="mb-8 p-2 flex flex-col gap-y-2 bg-teal-100 text-teal-900 rounded-2xl shadow-sm sm:p-4 md:max-w-96">
//                 <img
//                   src={doctor.url}
//                   alt="Doctor"
//                   className="w-full min-w-60 h-64 object-cover object-top rounded-2xl sm:min-w-64"
//                 />
//                 <h3 className="text-2xl font-bold">Dr. Sudeshna Sinha</h3>
//                 <p className="mb-4">MBBS, MD (Rheumatologist)</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Doctor;
import { Link, useParams } from "react-router-dom";

import { TbFirstAidKit } from "react-icons/tb";
import { IoArrowForward } from "react-icons/io5";

import doctorsData from "../data/doctorsData";

const Doctor = () => {
  const params = useParams<{ doctorId: string }>();
  
  // Find the specific doctor first
  const doctor = doctorsData.find(doc => doc.id.toString() === params.doctorId);
  
  // Handle case where doctor is not found
  if (!doctor) {
    return (
      <div className="py-20 px-4 text-center">
        <h1 className="text-4xl font-bold text-teal-800 mb-4">Doctor Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">The requested doctor profile could not be found.</p>
        <Link 
          to="/doctors" 
          className="inline-flex items-center gap-x-2 py-3 px-6 text-white font-semibold bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors"
        >
          View All Doctors <IoArrowForward />
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Header Section */}
      {/* <section
        className="py-8 px-4 lg:px-16 lg:py-20"
        style={{ backgroundColor: "#02c0b4", color: "#fff" }}
      >
        <div className="flex flex-col items-center md:flex-row">
          <img
            src={doctor.url}
            className="h-96 mb-6 object-cover object-top rounded-2xl border-8 md:order-2 lg:w-1/3"
            alt={`Dr. ${doctor.name}`}
          />

          <div className="w-full flex flex-col gap-y-2 md:order-1 md:w-fit md:mr-auto md:gap-y-4">
            <h1 className="text-4xl font-playfair-display italic xl:text-6xl">
              Dr. {doctor.name}
            </h1>
            <p className="mb-4 text-2xl text-white font-bold xl:mb-8 xl:text-3xl xl:font-semibold">
              {doctor.qualifications}
            </p>

            <div className="flex items-center justify-between [&_p]:font-semibold">
              <div className="flex flex-col">
                <p>Experience</p>
                <span className="font-bold text-white">{doctor.experience}</span>
              </div>

              <div className="px-8 flex flex-col border-l border-r border-teal-300">
                <p>Certifications</p>
                <span className="font-bold text-white">{doctor.certifications}</span>
              </div>

              <div className="flex flex-col">
                <p>Patients Treated</p>
                <span className="font-bold text-white">{doctor.patients}</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Header Section */}
        {/* Header Section */}
<section
  className="py-8 px-4 lg:px-16 lg:py-20"
  style={{ backgroundColor: "#02c0b4", color: "#fff" }}
>
  <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between md:gap-8">
    <img
      src={doctor.url}
      className="h-96 w-80 mb-6 object-cover object-top rounded-2xl border-8 md:mb-0 md:order-2 md:flex-shrink-0"
      alt={`Dr. ${doctor.name}`}
    />

    <div className="w-full flex flex-col gap-y-2 md:order-1 md:flex-1 md:pr-8 md:gap-y-4">
      <h1 className="text-4xl font-playfair-display italic xl:text-6xl">
        Dr. {doctor.name}
      </h1>
      <p className="mb-4 text-2xl text-white font-bold xl:mb-8 xl:text-3xl xl:font-semibold">
        {doctor.qualifications}
      </p>
      <p className="mb-6 text-lg text-teal-100 xl:text-xl">
        {doctor.specialty}
      </p>

      <div className="flex items-center justify-between [&_p]:font-semibold md:justify-start md:gap-8">
        <div className="flex flex-col text-center md:text-left">
          <p>Experience</p>
          <span className="font-bold text-white">{doctor.experience}</span>
        </div>

        <div className="flex flex-col text-center md:text-left md:border-none border-l border-r border-teal-300 px-8 md:px-0">
          <p>Certifications</p>
          <span className="font-bold text-white">{doctor.certifications}</span>
        </div>

        <div className="flex flex-col text-center md:text-left">
          <p>Patients Treated</p>
          <span className="font-bold text-white">{doctor.patients}</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Details Section */}
      <section className="py-8 px-4 text-teal-800 md:px-40 lg:py-20 lg:px-80">
        <div className="mb-8 flex flex-col gap-y-4">
          <p>
            <span className="font-bold">Biography: </span>
            {doctor.biography}
          </p>
          <p>
            <span className="font-bold">Approach: </span>
            {doctor.approach}
          </p>
          <p>
            <span className="font-bold">Credentials: </span>
            {doctor.credentials}
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <h2 className="text-2xl font-bold">Specialties & Services</h2>

          <div className="mb-8 flex flex-col gap-y-2 [&>span]:flex [&>span]:items-center [&>span]:gap-x-2 [&>span]:text-lg">
            {doctor.specialties.map((specialty, index) => (
              <span key={index}>
                <TbFirstAidKit className="text-2xl" /> {specialty}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4 [&>*]:text-lg md:flex-row">
            <Link
              to={"/contact"}
              className="w-fit flex items-center gap-x-2 py-4 px-8 text-white font-semibold bg-teal-500 rounded-lg hover:bg-teal-600 ease-in-out duration-200 active:scale-95"
            >
              Schedule Consultation <IoArrowForward className="text-xl" />
            </Link>

            <div className="w-fit py-4 px-8 text-teal-500 font-semibold border-2 border-teal-500 rounded-lg">
              +1 (555) CARE-123
            </div>
          </div>
        </div>
      </section>

      {/* Other Doctors */}
      <section className="py-8 px-4 text-slate-950 lg:px-16 lg:py-20">
        <h3 className="mb-8 font-semibold text-4xl text-balance md:text-5xl">
          Other CaretoSure{" "}
          <span className="font-playfair-display italic text-teal-500">
            Specialists
          </span>
        </h3>

        <div className="flex flex-col gap-4 md:flex-row">
          {doctorsData
            .filter(doc => doc.id !== doctor.id)
            .slice(0, 3)
            .map((doc) => (
              <Link key={doc.id} to={`/doctors/${doc.id}`} className="w-full">
                <div className="mb-8 p-2 flex flex-col gap-y-2 bg-teal-100 text-teal-900 rounded-2xl shadow-sm sm:p-4 md:max-w-96 hover:shadow-md transition-shadow">
                  <img
                    src={doc.url}
                    alt={`Dr. ${doc.name}`}
                    className="w-full min-w-60 h-64 object-cover object-top rounded-2xl sm:min-w-64"
                  />
                  <h3 className="text-2xl font-bold">Dr. {doc.name}</h3>
                  <p className="mb-4">{doc.qualifications}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
};

export default Doctor;
