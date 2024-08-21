import { useContext, useEffect, useState } from 'react'
import './CategoriesList.css'
import { ArticlesContext } from '../../context/ArticlesContext'

export default function CategoryList(){

    const [listCategories, setListCategories] = useState([])

    const {searchByCategory} = useContext(ArticlesContext)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>
                setListCategories(json)
            )
    },[])

    return(
        <ul className="category-list flex">
            <li onClick={()=>{searchByCategory("all")}} className='btn-category'>All</li>
            {listCategories.map(category=>{
                return <li onClick={()=>{searchByCategory(category)}} className="btn-category" key={category}>{category}</li>
            })}
        </ul>
    )
}