import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"


const EditMovie = (props) => {
    
    const { id } = useParams()
    const history = useHistory()
    const [formState, setFormState] = useState({})

    useEffect(() => {

        if (props.user.admin !== 1) {
            history.push('/')
        }

        fetch('/movies/' + id)
            .then(res => res.json())
            .then(movie => setFormState(movie))
        
        return () => {
            setFormState({})
        }
        
    }, [])

    const handleInputChange = (event) => {

        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }
    
    const handleSubmit = (event) => {
        
        event.preventDefault()
        
        const fetchOptions = {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        }
        
        fetch('/movies/' + id, fetchOptions)
            .then(history.push('/'))
    }

    return(
        <div>
            <h1>Edit Movie N° {id}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title
                    <input onChange={handleInputChange} required name="title" type="text" maxLength="45" value={formState['title']}/>
                </label>
                <label>
                    Year
                    <input onChange={handleInputChange} required name="year" type="number" min="1900" max="2022" value={formState['year']}/>
                </label>
                <label>
                    Director
                    <input onChange={handleInputChange} required name="director" type="text" maxLength="45" value={formState['director']}/>
                </label>
                <label>
                    Image URL
                    <input onChange={handleInputChange} required name="imageurl" type="text" maxLength="100" value={formState['imageurl']}/>
                </label>

                <input type="submit" value="Save Changes" className="submit-button" />
            </form>
        </div>
    )
}

export default EditMovie