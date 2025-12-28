import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        {/* ------------ Left Section ------------ */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Our platform connects patients with trusted doctors, enabling easy
            appointment booking, secure medical interactions, and efficient
            healthcare management. We are committed to improving access to
            quality healthcare through technology.
          </p>
        </div>

        {/* ------------ Center Section ------------ */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <NavLink to="/" className="hover:text-primary">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-primary">
              About Us
            </NavLink>
            <NavLink to="/doctors" className="hover:text-primary">
              Doctors
            </NavLink>
            <NavLink to="/contact" className="hover:text-primary">
              Contact
            </NavLink>
          </ul>
        </div>

        {/* ------------ Right Section ------------ */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <a href="tel:+919876543210" className="hover:text-primary">
              +91 98765 43210
            </a>
            <a href="mailto:support@heydoctor.com" className="hover:text-primary">
              support@heydoctor.com
            </a>
          </ul>
        </div>
      </div>

      {/* ------------ Copyright ------------ */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-500">
          © 2026 HeyDoctor!. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
