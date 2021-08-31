import { useState } from "react"


const Auth = (props) => {

    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })

    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
        
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...formState})
        }

        fetch('/login', fetchOptions)
            .then(res => res.json())
            .then(data => props.setUser(data.token))
        
    }

    const handleInputChange = (event) => {

        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input onChange={handleInputChange} name="email" type="text"/>
                </label>
                <label>
                    Password
                    <input onChange={handleInputChange} name="password" type="text"/>
                </label>

                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Auth