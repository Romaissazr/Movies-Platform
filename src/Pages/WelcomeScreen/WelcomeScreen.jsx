import React from 'react';

import coffee from '../../assets/Images/coffee.svg';
import { useNavigate } from 'react-router-dom';
import bg from "../../assets/Images/bg.png"; 
import Buttons from '../../Components/Buttons';

function WelcomeScreen() {
  const navigate = useNavigate(); 


  const handleLogInClick = () => {
    navigate('/Login');
  };
  const handleSingUpClick =() =>{
    navigate('/SingUp')
  }

  return (
    <div  className="h-screen w-full bg-cover bg-center relative"
    style={{
      backgroundImage: `linear-gradient(rgba(97, 0, 194, 1), rgba(25, 24, 23, 1)), url(${bg})`,
      backgroundBlendMode: "overlay",
    }}>
    <div className="flex justify-center items-center min-h-full text-center">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-center gap-3 text-[22px]">
          <img src={coffee} alt="Coffee" className="w-[30px]" />
          <p className="font-medium">WATCH</p>
        </div>
        <div className="flex flex-col gap-3 justify-center">
          <p className="text-[18px] mb-4">Enjoy the newest movies</p>
          <Buttons text="Log in" onClick={handleLogInClick} />
          <div className="text-[16px]">
            <p>No account? <a href="#" onClick={handleSingUpClick} className="underline font-medium">Sign up</a></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default WelcomeScreen;
