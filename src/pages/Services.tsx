import {
  FaVial,
  FaHeart,
  FaTooth,
  FaBrain,
  FaStethoscope,
} from "react-icons/fa";
import {
  GiNightSleep,
  GiKidneys,
  GiLoveInjection,
  GiFemale,
} from "react-icons/gi";

const services = [
  { id: 1, icon: <FaVial />, name: "Lab Tests", description: "Comprehensive laboratory diagnostics to help detect, monitor, and manage a wide range of health conditions." },
  { id: 2, icon: <FaHeart />, name: "Heart Diseases", description: "Expert care for cardiovascular health, including prevention, diagnosis, and treatment of heart-related conditions." },
  { id: 3, icon: <FaTooth />, name: "Dental", description: "Quality dental care for all ages, from routine checkups and cleanings to advanced procedures." },
  { id: 4, icon: <GiNightSleep />, name: "Hypnotherapy", description: "Professional hypnotherapy services to support mental wellness, stress reduction, and behavioral change." },
  { id: 5, icon: <FaBrain />, name: "Neurology", description: "Specialized neurological care for disorders affecting the brain, spine, and nerves." },
  { id: 6, icon: <GiKidneys />, name: "Urology", description: "Comprehensive urological services for kidney, bladder, and urinary tract health." },
  { id: 7, icon: <FaStethoscope />, name: "Occupational Medicine", description: "Workplace health solutions, injury management, and preventive care for employees." },
  { id: 8, icon: <GiLoveInjection />, name: "Vaccinations", description: "Routine and travel vaccinations to protect you and your family from infectious diseases." },
  { id: 9, icon: <GiFemale />, name: "Women's Health", description: "Personalized care for women’s health needs, including reproductive, hormonal, and preventive services." },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-8 px-4 text-white lg:p-16"
      style={{ backgroundColor: "#0ba9c1" }}>
        <div className="flex flex-col items-center gap-y-4 mb-8 md:flex-row">
          <h1 className="text-4xl text-balance mr-auto md:basis-1/3 md:text-5xl">
            Our{" "}
            <span className="font-playfair-display text-white italic">
              Services
            </span>
          </h1>

          <div className="flex flex-col gap-y-4 md:basis-1/3">
            <p className="w-fit lg:text-lg">
              At CaretoSure, we are dedicated to supporting your health journey with a wide range of specialized medical services. Our team combines expertise, compassion, and the latest technology to deliver care you can trust.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-x-4 [&>*]:object-cover [&>*]:position-center [&>*]:rounded-2xl">
          <img
            src="/assets/images/services-1.jpg"
            alt="Image of pediatrician."
            className="w-2/4 h-52 max-h-[700px] md:h-72 lg:h-[400px]"
          />

          <img
            src="/assets/images/services-2.jpg"
            alt="Doctor with a vaccine."
            className="w-2/4 h-52 max-h-[700px] md:h-72 lg:h-[400px]"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 px-4 text-[#222222] lg:p-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-y-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="px-4 py-8 flex flex-col gap-y-4 bg-[#9cdae4] rounded-xl md:gap-y-6"
            >
              <span className="text-3xl text-teal-500 lg:text-4xl">
                {service.icon}
              </span>
              <h2 className="text-xl font-bold lg:text-2xl">{service.name}</h2>
              <p className="mb-8 font-semibold lg:text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
