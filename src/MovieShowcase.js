import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import CardBack from './card-components/CardBack.js'
import CardFront from './card-components/CardFront.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
     return movieData.map((movie, index) => <MovieCard 
     key={index}
     title={movie.title}
     IMDBRating={movie.IMDBRating}
     genres={movie.genres}
     poster={movie.poster}
     />)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
