import { combineReducers } from "redux";
import {
  ADD_MOVIES,
  ADD_MOVIE_TO_LIST,
  ADD_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  SET_SHOW_FAVOURITE,
  ADD_SEARCH_RESULT,
} from "../actions/index";
const intitialMoviesState={
    list:[],
    favorites:[],
    showFavourites:false
}
export function movies (state=intitialMoviesState, action){
    console.log("moivereducer")

    switch (action.type) {
      case ADD_MOVIES:
        return {
          ...state,
          list: action.movies,
        };

      case ADD_FAVOURITE:
        return {
          ...state,
          favorites: [action.movie, ...state.favorites],
        };

      case REMOVE_FROM_FAVOURITE: {
        const filteredArray = state.favorites.filter(
          (movie) => movie.Title !== action.movie.Title
        );

        return {
          ...state,
          favorites: filteredArray,
        };
      }
      case SET_SHOW_FAVOURITE: {
        return {
          ...state,
          showFavourites: action.value,
        };
      }
      case ADD_MOVIE_TO_LIST: {
        return {
          ...state,
          list:[action.movie,...state.list],
        };
      }

      default:
        return state;
    }

} 
const intitalSearchState = {
  result: {},
  showSearchResults: false,
};
export function search (state=intitalSearchState,action){
    console.log("search reducer");
     switch (action.type) {
       case ADD_SEARCH_RESULT:
         return {
           ...state,
           result: action.movie,
           showSearchResults: true,
         };
       case ADD_MOVIE_TO_LIST: {
         return {
           ...state,
           showSearchResults: false,
         };
       }

       default:
         return state;
     }
    //  return state;
}

// const initialRootState={
//     movies:intitialMoviesState,
//     search:intitalSearchState
// }

// export  function rootReducer(state=initialRootState,action){
//     return{
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// };

export default combineReducers({
    movies,
    search
})
