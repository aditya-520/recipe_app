import { useContext } from "react";
import { GlobalContext } from "../context";
import RecipeItem from "../components/recipe-item";
import './home.css';

export default function Home() {
    const { recipeList, loading } = useContext(GlobalContext);

    if (loading) return <div>Loading... Please wait</div>;

    return (
        <div className="recipe-list">
            {recipeList && recipeList.length > 0 ? (
                recipeList.map((item, index) => <RecipeItem key={index} item={item} />)
            ) : (
                <div className="no-search">Nothing to show</div>
            )}
        </div>
    );
}
