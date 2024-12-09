import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Card from '../../Components/Card'; // Import Card component
import { FaArrowRight, FaArrowLeftLong } from "react-icons/fa6";
import Loader from '../../Components/Loader';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { useNavigate, useOutletContext } from 'react-router-dom'; 
function Trending() {
    const navigate = useNavigate();
    const [cardsData, setCardsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true); 
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
      const fetchMovies = async () => {
        setIsLoading(true);
        setErrorMessage(null); 
     
      
        try {
          const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjAxZWEyYmZkYjFhMDFjOTliZjc4Mjk3ZjU4ODY0NCIsIm5iZiI6MTczMjk1NjMzMy45MDgsInN1YiI6IjY3NGFkMGFkZjA0M2JjOGE2NzcxYTE1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3WuC8bqjfNfA1bFtpuSK50_g2GIaJnQE438XMGtcxQw'
            }
          };
  
          const response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc`,
            options
          );
  
          
          if (response.data.results.length === 0) {
            setErrorMessage('No movies available on this page.');
          } else {
            const movies = response.data.results.map((movie) => ({
              id: movie.id,
              img: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
              title: movie.title,
              description: movie.overview,
              year: new Date(movie.release_date).getFullYear(),
              genre: movie.original_language,
              duration: "N/A", 
              vote_average:movie.vote_average
  
            }));
  
            setCardsData(movies);
            setTotalPages(response.data.total_pages); 
          }
        } catch (error) {
          console.error('Error fetching movies:', error);
          setErrorMessage('Somthing went wrong! Please try again.');
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchMovies();
    }, [currentPage]); 
  
  
    const goToNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(prevPage => prevPage + 1); 
        window.scrollTo(0, 0); 
      }
    };
  
    const goToPreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(prevPage => prevPage - 1); 
        window.scrollTo(0, 0);
      }
    };
    return (
      <div className='flex flex-col h-full'>
        <div className="">
        

          <div className="mt-[50px] px-7">
            <h1 className="text-[20px]">Trending</h1>
  
          
            {isLoading && (
              <div className="grid grid-cols-4 gap-10">
                {Array(20).fill().map((_, index) => (
                  <Loader key={index} />
                ))}
              </div>
            )}
  
         
            {errorMessage && <p className='text-center'>{errorMessage}</p>}
  
       
            {!isLoading && !errorMessage && (
  <div className="grid grid-cols-4 gap-10">

    {cardsData
      .map((item) => (
        <Card key={item.id} data={item} />
      ))}
  </div>
)}

            <div className="flex justify-center gap-5 mt-[150px] mb-10 relative z-10">
              <FaArrowLeftLong
                className='cursor-pointer text-2xl'
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
              />
              <FaArrowRight
                className='cursor-pointer text-2xl'
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
export default Trending
