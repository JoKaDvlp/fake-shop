import { useContext, useEffect, useState } from "react"
import Buttons from "../components/Buttons/Buttons"
import Header from "../components/Header/Header"
import Rating from "../components/Rating/Rating"
import TabBar from "../components/TabBar/TabBar"
import { useParams } from "react-router-dom"
import QtyBar from "../components/QtyBar/QtyBar"
import { CartContext } from "../context/CartContext"

export default function ProductPage(){
    let {productId} = useParams()
    const [article, setArticle] = useState({})
    const [cart, addToCart, removeFromCart] = useContext(CartContext)
    
    
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res=>res.json())
        .then(json=>{
            setArticle(json)
        })
    },[])
    
    function ButtonSwitch() {
        if (cart.some(articleInCart=>articleInCart.id === article.id)) {
            return <Buttons removeArticle={article.id}/>
        } else {
            return(
                <>
                    <div className="flex justify-between align-center">
                        <p><b>Quantity :</b></p>
                        <QtyBar/>
                    </div>
                    <Buttons addProduct={article}/>
                </>
            )
        }
    }
    
    return(
        <>
            <Header/>
            <div className="product flex justify-center">
                <div className="flex">
                    <img className="responsive-img" src={article.image} alt="" />
                </div>
                <div className="product-description">
                    <div className="flex justify-between align-center">
                        <h1>{article.title}</h1>
                        <p className="price">{article.price}$</p>
                    </div>
                    {article.rating && (<Rating rate={article.rating.rate} count={article.rating.count}/>)}
                    <p className="mb20">{article.description}</p>
                    <ButtonSwitch/>
                </div>
            </div>
            <TabBar/>
        </>
    )
}