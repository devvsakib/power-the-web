export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case 'Add new todo':
            if(action.payload){
                // return [...initialState, {
                //     id: new Date().getTime(),
                //     description: action.description,
                //     done: false
                // }];
                return [...initialState, action.payload];
            }
        case 'Delete todo':
            return initialState.filter( todo => todo.id !== action.payload.id);
        case 'Toggle todo':
            return initialState.map( todo => {
                if (todo.id === action.payload.id){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
        default:
            return initialState;
    }
}