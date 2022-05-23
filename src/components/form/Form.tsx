import { ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreator } from "../../redux/actions";



export const Form = ():ReactElement => {
    const dispatch = useDispatch()

    const [value, setValue] = useState<string>("")



    function sendDisptach() {
        if (value.length > 2) {
            dispatch(actionCreator.ADD(value))
        }
    }

    return (
        <>
            <input type="text" onChange={(e) => setValue(e.target.value)}/>
            <button onClick={sendDisptach}>add</button>
        </>
    )
}