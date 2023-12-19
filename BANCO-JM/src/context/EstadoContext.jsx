import { createContext, useState } from "react";

export const EstadoContext = createContext()

export const EstadoContextProvider = ({children}) => {
    const [estado, setEstado] = useState("")

    return(
        <EstadoContext.Provider value={{estado, setEstado}} >
            {children}
        </EstadoContext.Provider>
    )
}