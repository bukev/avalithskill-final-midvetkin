import { useState } from "react"

const MovieCard = (props) => {

    const [favorite, setFavorite] = useState(props.isFavorite)

    const newFavorite = (userid, movieid) => {
        
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"id_user": userid, "id_movie": movieid})
        }

        if(userid && movieid) {
            fetch('/favorites', fetchOptions)
                .then(res => {if(res.ok) alert('Added to favorites')})

        }
    }

    const deleteFavorite = (userid, movieid) => {
        
        const fetchOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"id_user": userid, "id_movie": movieid})
        }

        if(userid && movieid) {
            fetch('/favorites', fetchOptions)
                .then(res => {if(res.ok) alert('Removed from favorites')})
                
        }

    }
    
    const handleFavClick = () => {
        if(favorite === false) {
            newFavorite(props.user.id, props.id)
        } else {
            deleteFavorite(props.user.id, props.id)
        }

        setFavorite(!favorite)

    }



    return (
        <div className="movie-card">
            <hr/>
            <img src={props.imageurl}  alt={props.title}/>
            <div className="description">
                <h4>
                    {props.title}
                </h4>
                <p>
                    {props.year}
                </p>
                <p>
                    {props.director}
                </p>
            </div>
            {props.user.id && <button onClick={handleFavClick}>{favorite ? 'Eliminar de favoritos' : 'Añadir'}</button>}
            
        </div>
    )
}

export default MovieCard