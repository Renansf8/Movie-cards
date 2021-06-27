import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import './movieList.css';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div className='list'>
        {movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
