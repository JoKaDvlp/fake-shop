import { createContext, useEffect, useState } from "react";

export const ArticlesContext = createContext(
    {
        articles : [],
        articlesToDisplay: [],
        searchByCategory : ()=>{},
        searchByKeyword : ()=>{}
    }
)

export function ArticlesProvider({children}){
    const [articles, setArticles] = useState([])
    const [articlesToDisplay, setArticlesToDisplay] = useState([])
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then(res=>res.json())
        .then(json=>{
            setArticles(json)
            setArticlesToDisplay(json)
        })
    },[])
    
    function filterByCategory(category){
        if (category === "all") {
            setArticlesToDisplay(articles)
        } else {
            setArticlesToDisplay(articles.filter((article)=>article.category === category))
        }
    }

    function filterByKeyword(keyword){
        setArticlesToDisplay(articles.filter((article)=>article.category.toLowerCase().includes(keyword) || article.title.toLowerCase().includes(keyword) || article.description.toLowerCase().includes(keyword)))
    }


    return(
        <ArticlesContext.Provider value={{articles : articles, articlesToDisplay : articlesToDisplay, searchByCategory : filterByCategory, searchByKeyword : filterByKeyword}}>
            {children}
        </ArticlesContext.Provider>
    )
}