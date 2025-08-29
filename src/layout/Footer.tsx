import { Link } from "react-router-dom";
import CTSLogo from "/public/assets/images/logos/CTS.png"; // Logo import

const Footer = () => {
  return (
    <div
      className="w-full px-4 pt-8 lg:px-12 lg:pt-16"
      style={{
        background: "linear-gradient(90deg, #41a6d8 0%, #0ba9c1 100%)",
      }}
    >
      <div className="mb-8 flex flex-col justify-between gap-y-8 lg:mb-16 lg:flex-row">
        {/* Logo & tagline */}
        <div className="flex flex-col gap-y-4 lg:basis-1/4 lg:mr-auto">
          <img
            src={CTSLogo}
            alt="Company Logo"
            className="w-56 h-auto p-3 bg-white rounded-lg"
          />
          <p className="text-lg lg:text-xl text-white leading-relaxed">
            Delivering compassionate, expert healthcare with trust, integrity, 
            and innovation — because every life deserves the best care possible.
          </p>
        </div>

        {/* Menu / Legal / Contact */}
        <div className="flex flex-wrap justify-between gap-y-12 text-white lg:basis-2/4 lg:flex-nowrap lg:justify-between">
          <div className="flex flex-col gap-y-6 [&>*]:w-fit">
            <span className="text-2xl font-semibold">Menu</span>
            <Link to="/" className="lg:hover:text-teal-400 text-white">
              Home
            </Link>
            <Link to="/about" className="lg:hover:text-teal-400 text-white">
              About
            </Link>
            <Link to="/services" className="lg:hover:text-teal-400 text-white">
              Service
            </Link>
            <Link to="/doctors" className="lg:hover:text-teal-400 text-white">
              Partner Team
            </Link>
          </div>
          <div className="flex flex-col gap-y-6 [&>*]:w-fit">
            <span className="text-2xl font-semibold">Legal</span>
            <a href="#" className="lg:hover:text-teal-400 text-white">
              Privacy Policy
            </a>
            <a href="#" className="lg:hover:text-teal-400 text-white">
              Terms & Conditions
            </a>
            <a href="#" className="lg:hover:text-teal-400 text-white">
              Service
            </a>
            <a href="#" className="lg:hover:text-teal-400 text-white">
              Blog Post
            </a>
          </div>
          <div className="flex flex-col gap-y-6 font-medium [&>*]:w-fit">
            <span className="text-2xl font-semibold">Contact</span>
            <p className="text-white">
              2115 Thornridge Cir. Syracuse, <br />
              Connecticut 36421
            </p>
            <p className="text-white">info@caretosure.com</p>
            <p className="text-white">+1 387 894552</p>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <p className="py-4 text-xl font-bold text-white [&>a]:font-bold [&>a]:text-teal-900 border-t border-teal-700">
        Where{" "}
        <a
          target="_blank"
          className="hover:underline font-bold text-teal-900"
        >
          Care
        </a>{" "}
        meets{" "}
        <a
          target="_blank"
          className="hover:underline font-bold text-teal-900"
        >
          Assurance
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
