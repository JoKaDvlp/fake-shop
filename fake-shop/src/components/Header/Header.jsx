import { Link } from "react-router-dom"

import './Header.css'
import { useContext } from "react"
import { SearchBarVisibilityContext } from "../../context/SearchBarVisibilityContext"

export default function Header({home}){
    const [searchBarVisibility, toggleVisibility] = useContext(SearchBarVisibilityContext)

    if (home) {
        return(
            <header className="flex justify-between align-center">
                <h2>My Shop</h2>
                <button className="flex" onClick={toggleVisibility}><img src="/img/Search.png" alt="Logo loupe pour la recherche" /></button>
            </header>
        )
    } else {
        return(
            <header className="flex align-center">
                <Link to={"/"}><img className="arrow" src="/img/back.png" /></Link>
                <h2>My Shop</h2>
            </header>
        )
    }
}