import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

const Favorites = (props) => {

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        if(props.user) {
            fetch(`/favorites/${props.user.id}`)
                .then(res => res.json())
                .then(data =>  setFavorites(data))
        }
    })


    return(
        <div>
            <h1>Your Favorites</h1>
            {favorites.map(f => 
                <MovieCard 
                    key={f.id} 
                    user={props.user} 
                    id={f.id} 
                    title={f.title} 
                    director={f.director} 
                    year={f.year} 
                    isFavorite={true}
                />
            )}
        </div>
    )
}

export default Favorites