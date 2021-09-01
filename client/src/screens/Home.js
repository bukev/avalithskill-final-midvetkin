import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

const Home = (props) => {
    
    const [movies, setMovies] = useState([])
    const [favoriteIds, setFavoriteIds] = useState([])

    
    useEffect(() => {
        if (props.user.id) {
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
            <div className="movie-card-container">
                {movies.map(m => {
                    
                    return(
                        <MovieCard 
                            key={m.id} 
                            user={props.user} 
                            id={m.id} 
                            title={m.title} 
                            director={m.director} 
                            year={m.year}
                            imageurl={m.imageurl}
                            isFavorite={favoriteIds.includes(m.id) ? true : false}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Home