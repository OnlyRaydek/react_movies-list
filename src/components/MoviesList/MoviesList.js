import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { MovieCardShape } from '../shapes/MovieCardShape';

export const MoviesList = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <div className="card" key={movie.imdbId}>
          <MovieCard {...movie} />
        </div>
      ))}
    </div>
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    MovieCardShape,
  ),
};

MoviesList.defaultProps = {
  movies: [],
};
