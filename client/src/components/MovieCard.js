import { useState } from "react"
import { useHistory } from "react-router-dom"
import '../styles/moviecard.css'

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
            <img src={props.imageurl}  alt={props.title}/>
            <div className="description">
                <p className="movie-card-title">
                    {props.title}
                </p>
                <p>
                    ({props.year})
                </p>
                <p>
                    Dir. {props.director}
                </p>
            </div>
            {props.user.id && props.user.admin === 0 &&
                <div title={favorite ? 'Remove from Favorites' : 'Add to Favorites'} onClick={handleFavClick} className={favorite ? 'fav-button active' : 'fav-button'}>
                    <img src="https://image.flaticon.com/icons/png/512/2107/2107845.png" />
                </div>
            }
            {/* {props.user.id && props.user.admin === 0 && <button onClick={handleFavClick} className="fav-button">{favorite ? 'Remove from favorites' : 'Add to favorites'}</button>} */}
            {props.user.admin === 1 ? <button onClick={handleEdit} className="edit-button">Edit</button> : ''}
        </div>
    )
}

export default MovieCard