import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import './movieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div className='card-container'>
        <img src={ movie.imagePath } alt="Movie" />
        <div className='info-card'>
          <h4>{ movie.title }</h4>
          <h5>{ movie.subtitle }</h5>
          <p>{ movie.storyline }</p>
          <Rating rating={ movie.rating } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
