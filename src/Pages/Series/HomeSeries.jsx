import React, { useEffect, useState } from "react";
import Buttons from "../../Components/Buttons";
import img from "../../assets/Images/bghome.png";
import HeartButton from "../../Components/HeartButton";
import axios from "axios";
import Card from "../../Components/Card"; 
import Loader from "../../Components/Loader"; 
import { useLocation, useNavigate } from "react-router-dom";

function HomeSeries() {
  const [isHearted, setIsHearted] = useState(false);
  const navigate = useNavigate();
  const [cardsData, setCardsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); 
  const [isLoading, setIsLoading] = useState(true); 
  const [errorMessage, setErrorMessage] = useState(null); 
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    const fetchTVShows = async () => {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const options = {
          headers: {
            accept: "application/json",
            Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjAxZWEyYmZkYjFhMDFjOTliZjc4Mjk3ZjU4ODY0NCIsIm5iZiI6MTczMjk1NjMzMy45MDgsInN1YiI6IjY3NGFkMGFkZjA0M2JjOGE2NzcxYTE1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3WuC8bqjfNfA1bFtpuSK50_g2GIaJnQE438XMGtcxQw'
          },
        };

        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=YOUR_API_KEY&page=${currentPage}`,
          options
        );

        if (response.data.results.length === 0) {
          setErrorMessage("No TV shows available on this page.");
        } else {
          const tvShows = response.data.results.map((tvShow) => ({
            id: tvShow.id,
            img: `https://image.tmdb.org/t/p/w500${tvShow.poster_path}`,
            title: tvShow.name, 
            description: tvShow.overview,
            year: new Date(tvShow.first_air_date).getFullYear(),
            genre: tvShow.original_language,
            duration: "N/A",
            vote_average: tvShow.vote_average,
          }));

          setCardsData(tvShows);
          setTotalPages(response.data.total_pages);
        }
      } catch (error) {
        console.error("Error fetching TV shows:", error);
        setErrorMessage('Something went wrong! Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTVShows();
  }, [currentPage]);

  const [showText, setShowText] = useState(false);

  const handleHeartToggle = (isLiked) => {
    setShowText(isLiked);
  };

  const goToAllTVShows = () => {
    navigate("/series/allseries");
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
          <h1 className="text-[20px]">Trending TV Shows</h1>

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
              onClick={goToAllTVShows}
            >
              All Series
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSeries;
