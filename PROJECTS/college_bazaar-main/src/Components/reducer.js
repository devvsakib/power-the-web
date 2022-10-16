export const initialState = {
  basket: [],
  store: [],
  user: null,
  b1:[],
  bc: []
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD-TO-BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      case "ADD-TO-NBASKET1":

        let nb = [...state.b1, action.item];
        nb.slice(1,2)
        var ind=0
        if (ind >= 0) {
          nb.splice(ind, 1);
        }
        else {
          console.warn(
            `Cant remove product (id: ${action.id} as its not in the basket`
          );
        }
        return {
          ...state,
          b1: nb,
        };
      case "ADD-TO-BASKET1":
      return {
        ...state,
        b1: [...state.b1, action.item],
      };
    case "ADD-TO-Store":
      return {
        ...state,
        store: [...state.store, action.item],
      };
      
      case "SET-USER":
        return{
            ...state,
            user:action.user
        };

    case "RemoveFromBasket":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id} as its not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
     
        
    default:
      return state;
  }
};

export default reducer;
