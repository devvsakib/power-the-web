import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";
const inititalState = {
  watchlist: [],
};

export const GlobalContext = createContext(inititalState);

// provider
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, inititalState);
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);
  // actions
  const addToWatchlist = (movie_show) => {
    dispatch({ type: "ADD_TO_WATCHLIST", payload: movie_show });
  };
  const removeFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: id });
  };
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        addToWatchlist,
        removeFromWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
