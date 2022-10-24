import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import AppWrapper from "./components/App";
import rootReducer from "./reducers";
//
// const logger=function ({dispatch,getState}){
//           return function(next){
//             return function (action){
//               //middleware code
//               console.log("ACTION_TYPE =",action.type)
//              next(action)
//             }
//           }
// }

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // middleware code
    if (typeof action !== "function") {
      console.log("ACTION_TYPE =", action.type);
    }

    next(action);
  };

// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     // middleware code
//     if (typeof action === 'function'){
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log("before", store.getState());
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:"Superman"}]
// // });

// console.log("after", store.getState());
// export const StoreContext=createContext();
// class Provider extends React.Component{
//   render(){
//     const {store}=this.props;
//    return<StoreContext.Provider value={store}>
//        {this.props.children}
//     </StoreContext.Provider>;
   
//   }
// }
//const connectedAppComponent=connect(callback)(App)
// export function connect(callback){
//   return function(Component){
//     class ConnectedComponent extends React.Component{
//       constructor (props){
//         super(props);
//           this.unsubscribe=this.props.store.subscribe(()=>this.forceUpdate());
        
//       };
//       componentWillUnmount(){
//         this.unsubscribe();
//       }
//       render(){
//         const {store}=this.props;
//          const state = store.getState();
//          const dataToBePassed = callback(state);
//          return <Component {...dataToBePassed} dispatch={store.dispatch} />

//       }
//     };
//     class ConnectedComponentWrapper extends React.Component{
//       render(){
//         return  <StoreContext.Consumer>
//           {(store)=>{return <ConnectedComponent store ={store}/> }}
//         </StoreContext.Consumer>
//       }
//     };
//     return ConnectedComponentWrapper;
//   }
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </React.StrictMode>
);
