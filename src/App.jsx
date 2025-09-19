import React, { useEffect, useState } from "react";
import Card from "./Componet/Card";
import Search from "./Componet/Search";

const App = () => {
  const [Movie, SetMovie] = useState([
    {
      Title: "Don Jon",
      Year: "2013",
      imdbID: "tt2229499",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDgwMTU2NDctODI0YS00ZmIxLWFiNjEtZDI2ZGE3NWFlZDY2XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Don 2",
      Year: "2011",
      imdbID: "tt1285241",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTc3YmI2OTgtMTBmMi00Y2FmLWJjNGUtZTJjOGI1NDVlMDY5XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Don Juan DeMarco",
      Year: "1994",
      imdbID: "tt0112883",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTFjOWJhYjUtNjllYi00MDdkLWJjYTMtNTNlNjJlMDVmZGJlXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Don",
      Year: "2006",
      imdbID: "tt0461936",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjBmOTg2NTgtZTc2Mi00ZWRhLTkzMWQtMDI0YThhZTcyMzYwXkEyXkFqcGc@._V1_SX300.jpg",
    },
  ]);

  const [search, SetSearch] = useState("");

  let fetchSearch = Movie.filter((itm) => {
    if (search === "") {
      return true;
    } else {
      return itm.Title.toLowerCase().includes(search.toLowerCase());
    }
  });

  async function fetchdata() {
    let Api_Key = "dd4ad9fd";
    let Store = await fetch(
      `https://www.omdbapi.com/?apikey=${Api_Key}&s=${search}`
    );
    let result = await Store.json();
    SetMovie(result.Search || [])
  }

  useEffect(() => {
    if (search !== "") {
      fetchdata()
    }
  }, [search])

  return (
 <div className="relative h-screen w-full">
  <div className="absolute inset-0">
     <img
    src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg"
    alt="bg"
    className="absolute inset-0 w-full h-full object-fit blur-[2px]"
  />
  <div className="absolute inset-0 bg-black/50 -z-10"></div>
  </div>
 

  {/* ✅ Content wrapper */}
  <div className="relative z-10 flex flex-col items-center gap-6 p-6">
    <img
      className="h-20 w-24"
      src="https://cdn-icons-png.flaticon.com/512/4221/4221484.png"
      alt="logo"
    />
    <h1 className="text-4xl text-amber-100 font-bold text-center">
      Unlimited movies, TV shows and more
    </h1>

    <Search SetSearch={SetSearch} search={search} />
    <Card fetchSearch={fetchSearch} />
  </div>
</div>


  )
}

export default App;
