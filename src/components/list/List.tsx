import { ReactElement } from "react";
import { useSelectorType } from "../../redux/hooks";
import { ListEl } from "./ListEl";



export const List = ():ReactElement => {
    const todos = useSelectorType(state => state.todos)

    return (
        <ul>
            {todos.map(el => <ListEl key={el.id} id={el.id} completed={el.completed} name={el.name}/>)}
        </ul>
    )
}