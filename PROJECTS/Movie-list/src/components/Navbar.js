import { handleMovieSearch, addToMovieList } from "../actions";
import React from "react";
// import { StoreContext } from "../index";
import { connect } from "react-redux";

class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state={
     
      searchText:''
    }
  }
  handleChange=(e)=>{
    this.setState({
        searchText:e.target.value
    });

  };

  handleAddToMovies=(movie)=>{
    this.props.dispatch(addToMovieList(movie));

    this.setState({
      showSearchResults:false
    });
  }
  handleSearch = () => {
    const {searchText}=this.state;

    this.props.dispatch(handleMovieSearch(searchText))

  };

  render() {
    const {result, showSearchResults} =this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>
          {showSearchResults &&  <div className="search-results">
            <div className="search-result">
              <img src={result.Poster} alt ="search-pic"/>
              <div className="movie-info">
                <span> {result.Title}</span>
                <button onClick={()=>{this.handleAddToMovies(result)}}>Add to Movies</button>
              </div>
            </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

// class NavbarWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => (
//           <Navbar dispatch={store.dispatch} search={this.props.search} />
//         )}
//       </StoreContext.Consumer>
//     );
//   }
// }

function callback({search}) {
  return {
    search,
  };
}

const NavbarWrapper = connect(callback)(Navbar);

export default NavbarWrapper;
