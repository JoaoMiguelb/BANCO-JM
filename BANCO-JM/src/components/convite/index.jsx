import { Link } from "react-router-dom"
import { IMaskInput} from "react-imask"
import { useCpfContext } from "../../hooks/useCpfContext"


import './styles.css'
const Convite = () => {
    const {cpf, setCpf} = useCpfContext()
    
    return (
        <div className="convite">
            <p>Junte-se a milhares de pessoas e faça a escolha inteligente: Banco JM.</p>
            <div className="input-container">
                <IMaskInput
                    mask="000.000.000-00"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    
                />
                <label htmlFor="cpf-input">Digite seu CPF</label>
            </div>
            <Link to="/Form" className="link">Abra já sua conta</Link>
        </div>
    )
    
}


export default Convite
