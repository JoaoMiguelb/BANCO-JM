import { useContext } from "react";
import { EstadoContext } from "../context/EstadoContext";

export const useEstadoContext = () => {
    const context = useContext(EstadoContext)

    if(!context){
        console.log("contexto não encontrado")
    }

    return context
}