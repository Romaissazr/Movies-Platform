import React from "react";
import star from "../assets/Images/star.svg";
import HeartButton from "../Components/HeartButton";
import Buttons from "../Components/Buttons";
import { useLocation, useNavigate } from "react-router-dom";

import { RiArrowGoBackFill } from "react-icons/ri";
function Details() {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state; 
  
    const addToContinue = () => {
      const existingContinue = JSON.parse(localStorage.getItem("continue")) || [];
     
      const isAlreadyInContinue = existingContinue.some((movie) => movie.id === data.id);
    
      if (!isAlreadyInContinue) {
        existingContinue.push(data);
        localStorage.setItem("continue", JSON.stringify(existingContinue));
      }
   
     
      navigate("/home");
    };
  
    return (
      <>
       <RiArrowGoBackFill className='absolute top-[100px] z-50 left-7 text-3xl cursor-pointer'   onClick={() => 
          navigate(-1)}/>
        <div className="flex mb-5 mt-[30px] relative text-white max-w-[78%] items-center gap-10 px-7">
       
          <img src={data.img} alt={data.title} className="w-[40%]" />
          <div className="max-w-[60%]">
            <div className="flex justify-between">
              <h1 className="text-[32px] font-semibold">{data.title}</h1>
              <div className="flex items-center gap-2">
                <img src={star} alt="star" />
                <p>{data.vote_average || "N/A"}</p>
              </div>
            </div>
            <div className="flex gap-14 my-5">
              <p>{data.year}</p>
              <p>{data.genre}</p>
              <p>{data.duration}</p>
            </div>
            <p className="max-w-[90%] mb-5">{data.description}</p>
            <div className="flex gap-5">
              <Buttons text={"Watch now"} onClick={addToContinue} />
              {data && <HeartButton movie={data} />}
            </div>
          </div>
        </div>
      </>
    );
  }

export default Details
