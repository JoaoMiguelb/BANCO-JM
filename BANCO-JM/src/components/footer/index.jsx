// react
import { Link } from "react-router-dom"

// icons
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"

// imgs
import img from "../../img/logo_JM.png"

// CSS
import './styles.css'


const Footer = () => {
    return(
        <footer>
            <Link to="/"><img src={img} className="logo"/></Link>
            <div className="caixa-icons">
                <a href="https://www.linkedin.com/in/jm-dev/" target="blank"><BsLinkedin/></a>
                <a href="https://github.com/JoaoMiguelb" target="blank"><BsGithub/></a>
                <a href="https://www.instagram.com/joaomiguel615/" target="blank"><BsInstagram/></a>
            </div>
        </footer>
    )
}

export default Footer