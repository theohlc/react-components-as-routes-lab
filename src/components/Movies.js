import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movie => (
          <div>
            {movie.title}<br></br>
            {movie.time}<br></br>
            {movie.genres.join(", ")}<br></br>
            {movie.metascore}<br></br>
          </div>
        ))}
    </div>
  );
};

export default Movies;
