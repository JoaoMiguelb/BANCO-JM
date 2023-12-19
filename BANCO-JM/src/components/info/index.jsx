import { FiCheckCircle } from "react-icons/fi"

import './styles.css'

const Info = ({subtitulo, numero, txt1, txt2, txt3}) => {
    return(
        <div className="info">
            <p>{subtitulo}</p>
            <p className="numero">{numero}</p>
            <hr/>
            <ul>
                <li className="item"> <FiCheckCircle className="icon"/>{txt1}</li>
                <li className="item"> <FiCheckCircle className="icon"/>{txt2}</li>
                <li className="item"> <FiCheckCircle className="icon"/>{txt3}</li>
            </ul>
        </div>
    )
}

export default Info