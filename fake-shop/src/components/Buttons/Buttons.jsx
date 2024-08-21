import { useContext, useEffect } from 'react';
import './Buttons.css'

import { Link } from "react-router-dom";
import { QtyContext } from '../../context/QtyContext';
import { CartContext } from '../../context/CartContext';

export default function Buttons({addProduct, payment, removeArticle, plus, minus, label="Your Text", link=""}){
    const [qty, addQty, subtractQty, resetQty] = useContext(QtyContext)
    const [cart, addToCart, removeFromCart] = useContext(CartContext)

    if (addProduct){
        function handleAddClick(){
            addProduct.quantity = qty
            addToCart(addProduct)
            resetQty()
        }
        return(
            <button onClick={handleAddClick} className="btn button-primary"><img src="/img/Shopping-Cart-white.png" alt="shopping cart logo" />Add to cart</button>
        )
    } else if (payment){
        return(
            <Link className="btn button-primary" to={link}><img src="/img/Coins.png" alt="Money logo" />Payment</Link>
        )
    } else if (removeArticle){
        return(
            <button onClick={()=>{removeFromCart(removeArticle)}} className="btn button-remove"><img src="/img/Empty Trash.png" alt="trash bin logo" />Remove from cart</button>
        )
    } else if (plus) {
        return(
            <button onClick={addQty} className="button-plus-minus">+</button>
        )
    } else if (minus) {
        return(
            <button onClick={subtractQty} className="button-plus-minus">-</button>
        )
    } else {
        return(
            <Link className="btn button-primary" to={link}>{label}</Link>
        )
    }
}