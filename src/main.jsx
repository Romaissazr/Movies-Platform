import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomeScreen from "./Pages/WelcomeScreen/WelcomeScreen";
import LogIn from "./Pages/WelcomeScreen/LogIn";
import SingUp from "./Pages/WelcomeScreen/SinUp";

import Trending from "./Pages/Movies/Trending";
import Accueil from "./Pages/Movies/Accueil";
import Home from "./Pages/Movies/Home";
import ComingSoon from "./Pages/Movies/ComingSoon";
import Details from "./Pages/Details";
import HomeSeries from "./Pages/Series/HomeSeries";
import AccueilSeries from "./Pages/Series/AccueilSeries";
import AllSeries from "./Pages/Series/AllSeries";

import TrendingSeries from "./Pages/Series/TrendingSeries";

import ComingSoonSeries from "./Pages/Series/ComingSoonSeries";
import Favourites from "./Pages/Favourites";
import AllMovies from "./Pages/Movies/AllMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeScreen />,
  },
  {
    path: "/Login",
    element: <LogIn />,
  },
  {
    path: "/SingUp",
    element: <SingUp />,
  },
  {
    path: "/home",
    element: <Accueil />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "favourites",
        element: <Favourites />,
      },
      {
        path: "trending",
        element: <Trending />,
      },
     
      {
        path: "Comingsoon",
        element: <ComingSoon />,
      },
      {
        path: "movie-details",
        element: <Details />,
      },
      {
        path:"allmovies",
        element :<AllMovies />
      },
     
    ]
  },
 
  {
    path:"/series",
    element:<AccueilSeries />,
    children :[
      {
        path: "",
        element: <HomeSeries />,
      },
      {
        path: "favouriesseries",
        element: <Favourites />,
      },
      {
        path: "allseries",
        element: <AllSeries />,
      },
      {
        path: "Comingsoonseries",
        element: <ComingSoonSeries />,
      },
      {
        path: "trendingseries",
        element: <TrendingSeries />,
      },
     
      {
        path: "serie-details",
        element: <Details />,
      },
      {
        path: "comingsoonsseries",
        element: <ComingSoonSeries />,
      },
    
    ],

  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
