import './ProductList.css'

import { useContext } from "react";
import { ArticlesContext } from "../../context/ArticlesContext";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductList(){
    const {articlesToDisplay} = useContext(ArticlesContext)
    
    return(
        <div className="product-list flex justify-between">
            {articlesToDisplay.map(product=>{
                return <ProductCard key={product.id} product={product}/>
            })
            }
        </div>
    )
}