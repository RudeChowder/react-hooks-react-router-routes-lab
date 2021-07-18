import React from "react";
import { movies } from "../data";

function Movies() {
  const listOfMovies = movies.map(movie => {
    return <div key={movie.title}>
      <h3>{movie.title}</h3>
      <p>Runtime: {movie.time}</p>
      <p>Genres:</p>
      <ul>
        {movie.genres.map(genre => <li key={Math.random() * 5000}>{genre}</li>)}
      </ul>
    </div>
  })
  
  return <div>
    <h1>Movies Page</h1>
      {listOfMovies}
    </div>;
}

export default Movies;
