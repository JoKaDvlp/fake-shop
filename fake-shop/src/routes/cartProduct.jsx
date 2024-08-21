import { useContext } from "react"
import Buttons from "../components/Buttons/Buttons"
import Header from "../components/Header/Header"
import TabBar from "../components/TabBar/TabBar"
import { CartContext } from "../context/CartContext"

export default function CartProduct(){
    const [cart, addToCart, removeFromCart, updateCart] = useContext(CartContext)

    const total = cart.reduce((total, article)=>total + article.price * article.quantity, 0)

    function handleAddClick(articleId, articleQty){
        updateCart(articleId, articleQty+1)
        console.log(cart);
    }

    function handleSubtractClick(articleId, articleQty){
        updateCart(articleId, articleQty-1)
        console.log(cart);
    }


    return(
        <div className="cart">
            <Header/>
            <div className="cart-content">
                {cart.map(article=>{
                    return(
                        <div key={article.id} className="flex justify-between article-cart-card">
                            <div className="flex">
                                <img className="responsive-img" src={article.image} alt="" />
                            </div>
                            <div className="flex flex-column justify-between">
                                <h2>{article.title}</h2>
                                <div className="flex justify-between align-center">
                                    <div className="qty flex justify-between align-center">
                                        <button onClick={()=>{handleSubtractClick(article.id, article.quantity)}}>-</button>
                                        <p>{article.quantity}</p>
                                        <button onClick={()=>{handleAddClick(article.id, article.quantity)}}>+</button>
                                    </div>
                                    <p>{article.price}$ /unit</p>
                                    <p className="price-dark">{article.price * article.quantity}$</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="cart-summary">
                <div className="flex justify-between mb20">
                    <p><b>Total :</b></p>
                    <p>{cart.length} articles</p>
                    <p>{total} $</p>
                </div>
                <p className="mb20"><em>Transport is free ! You will receive tour products under 4 days</em></p>
                <div className="flex justify-between align-center">
                    <div className="flex">
                        <img src="/img/Visa.png" alt="" />
                        <img src="/img/MasterCard.png" alt="" />
                        <img src="/img/PayPal.png" alt="" />
                    </div>
                    <Buttons payment/>
                </div>
            </div>
            <TabBar/>
        </div>
    )
}