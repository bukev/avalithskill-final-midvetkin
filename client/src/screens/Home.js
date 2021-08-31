import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import Favorites from "./Favorites"

const Home = (props) => {
    
    const [movies, setMovies] = useState([])
    const [favoriteIds, setFavoriteIds] = useState([])

    useEffect(() => {
        if(props.user.id){
            fetch(`/favorites/${props.user.id}`)
            .then(res => res.json())
            .then(data => setFavoriteIds(data.map(m => m.id)))
        }

        fetch('/movies')
            .then(res => res.json())
            .then(data => setMovies(data))
        
      }, [])
    
    return(
        <div>
            <h1>Home</h1>
            {movies.map(m => {
                
                return(
                    <MovieCard 
                        key={m.id} 
                        user={props.user} 
                        id={m.id} 
                        title={m.title} 
                        director={m.director} 
                        year={m.year} 
                        isFavorite={favoriteIds.includes(m.id) ? true : false}
                    />
                )
            })}
        </div>
    )
}

export default Home