import React from "react";
import search from "../assets/Images/search.svg";
import noti from "../assets/Images/bell.svg";
import profile from "../assets/Images/profile.svg";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex relative z-10 justify-between py-12 px-7 w-full text-white">

      <ul className="flex gap-4">
     
        <li
          className={`flex items-center gap-3 ${
            location.pathname === "/home" ? "font-bold" : ""
          }`}
        >
          <button
            className="bg-transparent text-white"
            onClick={() => navigate("/home")}
          >
            Movies
          </button>
        </li>

      
        <li
          className={`flex items-center gap-3 ${
            location.pathname === "/series" ? "font-bold" : ""
          }`}
        >
          <button
            className="bg-transparent text-white"
            onClick={() => navigate("/series")}
          >
            Series
          </button>
        </li>
      </ul>

      
      <ul className="flex gap-4">
        <li>
          <img src={search} alt="Search" className="cursor-pointer" />
        </li>
        <li>
          <img src={noti} alt="Notifications" className="cursor-pointer" />
        </li>
        <li className="flex items-center gap-2">
          <img src={profile} alt="Profile" />
          <span className="cursor-pointer">Tetiana</span>
        </li>
      </ul>
    </div>
  );
}

export default Header;
