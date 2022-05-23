import { ActionTypes, Action } from "./type";

class Actions {
    ADD(val: string): Action {
        return {
            type: ActionTypes.ADD,
            payload: {
                id: Math.random() * 22222,
                name: val,
                completed: false
            }
        }
    }

    CHECK(id: number): Action {
        return {
            type: ActionTypes.CHECK,
            payload: {
                id: id
            }
        }
    }


    DELETE(id: number): Action {
        return {
            type: ActionTypes.DELETE,
            payload: {
                id: id
            }
        }
    }



}



export const actionCreator = new Actions();
