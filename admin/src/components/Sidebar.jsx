import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { DoctorContext } from "../context/DoctorContext";

const Icon = ({ src }) => (
  <div className="w-6 h-6 flex items-center justify-center">
    <img
      src={src}
      alt=""
      className="w-5 h-5 object-contain"
    />
  </div>
);

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3
     h-14 md:h-auto
     py-0 md:py-3.5
     px-4 md:px-9
     cursor-pointer
     text-[#515151]
     ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`;

  return (
    <div className="min-h-screen bg-white border-r">
      {aToken && (
        <ul className="mt-5">
          <NavLink to="/admin-dashboard" className={linkClasses}>
            <Icon src={assets.home_icon} />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>

          <NavLink to="/all-appointments" className={linkClasses}>
            <Icon src={assets.appointment_icon} />
            <p className="hidden md:block">Appointments</p>
          </NavLink>

          <NavLink to="/add-doctor" className={linkClasses}>
            <Icon src={assets.add_icon} />
            <p className="hidden md:block">Add Doctor</p>
          </NavLink>

          <NavLink to="/doctor-list" className={linkClasses}>
            <Icon src={assets.people_icon} />
            <p className="hidden md:block">Doctors List</p>
          </NavLink>
        </ul>
      )}

      {dToken && (
        <ul className="mt-5">
          <NavLink to="/doctor-dashboard" className={linkClasses}>
            <Icon src={assets.home_icon} />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>

          <NavLink to="/doctor-appointments" className={linkClasses}>
            <Icon src={assets.appointment_icon} />
            <p className="hidden md:block">Appointments</p>
          </NavLink>

          <NavLink to="/doctor-profile" className={linkClasses}>
            <Icon src={assets.people_icon} />
            <p className="hidden md:block">Profile</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
