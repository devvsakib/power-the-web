// import React from 'react'

// export const introReducer = () => {
//   return (
//     <div>introReducer</div>
//   )
// }


const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false
}];

const todoReducer = ( state = initialState, action ) => {
    
    if(action.type = 'prueba'){
        return [...state, newState];
    }

    return state;
}

// let todos = todoReducer();

