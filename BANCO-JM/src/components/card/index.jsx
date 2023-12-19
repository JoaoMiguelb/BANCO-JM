import './styles.css'

const Card = ({img, txt}) => {
    return(
            <div className="card">
                <span>{img}</span>
                <p>{txt}</p>
            </div>       
    )
}

export default Card