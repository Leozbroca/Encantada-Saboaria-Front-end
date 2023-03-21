import React , {useContext,createContext} from "react"
import { ProductContextData } from "./GlobalState"

const GlobalStateContext = createContext<ProductContextData>({} as ProductContextData)

export default GlobalStateContext

export const useGlobal = () => useContext(GlobalStateContext)