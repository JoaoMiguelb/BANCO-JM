// react
import { Link } from "react-router-dom"

// imgs
import img from "../../img/logo_JM.png"

// CSS
import './styles.css'

const Header = () => {
    return(
        <div className="navbar">
            <h2> <Link to="/"><img src={img} className="logo"/> </Link></h2>
        </div>
    )   
}

export default Header

