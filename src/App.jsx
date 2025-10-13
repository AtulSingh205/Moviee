import React, { useEffect, useState } from "react";
import Card from "./Componet/Card";
import Search from "./Componet/Search";
import Wishlist from "./Componet/Wishlist";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

const App = () => {
  const [Movie, SetMovie] = useState([]);

  const [search, SetSearch] = useState("");

  const [wishList,setWishlist]=useState([])

  let fetchSearch = Movie.filter((itm) => {
    if (search === "") {
      return true;
    } else {
      return itm.Title.toLowerCase().includes(search.toLowerCase());
    }
  });

  async function fetchdata() {
    let Api_Key = "dd4ad9fd"
    let Store = await fetch(
      `https://www.omdbapi.com/?apikey=${Api_Key}&s=${search || "marvel"}`
    );
    let result = await Store.json();
    SetMovie(result.Search || [])

  useEffect(() => {
      fetchdata();
  }, [search]);

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
  <BrowserRouter>
      <Nav/>
  <Routes>
    <Route path="/Wishlist" element={<Wishlist/>}/>
  </Routes>
  </BrowserRouter>
 
  <div className="relative z-10 flex flex-col items-center gap-6 p-6">
    <img
      className="h-20 w-24"
      src="https://cdn-icons-png.flaticon.com/512/4221/4221484.png"
      alt="logo"
    />
    <h1 className="text-4xl text-amber-100 font-bold text-center">
      Unlimited movies, TV shows and more.
    </h1>
     
    <Search SetSearch={SetSearch} search={search} />
    <Card fetchSearch={fetchSearch} />
  </div>
</div>


  )
}

export default App;
