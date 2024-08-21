import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({product}){

    return(
        <Link className="product-card flex justify-between" to={"detail/" + product.id}>
            <div className='product-card-img'>
                <img src={product.image} alt="" />
            </div>
            <div className='product-card-descr flex justify-center'>
                <p>{product.title}</p>
                <p className='price-dark'>{product.price}$</p>
            </div>
        </Link>
    )
}