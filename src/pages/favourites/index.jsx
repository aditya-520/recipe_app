import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";


export default function Favourites() {
    const { favouritesList } = useContext(GlobalContext);



    return (
        <div className="fav-list">
            {favouritesList && favouritesList.length > 0 ? (
                favouritesList.map((item) => <RecipeItem item={item} />)
            ) : (
                <div>
                    <p className="favdefault">Nothing is added to Favourites</p>
                    </div>
            )}
        </div>
    );
}