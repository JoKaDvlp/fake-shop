import { createContext, useState } from "react";

export const SearchBarVisibilityContext = createContext([
    "hidden",
    () => {}
])

export function SearchBarVisibilityProvider({children}){
    const [searchBarVisibility, setSearchBarVisibility] = useState("hidden")
    function toggleVisibility(){
        if (searchBarVisibility == "hidden") {
            setSearchBarVisibility("")
        } else {
            setSearchBarVisibility("hidden")
        }
    }
    return(
        <SearchBarVisibilityContext.Provider value={[searchBarVisibility, toggleVisibility]}>
            {children}
        </SearchBarVisibilityContext.Provider>
    )
}