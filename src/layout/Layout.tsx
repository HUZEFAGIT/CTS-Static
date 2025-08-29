import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import ScrollToTop from "../utils/ScrollToTop";
import Loading from "../components/Loading";
import Appointment from "../components/Appointment";
 
const Layout = () => {
  return (
    <div>
      <ScrollToTop />

      <header>
        <Navbar />
      </header>

      <main className="max-w-[2300px] my-0 mx-auto overflow-x-hidden">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>

        <Appointment />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;