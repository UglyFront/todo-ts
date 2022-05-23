import { useSelector } from "react-redux"
import { TypedUseSelectorHook } from "react-redux"
import { IState } from "./type"

export const useSelectorType: TypedUseSelectorHook<IState> = useSelector