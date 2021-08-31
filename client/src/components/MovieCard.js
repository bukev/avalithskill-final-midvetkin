import { useState } from "react"
import { useHistory } from "react-router-dom"

const MovieCard = (props) => {

    const history = useHistory()
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

    const handleEdit = () => {
        history.push('/edit-movie/' + props.id)
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
            {props.user.id && props.user.admin === 0 && <button onClick={handleFavClick}>{favorite ? 'Remove from favorites' : 'Add to favorites'}</button>}
            {props.user.admin === 1 ? <button onClick={handleEdit}>Edit</button> : ''}
        </div>
    )
}

export default MovieCard