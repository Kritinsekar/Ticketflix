import {useState} from 'react';
import Header from "./Components/mainpage/header";
import SubHeader from "./Components/mainpage/subheader";
import Body from "./Components/mainpage/body";
import Footer from "./Components/mainpage/footer";
import Search from './Components/mainpage/search';
import SearchMovies from './Components/mainpage/searchmovies';
import BookMovies from './Components/mainpage/BookMovies';
import "./App.css"

export default function App(){

  
let [searchActive,setSearchActive]=useState(false);
let [searchValueActive,setSearchValueActive]=useState(false);
let [searchedValue,setSearchedValue]=useState("");
let[MovieDetails,setMovieDetails]=useState(false);
let[bookMovies,setBookMovies]=useState(false);
let [bookMovieName,setBookMovieName]=useState('');


  return(
    <>
      <Header  MovieDetails={MovieDetails} setMovieDetails={setMovieDetails} setSearchActive={setSearchActive} setSearchedValue={setSearchedValue} searchedValue={searchedValue} searchActive={searchActive} searchValueActive={searchValueActive} setSearchValueActive={setSearchValueActive} setBookMovies={setBookMovies} setBookMovieName={setBookMovieName}/>

      <SubHeader setSearchActive={setSearchActive} searchActive={searchActive}/>

      {searchValueActive?<SearchMovies  MovieDetails={MovieDetails} setMovieDetails={setMovieDetails} setSearchedValue={setSearchedValue} searchedValue={searchedValue}/>:searchActive?<Search  MovieDetails={MovieDetails} setMovieDetails={setMovieDetails} searchValueActive={searchValueActive} setSearchValueActive={setSearchValueActive}/>:bookMovies?<BookMovies bookMovieName={bookMovieName} setBookMovieName={setBookMovieName}/>: <Body setBookMovies={setBookMovies} bookMovieName={bookMovieName} setBookMovieName={setBookMovieName}/>}

      {searchActive?"": <Footer/>}
    </>
  )

}
