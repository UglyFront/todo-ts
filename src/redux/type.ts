export interface IState {
    todos: ITodo[],
}


export interface ITodo {
    id: number,
    name: string,
    completed: boolean
}

export enum ActionTypes {
    GET = "GET",
    ADD = "ADD",
    CHECK = "CHECK",
    DELETE = "DELETE",
}


interface IActionAdd {
    type: ActionTypes.ADD,
    payload: ITodo
}


interface IActionDelete {
    type: ActionTypes.DELETE,
    payload: {
        id: number
    }
}


interface IActionComplete {
    type: ActionTypes.CHECK,
    payload:  {
        id: number
    }
}


export type Action = IActionDelete | IActionComplete | IActionAdd 

