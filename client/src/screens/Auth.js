import { useState } from "react"
import { useHistory } from "react-router"

const Auth = (props) => {

    const history = useHistory()
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })

    
    const handleSubmit = (event) => {
        event.preventDefault()
        
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...formState})
        }

        fetch('/login', fetchOptions)
            .then(res => {
                if(res.ok){
                    return res.json()
                } else {
                    alert('Invalid email or password')
                    return
                }
            })
            .then(data => {
                sessionStorage.setItem('token', data.token)
                //props.setUser(data.token)
                return sessionStorage.getItem('token')
            })
            .then(token => {
                fetch('/users', {
                    method: 'POST',
                    headers: {
                    'Authorization': 'Bearer ' + token
                    }
                })
                    .then(res => res.json())
                    .then(data => {props.setUser(data)})
            })
            .catch(err => console.log(err))

        history.push('/')
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
                    <input onChange={handleInputChange} name="email" type="text" required/>
                </label>
                <label>
                    Password
                    <input onChange={handleInputChange} name="password" type="password" required/>
                </label>

                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Auth