import { Link } from "react-router-dom"
import { AiOutlineArrowRight } from "react-icons/ai"

import './styles.css'

const Produtos = ({img, titulo, txt}) => {
    return(
        <div className="produto">
            <div class="produto-container">
                <span>{img}</span>
                <p className="titulo-produto">{titulo}</p>
            </div>
            <p>{txt}</p>
            <Link to="/form">Saiba mais<AiOutlineArrowRight/></Link>
        </div>
    )
}
export default Produtos