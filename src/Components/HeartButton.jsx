import React, { useState, useEffect } from "react";
import heart from "../assets/Images/heart.svg";
import fullHeart from "../assets/Images/fullHeart.svg";

function HeartButton({ movie }) {


  const heartKey = `heart-${movie.id}`;
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem(heartKey);
    if (savedState === "true") {
      setIsLiked(true);
    }
  }, [heartKey]);

  const handleClick = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    localStorage.setItem(heartKey, newLikedState.toString());

    
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (newLikedState) {
      localStorage.setItem("favorites", JSON.stringify([...favorites, movie]));
    } else {
      const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-heartBg text-white p-2 rounded-md relative z-20"
    >
      <img src={isLiked ? fullHeart : heart} alt="heart" className="w-6" />
    </button>
  );
}

export default HeartButton;
