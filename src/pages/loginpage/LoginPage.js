import { useNavigate } from "react-router-dom"

export function LoginPage () {
    const navigate = useNavigate()

    const login = () => {
        setTimeout(() => {
            navigate('/', {state: "user123"})
        }, 3000)
    }


    return (
        <>
            <input type='text' placeholder="login"/>
            <input type='password' placeholder="password"/>
            <button onClick={login}>Log in</button>
        </>
    )
}