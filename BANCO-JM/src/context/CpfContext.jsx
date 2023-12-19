import { createContext, useState } from "react";

export const CpfContext = createContext()

export const CpfContextProvider = ({children}) => {
    const [cpf, setCpf] = useState("")

    return(
        <CpfContext.Provider value={{cpf, setCpf}} >
            {children}
        </CpfContext.Provider>
    )
}