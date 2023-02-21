import { Link, NavLink } from "react-router-dom"


export default function NavBar() {

    return (
        <ul style={{display: "flex", listStyleType: "none"}}>
            <li style={{marginRight: "15px"}}>
                <NavLink to="/" state={{name: "Anna"}} className={({isActive}) => isActive && "active"}>Main page</NavLink>
            </li>
            <li style={{marginRight: "15px"}}>
                <NavLink to="/about" className={({isActive}) => isActive && "active"}>About page</NavLink>
            </li>
            <li style={{marginRight: "15px"}}>
                <NavLink to="/port" className={({isActive}) => isActive && "active"}>Portfolio page</NavLink>
            </li>
            <li style={{marginRight: "15px"}}>
                <NavLink to="/new" className={({isActive}) => isActive && "active"}>New page</NavLink>
            </li>
        </ul>
    )
}