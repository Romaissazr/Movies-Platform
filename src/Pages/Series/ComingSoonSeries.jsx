import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card";
import { FaArrowRight, FaArrowLeftLong } from "react-icons/fa6";
import Loader from "../../Components/Loader";
import { useNavigate } from "react-router-dom";

function ComingSoonSeries() {
  const navigate = useNavigate();
  const [cardsData, setCardsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchTVSeries = async () => {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjAxZWEyYmZkYjFhMDFjOTliZjc4Mjk3ZjU4ODY0NCIsIm5iZiI6MTczMjk1NjMzMy45MDgsInN1YiI6IjY3NGFkMGFkZjA0M2JjOGE2NzcxYTE1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3WuC8bqjfNfA1bFtpuSK50_g2GIaJnQE438XMGtcxQw",
          },
        };

       
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=YOUR_API_KEY&page=${currentPage}`,
          options
        );

        if (response.data.results.length === 0) {
          setErrorMessage("No TV series available on this page.");
        } else {
          const tvSeries = response.data.results.map((tvShow) => ({
            id: tvShow.id,
            img: `https://image.tmdb.org/t/p/w500${tvShow.poster_path}`,
            title: tvShow.name, 
            description: tvShow.overview,
            year: new Date(tvShow.first_air_date).getFullYear(),
            genre: tvShow.original_language,
            duration: "N/A", 
            vote_average: tvShow.vote_average,
          }));

          setCardsData(tvSeries);
          setTotalPages(response.data.total_pages);
        }
      } catch (error) {
        console.error("Error fetching TV series:", error);
        setErrorMessage("Something went wrong! Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTVSeries();
  }, [currentPage]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="">
        <div className="mt-[50px] px-7">
          <h1 className="text-[20px]">Coming Soon - TV Series</h1>

          {isLoading && (
            <div className="grid grid-cols-4 gap-10">
              {Array(20)
                .fill()
                .map((_, index) => (
                  <Loader key={index} />
                ))}
            </div>
          )}

          {errorMessage && <p className="text-center">{errorMessage}</p>}

          {!isLoading && !errorMessage && (
            <div className="grid grid-cols-4 gap-10">
              {cardsData.map((item) => (
                <Card key={item.id} data={item} />
              ))}
            </div>
          )}

          <div className="flex justify-center gap-5 mt-[150px] mb-10 relative z-10">
            <FaArrowLeftLong
              className="cursor-pointer text-2xl"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            />
            <FaArrowRight
              className="cursor-pointer text-2xl"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonSeries;
