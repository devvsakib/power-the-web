import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";
import { connect } from "react-redux";
import { data } from "../data";
import { addMovie, setShowFavourite } from "../actions";
// import {connect} from '../index';


class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    // store.subscribe(() => {
    //   // console.log("updated")
    //   this.forceUpdate();
    // });
    //make api call

    //dispatch action
    this.props.dispatch(addMovie(data));
    // console.log("state",this.props.store.getState())
  }
  isMovieFav = (movie) => {
    const { movies } = this.props;
    const index = movies.favorites.indexOf(movie);
    // console.log(index,"in");
    if (index !== -1){
      //found the movie
      // console.log("if in",index)
      return true;
    }
    return false;
  };

  onChangeTab=(value)=>{
    this.props.dispatch(setShowFavourite(value))
  }
  render() {
    const { movies,search } = this.props;
    const { list, favorites, showFavourites } = movies;
    
    const displayMovies=showFavourites ? favorites : list
    

   
    return (
      <div className="App">
        <Navbar search={search}/>
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => {
                this.onChangeTab(false);
              }}
            >
              Movies
            </div>
            <div
              className={`tab ${!showFavourites ? "" : "active-tabs"}`}
              onClick={() => {
                this.onChangeTab(true);
              }}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                isFav={this.isMovieFav(movie)}
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.dispatch}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">No Movies to Display!!!</div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}



// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// };
function callback(state){
   return{
    movies:state.movies,
    search:state.search
   }
}

const connectedAppComponent=connect(callback)(App)
export default connectedAppComponent;
