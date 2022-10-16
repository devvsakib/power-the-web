import React from "react";
import { addFavourite, removeFavourite } from "../actions";


class MovieCard extends React.Component {
  handleFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavourite(movie));
  };
  handleUnFavouriteClick=()=>{
     const { movie } = this.props;
     this.props.dispatch(removeFavourite(movie));
  }

  render() {
    const { movie, isFav } = this.props;
    // console.log(isFav,"mov")
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {!isFav ? (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                Favourite
              </button>
            ) : (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavouriteClick}
              >
                Remove Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
