 import profilePic from './assets/bassn.jpg'

 function Card(){
    return(
        <div className = "card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Basswell Mbilima</h2>
            <p className="card-text">Digital Marketer and Web Developer</p>
        </div>
    );
 }

 export default Card