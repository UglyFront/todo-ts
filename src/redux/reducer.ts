import { IState, Action, ActionTypes } from "./type"


const initState: IState = {
    todos: [],
}


export const reducer = (state = initState, action: Action):IState => {
    switch(action.type) {
        case ActionTypes.ADD:
            return {...state, todos: [...state.todos, action.payload]};



        case ActionTypes.CHECK: {
            let newTodos = state.todos.filter(el => {
                if (el.id === action.payload.id) {
                    el.completed = true
                    return el
                }
                else {
                    return el
                }
            })
            return {...state, todos: newTodos}
        }




        case ActionTypes.DELETE: {
            let newTodos = state.todos.filter(el => el.id !== action.payload.id)
            return {...state, todos: newTodos}
        }




        default: return state
    }
}