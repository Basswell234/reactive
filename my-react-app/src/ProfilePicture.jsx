
function ProfilePicture(){
    const imageUrl = './src/assets/bassn.jpg';

    const handle = (e) => e.target.style.display = "none";

    return (<img onClick = {(e) => handle(e)} src={imageUrl}></img>);
}

export default ProfilePicture