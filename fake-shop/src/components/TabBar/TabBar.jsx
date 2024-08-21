import { useContext } from 'react'
import './TabBar.css'
import { Link, useLocation } from "react-router-dom"
import { CartContext } from '../../context/CartContext'

export default function TabBar(){
    const [cart] = useContext(CartContext)
    let location = useLocation()

    return(
        <div className="tab-bar flex justify-between align-center w100">
            <Link to={"/"}><img src="/img/Home.png"/>
                {location.pathname === "/" && (<div className='active'></div>)}
            </Link>
            <Link to={"/cart"}>
                {location.pathname === "/cart" && (<div className='active'></div>)}
                {cart.length>0 && (<div className='cart-qty flex align-center justify-center'>{cart.length}</div>)}
                <img src="/img/Shopping-Cart.png"/>
            </Link>
            <Link to={"/profil"}><img src="/img/Customer.png"/>
                {location.pathname === "/profil" && (<div className='active'></div>)}
            </Link>
            <Link to={"/settings"}><img src="/img/Settings.png"/>
                {location.pathname === "/settings" && (<div className='active'></div>)}
            </Link>
        </div>
    )
}