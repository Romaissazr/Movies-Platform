import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';

function Favourites() {
    const [favorites, setFavorites] = useState([]);


    useEffect(() => {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    }, []);
  
    return (
      <div className="px-7 w-full  ">
        <h2 className="mt-10 text-[20px]">Favorites</h2>
        <div className="grid grid-cols-4 gap-10 w-full pb-10 ">
          {favorites.length > 0 ? (
            favorites.map((fav) => (
              <Card key={fav.id} data={fav} isFavorite={true} />
            ))
          ) : (
            <p className="text-center w-[1000px] mt-[100px]">No favorites yet.</p>
          )}
        </div>
      </div>
    );
  }

export default Favourites
