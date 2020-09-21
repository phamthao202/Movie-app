import React from "react";
import MovieCard from "../MovieCard";

const MovieList = ({ list,genreList,show, handleShow,handleClose,trailerShow,trailerKey}) => {
  console.log("list from app", list);
  return( 
  <div className="movieAr">
      {list && list.map((item)=>
         <MovieCard movie={item} genreList={genreList} show={show} handleShow={handleShow} handleClose={handleClose} trailerShow={trailerShow} trailerKey={trailerKey}/>
      )}
  </div>);
};

export default MovieList;
