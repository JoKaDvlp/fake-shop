import Header from "../components/Header/Header";
import TabBar from "../components/TabBar/TabBar";
import Buttons from "../components/Buttons/Buttons";
import CategoryList from "../components/CategoriesList/CategoriesList";
import ProductList from "../components/ProductList/ProductList";
import { SearchBarVisibilityProvider } from "../context/SearchBarVisibilityContext";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Root() {
    return(
        <div className="home">
            <SearchBarVisibilityProvider>
            <Header home/>
            <div className="hero">
                <h2>Fall 2024 collection</h2>
                <h1>Discover the new ready-to-wear collections for men and women.</h1>
                <Buttons primary label="See what's new"/>
            </div>
            <CategoryList/>
            <SearchBar/>
            </SearchBarVisibilityProvider>
            <ProductList/>
            <TabBar/>
        </div>
    )
}