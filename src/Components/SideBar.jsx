import React from "react";
import home from "../assets/Images/home.svg";
import favourite from "../assets/Images/favourites.svg";
import trending from "../assets/Images/trending.svg";
import coming from "../assets/Images/calendar.svg";
import user from "../assets/Images/users.svg";
import social from "../assets/Images/social.svg";
import logout from "../assets/Images/log-out.svg";
import setting from "../assets/Images/sliders.svg";
import coffee from "../assets/Images/coffee.svg";
import { useNavigate, useLocation } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const basePath = location.pathname.startsWith("/series")
    ? "/series"
    : "/home";

  
  const isActive = (paths) => paths.includes(location.pathname);

  return (
    <aside className="h-full z-20 flex justify-between flex-col p-10 w-[300px] fixed bg-sideBg shadow-boxshadow">
  
      <div className="flex gap-3 text-[22px]">
        <img src={coffee} alt="Logo" className="w-[30px]" />
        <p className="font-medium">WATCH</p>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col gap-4">
        {/* Home */}
        <li
          className={`flex items-center gap-3 ${isActive([`${basePath}`, `${basePath}/`]) ? "font-bold" : ""}`}
          onClick={() => navigate(basePath)}
        >
          <img src={home} alt="Home" />
          <a className="cursor-pointer">Home</a>
        </li>

        {/* Favourites */}
        <li
          className={`flex items-center gap-3 ${isActive([`${basePath}/favourites`, `${basePath}/favouriesseries`]) ? 'font-bold' : ''}`}
          onClick={() => {
            if (basePath === "/home") {
              navigate(`${basePath}/favourites`); 
            } else if (basePath === "/series") {
              navigate(`${basePath}/favouriesseries`); 
            }
          }}
        >
          <img src={favourite} alt="Favourites" />
          <a className="cursor-pointer">Favourites</a>
        </li>

        {/* Trending */}
        <li
          className={`flex items-center gap-3 ${isActive([`${basePath}/trending`, `${basePath}/trendingseries`]) ? "font-bold" : ""}`}
          onClick={() => {
            if (basePath === "/home") {
              navigate(`${basePath}/trending`);
            } else if (basePath === "/series") {
              navigate(`${basePath}/trendingseries`);
            }
          }}
        >
          <img src={trending} alt="Trending" />
          <a className="cursor-pointer">Trending</a>
        </li>

        {/* Coming Soon */}
        <li
          className={`flex items-center gap-3 ${isActive([`${basePath}/comingsoon`, `${basePath}/comingsoonseries`]) ? "font-bold" : ""}`}
          onClick={() => {
            if (basePath === "/home") {
              navigate(`${basePath}/comingsoon`);
            } else if (basePath === "/series") {
              navigate(`${basePath}/comingsoonseries`);
            }
          }}
        >
          <img src={coming} alt="Coming Soon" />
          <a className="cursor-pointer">Coming Soon</a>
        </li>
      </ul>

      {/* Additional Links */}
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-3">
          <img src={user} alt="Community" />
          <a className="cursor-pointer">Community</a>
        </li>
        <li className="flex items-center gap-3">
          <img src={social} alt="Social" />
          <a className="cursor-pointer">Social</a>
        </li>
      </ul>

      {/* Settings and Logout */}
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-3">
          <img src={setting} alt="Settings" />
          <a className="cursor-pointer">Settings</a>
        </li>
        <li className="flex items-center gap-3" onClick={() => navigate("/")}>
          <img src={logout} alt="Logout" />
          <a className="cursor-pointer">Logout</a>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
