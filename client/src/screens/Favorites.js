import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

const Favorites = (props) => {

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        if(props.user) {
            fetch(`/favorites/${props.user.id}`)
                .then(res => res.json())
                .then(data => setFavorites(data))
        }
        return () => {
            setFavorites([])
        }
    }, [])


    return(
        <div>
            <h1>Your Favorites</h1>
            <div className="movie-card-container">
                {favorites.map(f => 
                    <MovieCard 
                        key={f.id} 
                        user={props.user} 
                        id={f.id} 
                        title={f.title} 
                        director={f.director} 
                        year={f.year}
                        imageurl={f.imageurl}
                        isFavorite={true}
                    />
                )}
            </div>
        </div>
    )
}

export default Favorites