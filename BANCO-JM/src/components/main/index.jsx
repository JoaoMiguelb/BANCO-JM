// icons
import { ImQuill } from "react-icons/im"
import { BsFillAspectRatioFill } from "react-icons/bs"
import { MdSecurity } from "react-icons/md"
import { FaMoneyBillWave } from "react-icons/fa"

//components
import Convite from "../../components/convite/index"
import Card from "../../components/card/index"
import CarrosselProdutos from "../carrossel"
import Info from '../../components/info/index.jsx'

// CSS
import './styles.css'

const Main = () => {
    return (
        <div className="main">
            <div className="bloco">
                <div className="caixa-bloco">
                    <h3>Abra sua conta de forma totalmente digital</h3>
                    <hr />
                    <p>Forneça seus dados em um breve formulário e comece a utilizar sua conta imediatamente!</p>
                </div>
            </div>
            <div class="card-container">
                <Card img={<ImQuill />} txt={"Renegociações de dívidas"} />
                <Card img={<BsFillAspectRatioFill />} txt={"Cartão"} />
                <Card img={<MdSecurity />} txt={"Seguro"} />
                <Card img={<FaMoneyBillWave />} txt={"Investimentos"} />
            </div>
            <Convite />
            <CarrosselProdutos />
            <div class="info-container">
                <Info
                    subtitulo={"Limite Inicial do Cartão"}
                    numero={"R$1.000"}
                    txt1="Sem Taxa Anual"
                    txt2="Crédito e Débito"
                    txt3="Digital e Físico Disponíveis"
                />
                <Info
                    subtitulo={"Alívio de Dívidas de até"}
                    numero={"60%"}
                    txt1="Processo Online Simplificado"
                    txt2="Taxas de Juros Competitivas"
                    txt3="Prolongamento"
                />
                <Info
                    subtitulo={"Custo Anual do Seguro"}
                    numero={"R$3.040"}
                    txt1="Opção de Reembolso"
                    txt2="Cobertura para Veículos"
                    txt3="Contratação Online"
                />
            </div>
        </div>
    )
}

export default Main