import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeartButton from "./HeartButton";

function Card({ data }) {
  const navigate = useNavigate();


  return (
    <div className="relative w-full h-[200px] mt-16 cursor-pointer">
      <div className="absolute top-5 right-5">
      
        {data && <HeartButton movie={data}  />}
      </div>
      <div
        className="overflow-hidden h-full w-full rounded-t-[24px]"
        onClick={() => {
          const path = data.type === 'movie' ? '/home/movie-details' : '/series/serie-details';
          console.log("path" +path); 
          navigate(path, { state: data });
        }}
        
        
      >
        <img
          src={data.img}
          alt={data.title}
          className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>

      <div className="w-full flex flex-col  justify-center text-black px-2 py-8 bg-cardBg absolute bottom-[-80px] rounded-custom opacity-95 backdrop-blur-custom">
        <h4 className="text-[15px]  font-semibold">{data.title}</h4>
        <p className="text-[14px]">
          {data.year} | {data.genre}
        </p>
      </div>
    </div>
  );
}

export default Card;
