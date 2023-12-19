import { IMaskInput } from "react-imask"
import EstadosDoBrasilSelect from "./estadosBrasileirosSelect"
import { useCpfContext } from "../../hooks/useCpfContext"
import { useState } from "react"
import { useEstadoContext } from "../../hooks/useEstadoContext"

// CSS
import './styles.css'

const Formulario = () => {

    const { cpf, setCpf } = useCpfContext()
    const [nome, setNome] = useState("")
    const [data, setData] = useState("")
    const [email, setEmail] = useState("")
    const [numero, setNumero] = useState("")
    const [cidade, setCidade] = useState("")
    const {estado} = useEstadoContext()
    const [rua, setRua] = useState("")
    const [bairro, setBairro] = useState("")
    const [numeroRua, setNumeroRua] = useState("")
    const [complemento, setComplemento] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()


        const user = {
            dadosPessoais: {
                nome,
                data,
                email,
                cpf,
            },
            endereco: {
                cidade,
                estado,
                rua,
                bairro,
                numeroRua,
                complemento,
            },
        };
        console.log(user)
    }

    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <h3>Dados</h3>

            <span className="input-caixa">
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" name="nome" placeholder="Digite seu nome completo" onChange={(e) => setNome(e.target.value)} value={nome} required />
            </span>

            <div className="input-wrapper">
                <label htmlFor="cpf">CPF</label>
                <IMaskInput
                    id="cpf"
                    mask="000.000.000-00"
                    placeholder="Digite seu CPF"
                    className="masked-input"
                    required
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    name="cpf"
                />
            </div>

            <span className="input-caixa">
                <label htmlFor="data">Data de nascimento</label>
                <input type="date" name="data" placeholder="Digite sua data de nascimento" onChange={(e) => setData(e.target.value)} value={data} required />
            </span>

            <span className="input-caixa">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
            </span>

            <div className="input-wrapper">
                <label htmlFor="telefone">Telefone</label>
                <IMaskInput
                    id="telefone"
                    mask="(00) 00000-0000"
                    placeholder="(00) 00000-0000"
                    className="masked-input"
                    required
                    onChange={(e) => setNumero(e.target.value)}
                    name="telefone"
                />
            </div>
            <div className="local-caixa">
                <h3>Endereço de cobrança</h3>
                <span>
                    <EstadosDoBrasilSelect/>
                    <span className="input-caixa">
                        <label htmlFor="cidade">Cidade</label>
                        <input type="text" name="cidade" placeholder="Digite sua cidade" onChange={(e) => setCidade(e.target.value)} value={cidade} required />
                    </span>

                    <span className="input-caixa">
                        <label htmlFor="rua">Rua</label>
                        <input type="text" name="rua" placeholder="Digite sua rua" onChange={(e) => setRua(e.target.value)} value={rua} required />
                    </span>
                </span>
                <span>

                    <span className="input-caixa">
                        <label htmlFor="numero">Numero</label>
                        <input type="number" name="numero" placeholder="Digite seu numero" onChange={(e) => setNumeroRua(e.target.value)} value={numeroRua} required />
                    </span>

                    <span className="input-caixa">
                        <label htmlFor="bairro">Bairro</label>
                        <input type="text" name="bairro" placeholder="Digite seu bairro" onChange={(e) => setBairro(e.target.value)} value={bairro} required />
                    </span>

                    <span className="input-caixa">
                        <label htmlFor="complemento">Complemento</label>
                        <input type="text" name="complemento" placeholder="Digite seu complemento" onChange={(e) => setComplemento(e.target.value)} value={complemento} />
                    </span>
                </span>
                <button >Finalizar</button>
            </div>
           
        </form>
    )

   
}



export default Formulario