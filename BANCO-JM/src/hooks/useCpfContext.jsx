import { useContext } from "react";
import { CpfContext } from "../context/CpfContext";

export const useCpfContext = () => {
    const context = useContext(CpfContext)

    if(!context){
        console.log("contexto não encontrado")
    }

    return context
}