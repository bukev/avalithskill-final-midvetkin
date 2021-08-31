const Favorites = (props) => {

    //Aca tengo que pasar el id del usuario logueado
    fetch('/favorites/1')
        .then(res => res.json())
        .then(data => console.log(data))

    return(
        <h1>{props.user}'s Favorites</h1>
    )
}

export default Favorites