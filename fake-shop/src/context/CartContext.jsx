import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    function addToCart(articleToAdd){
        if (!cart.find((article)=>article.id===articleToAdd.id)) {
            setCart([...cart,articleToAdd])
        }
    }

    function removeFromCart(articleId){
        let newCart = cart.filter((article)=>article.id!==articleId)
        setCart(newCart)
    }

    function updateCart(articleId, qty){
        const newCart = [...cart]
        newCart.map(article=>{
            if (article.id === articleId){
                article.quantity = qty
            }
            setCart(newCart)
        })
    }

    return(
        <CartContext.Provider value={[cart, addToCart, removeFromCart, updateCart]}>
            {children}
        </CartContext.Provider>
    )
}