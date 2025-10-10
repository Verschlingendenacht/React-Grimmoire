function ProfilePicture(){

    const imageUrl = './src/assets/yo.png'; //never use relative paths here, use absolute
    const handleClick = (e) => e.target.style.display = "none";

    return(
        <img onClick={(e) => handleClick(e)} src={imageUrl}></img>
    )
}

export default ProfilePicture