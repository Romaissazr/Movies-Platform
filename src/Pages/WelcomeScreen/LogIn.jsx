import React from 'react'
import { useNavigate } from 'react-router-dom';
import Buttons from '../../Components/Buttons';
import coffee from '../../assets/Images/coffee.svg';
import bg from "../../assets/Images/bg.png"; 
function LogIn() {
    const navigate = useNavigate(); 

    const handleBackClick = () => {
      navigate('/SingUp')
    };
    const handleHomekClick = () => {
      navigate('/home')
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
            <div className="flex flex-col justify-center items-center gap-5 text-[#424242]">
              <Buttons text={"Log In"} onClick={handleHomekClick} />
              <p>
                I Have an Account? 
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
    );
  }

export default LogIn
