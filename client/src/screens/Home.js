import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import '../styles/home.css'

const Home = (props) => {
    
    const history = useHistory()
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
            <div className="home-title">
                <h1>Home</h1>
                {props.user.admin === 1 && <div onClick={() => history.push('/add-movie')} className="new-movie-button">New Movie</div>}
            </div>
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