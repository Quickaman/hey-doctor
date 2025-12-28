import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg overflow-hidden px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">

      {/* ---------- Left Side -------- */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 text-center md:text-left">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book Appointment</p>
          <p className="mt-3 sm:mt-4">With 100+ Trusted Doctors</p>
        </div>

        <button
          onClick={() => {
            navigate("/login");
            window.scrollTo(0, 0);
          }}
          className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-5 mx-auto md:mx-0 hover:scale-105 transition-all"
        >
          Create account
        </button>
      </div>

      {/* ---------- Image -------- */}
      <div className="relative flex justify-center md:block md:w-1/2 lg:w-[370px]">
        <img
          src={assets.appointment_img}
          alt="Appointment"
          className="
            w-32 sm:w-40
            -mt-2
            md:mt-0
            md:w-full md:max-w-md
            md:absolute md:bottom-0 md:right-0
          "
        />
      </div>
    </div>
  );
};

export default Banner;
