import React from 'react'

import { useNavigate } from 'react-router-dom';
import bg from "../../assets/Images/bg.png"; 
import coffee from "../../assets/Images/coffee.svg";
import google from "../../assets/Images/google.svg";
import github from "../../assets/Images/gitHub.svg";

import SingUpButtons from '../../Components/SingUpButtons';
import Buttons from '../../Components/Buttons';

export default function SingUp() {
    const navigate = useNavigate(); 

    const handleBackClick = () => {
        navigate('/LogIn')
    };
    return (
        <div
        className="h-screen w-full bg-cover bg-center relative"
        style={{
            backgroundImage: `linear-gradient(rgba(97, 0, 194, 1), rgba(25, 24, 23, 1)), url(${bg})`,
            backgroundBlendMode: "overlay",
        }}
        >
        <div className="flex items-center justify-center min-h-full">
           
            <div className="w-[500px] bg-bgP p-10 rounded-[28px]">
            <div className="flex items-center justify-center gap-3 text-[22px]">
                <img src={coffee} alt="" className="w-[30px]" />
                <p className="font-medium">WATCH</p>
              
            </div>
            <div className=" flex justify-between items-center ">
              
                <SingUpButtons img={google} text={"Google"} />
                <SingUpButtons img={github} text={"GitHub"} />
            </div>
            <div className="my-5">
                <label htmlFor="username" className="block text-[#757575] text-sm font-medium mb-2">
                Username
                </label>
                <input
                type="text"
                id="username"
                className="w-full border-b-2 border-gray-400 bg-transparent text-black focus:outline-none focus:border-purple-600"
                />
            </div>
            <div className="my-5">
                <label htmlFor="email" className="block text-[#757575] text-sm font-medium mb-2">
                Email
                </label>
                <input
                type="text"
                id="email"
                className="w-full border-b-2 border-gray-400 bg-transparent text-black focus:outline-none focus:border-purple-600"
                />
            </div>
            <div className="my-10">
                <label htmlFor="password" className="block text-[#757575] text-sm font-medium mb-2">
                Password
                </label>
                <input
                type="password"
                id="password"
                className="w-full border-b-2 border-gray-400 bg-transparent text-black focus:outline-none focus:border-purple-600"
                />
            </div>
            <div className="flex flex-col  items-center gap-5 text-[#424242]">
            <div className=" flex  gap-10 items-center">
                <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    id="terms"
                    className="checkbox-custom"
                    />
                    <label htmlFor="terms" className="text-sm">I accept the terms & Conditions</label>
                </div>
            
      
            {/* <Buttons text={"SING UP"} /> */}
            <Buttons text={"SING UP"} />
            </div>
                
                <p>
                Own an Account?  
                <a 
                    href="#"
                    onClick={handleBackClick} 
                    className="text-black font-medium underline"
                >
                    JUMP RIGHT IN
                </a>
                </p>
            </div>
            </div>
        </div>
        </div>
    )
    }
