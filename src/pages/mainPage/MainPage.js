import { useLocation } from "react-router-dom"



export default function MainPage() {
    const location = useLocation()

    console.log(location);


    return (
        <>
            <h1>MainPage</h1>
        </>
    )
}