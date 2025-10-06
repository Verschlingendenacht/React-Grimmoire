import pfp from './assets/yo.png'

function Card(){
    return(
        <div className="card"> {/*we use className as class is a jsx keyword*/}
            <img className="card-image" src={pfp} alt="A profile picture of me, Alex"/>
            <h2 className="card-title">Alex Kreutzer</h2>
            <p className="card-text">I'm a Data Engineering student currently enrolled in 3rd semester</p>
        </div>
    );
}

export default Card