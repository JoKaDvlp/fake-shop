import { useContext, useEffect } from 'react'
import './SearchBar.css'
import { SearchBarVisibilityContext } from '../../context/SearchBarVisibilityContext'
import { ArticlesContext } from '../../context/ArticlesContext'

export default function SearchBar(){
    const [searchBarVisibility, toggleVisibility] = useContext(SearchBarVisibilityContext)
    const {searchByKeyword} = useContext(ArticlesContext)


    function handleSubmit(e){
        e.preventDefault()
        let myform = document.getElementById("myform")
        let formData = new FormData(myform)
        searchByKeyword(formData.get("search").toLowerCase())
    }


    return(
        <div className={`${searchBarVisibility} search-bar`}>
            <form id='myform' onSubmit={handleSubmit} className='flex'>
                <button type='submit'><img src="/img/Search.png" alt="logo recherche" /></button>
                <input type="text" name='search'/>
                <img onClick={toggleVisibility} src="/img/Close.png" alt="" />
            </form>
        </div>
    )
}