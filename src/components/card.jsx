const Card = ({ char }) => {
    return (
        <div className="card">
            <img className="card_image" src={char.image} alt="image character" />
            <div> <h2>{char.name}</h2>
                <b>Gender:</b> {char.gender}<br></br>
                <b>Status:</b> {char.status}<br></br>
                <b>Page:</b> <a href={char.url} target="_blank">{char.url}</a></div>
            <div><b>Location: </b>{char.location.name}<br></br>
            <b>Location page:</b> <a href={char.location.url} target="_blank"><br></br>{char.location.url}</a>
            </div>
        </div>)
}

export default Card