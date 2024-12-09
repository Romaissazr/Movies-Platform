import React, { useEffect, useState } from "react";
import Buttons from "../../Components/Buttons";
import img from "../../assets/Images/bghome.png";
import HeartButton from "../../Components/HeartButton";
import axios from "axios";
import Card from "../../Components/Card"; // Import Card component
import Loader from "../../Components/Loader"; // Import the Loader component
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
function Home() {
  const [isHearted, setIsHearted] = useState(false);
  const navigate = useNavigate();
  const [cardsData, setCardsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // State for total pages
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [errorMessage, setErrorMessage] = useState(null); // Error state
  const location = useLocation();
  const data = location.state;
  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const options = {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjAxZWEyYmZkYjFhMDFjOTliZjc4Mjk3ZjU4ODY0NCIsIm5iZiI6MTczMjk1NjMzMy45MDgsInN1YiI6IjY3NGFkMGFkZjA0M2JjOGE2NzcxYTE1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3WuC8bqjfNfA1bFtpuSK50_g2GIaJnQE438XMGtcxQw",
          },
        };

        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page${currentPage}`,
          options
        );

        if (response.data.results.length === 0) {
          setErrorMessage("No movies available on this page.");
        } else {
          const movies = response.data.results.map((movie) => ({
            id: movie.id,
            img: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            title: movie.title,
            description: movie.overview,
            year: new Date(movie.release_date).getFullYear(),
            genre: movie.original_language,
            duration: "N/A",
            vote_average: movie.vote_average,
          }));

          setCardsData(movies);
          setTotalPages(response.data.total_pages);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setErrorMessage('Somthing went wrong! Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [currentPage]);
  const [showText, setShowText] = useState(false);

  const handleHeartToggle = (isLiked) => {
    setShowText(isLiked);
  };
  const goToAllMovies = () => {
    navigate("/home/allmovies");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="">
        <div className="h-full w-full absolute top-0">
          <img src={img} alt="" className="absolute top-0" />
          <div className="relative z-10 mt-[250px] px-7">
            <h1 className="text-[48px] font-semibold">Insider</h1>
            <p className="text-[14px]">2022 | Comedy horror | 1 Season</p>
            <div className="mt-8 flex items-center gap-3">
              <Buttons text={"Watch now"} />
              <HeartButton movie={{ id: 1 }} onToggle={handleHeartToggle} />
            </div>
          </div>
        </div>

        <div className="mt-[350px] px-7">
          <h1 className="text-[20px]">Trending</h1>

          {isLoading && (
            <div className="grid grid-cols-4 gap-10">
              {Array(8)
                .fill()
                .map((_, index) => (
                  <Loader key={index} />
                ))}
            </div>
          )}

          {errorMessage && <p className="text-center">{errorMessage}</p>}

          {!isLoading && !errorMessage && (
            <div className="grid grid-cols-4 gap-10">
              {cardsData.slice(0, 8).map((item) => (
                <Card key={item.id} data={item} />
              ))}
            </div>
          )}

          <div className="flex justify-center gap-5 mt-[150px] mb-10 relative z-10">
            <button
              className="cursor-pointer text-xl bg-primary py-2 px-5 rounded-[24px]"
              onClick={goToAllMovies}
            >
              All Movies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
