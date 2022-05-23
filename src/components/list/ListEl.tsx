import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { actionCreator } from "../../redux/actions";
import { ITodo } from "../../redux/type";



export const ListEl = (props: ITodo):ReactElement => {
    const disptach = useDispatch()

    const check = (id: number) => {
            disptach(actionCreator.CHECK(id))
    }

    function deleted (id: number) {
        let answer = window.confirm(`Удаляем заметку: ${props.name}?`)
        
        if(answer) {
            disptach(actionCreator.DELETE(id))
        }
    }

    return (
        <li>
            {props.name} 
            
            
            <span style={{"marginLeft": "15px", "cursor": "pointer"}} onClick={() => deleted(props.id)}>del</span>


            {props.completed?
            <span style={{"marginLeft": "15px", "cursor": "pointer"}}>done</span>
            :
            <span style={{"marginLeft": "15px", "cursor": "pointer"}} onClick={() => check(props.id)}>chk</span>
            }


        </li>
    )
}