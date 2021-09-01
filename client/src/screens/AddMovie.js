import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import '../styles/forms.css'

const AddMovie = (props) => {

    const history = useHistory()
    const [formState, setFormState] = useState({})

    useEffect(() => {
        if (props.user.admin !== 1) {
            history.push('/')
        }
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
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        }
        
        fetch('/movies', fetchOptions)
            .then(history.push('/'))
    }

    return (
        <div>
            <h1>New Movie</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title
                    <input onChange={handleInputChange} required name="title" type="text" maxLength="45" />
                </label>
                <label>
                    Year
                    <input onChange={handleInputChange} required name="year" type="number" min="1900" max="2022" />
                </label>
                <label>
                    Director
                    <input onChange={handleInputChange} required name="director" type="text" maxLength="45" />
                </label>
                <label>
                    Image URL
                    <input onChange={handleInputChange} required name="imageurl" type="text" maxLength="100" />
                </label>

                <input type="submit" value="Add new movie" className="submit-button" />
            </form>
        </div>
    )
}

export default AddMovie