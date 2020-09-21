import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Pagination from "react-js-pagination";
import InputRange from "react-input-range";
import FilterArea from "./components/FilterArea";
import Slide from "./components/Slide";
import { Modal } from "react-bootstrap";
// require("bootstrap/less/bootstrap.less");

const apiKey = process.env.REACT_APP_APIKEY;

function App() {
  let [originalList, setOriginalList] = useState([]); //original list

  let [movieList, setMovieList] = useState([]); // for rendering
  let [page, setPage] = useState(1);
  let [totalResult, setTotalResult] = useState(0);
  let [inputRange, setInputRange] = useState({ min: 0, max: 10 });
  let [genreList, setGenreList] = useState([]);
  let [show, setShow] = useState(false);
  let [trailerKey, setTrailerKey] = useState("")

  const getMovieLatest = async (page) => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("Data", data);
    setTotalResult(data.total_results);
    setOriginalList(data.results);
    setMovieList([...data.results]);
  };

  const getGenreList = async () => {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("GenreData", data);
    setGenreList(data.genres);
  };
  const searchByKeyword = async (keyword) => {
    if (keyword === "" || keyword == null) {
      return;
    }
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("Data", data);
    setTotalResult(data.total_results);
    setMovieList(data.results);
  };
  const searchBygenre = async (genre) => {
    console.log(genre.id);
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genre.id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("Data", data);
    setMovieList(data.results);
  };
  const handleShow = () => {
    console.log("haha");
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const trailerShow = async (movie_id) => {
    let url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${apiKey}&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("trailer data result",data)
    console.log("Data", data.results[0].key);
    handleShow()
    
   
    setTrailerKey(data.results[0].key)
  };

  const filterByRate = (range) => {
    console.log("range?", range);
    let filteredList = originalList.filter(
      (item) => item.vote_average >= range.min && item.vote_average <= range.max
    );
    setMovieList(filteredList);
  };
  useEffect(() => {
    getMovieLatest();
    getGenreList();
  }, []);

  return (
    <div className="tt">
      <Slide list={movieList} />
      <Navigation
        searchByKeyword={searchByKeyword}
        genreList={genreList}
        searchBygenre={searchBygenre}
      />
      <FilterArea
        inputRange={inputRange}
        setInputRange={setInputRange}
        filterByRate={filterByRate}
      />

      <MovieList
        list={movieList}
        genreList={genreList}
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        trailerShow={trailerShow}
        trailerKey={trailerKey}
      />

      <Pagination
        activePage={page}
        itemsCountPerPage={20}
        totalItemsCount={totalResult}
        pageRangeDisplayed={5}
        onChange={(clickedpage) => {
          setPage(clickedpage);
          getMovieLatest(clickedpage);
        }}
        itemClass="page-item"
        linkClass="page-link"
      />
    </div>
  );
}

export default App;

// page nation
//range filter
//search by gene
