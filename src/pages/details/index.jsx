import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import './details.css';

export default function Details() {
    const { id } = useParams();
    const { recipeDetailsData, setRecipeDetailsData } = useContext(GlobalContext);

    useEffect(() => {
        async function getRecipeDetails() {
            const response = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
            );
            const data = await response.json();

            console.log(data);
            if (data?.data) {
                setRecipeDetailsData(data?.data.recipe);
            }
        }

        getRecipeDetails();
    }, [id, setRecipeDetailsData]);

    console.log(recipeDetailsData, "recipeDetailsData");

    return (
        <div className="details-container">
            <div className="image-container">
                <img
                    src={recipeDetailsData?.image_url}
                    alt={recipeDetailsData?.title}
                    className="recipe-image"
                />
            </div>
            <div className="details-content">
                <span className="publisher">{recipeDetailsData?.publisher}</span>
                <h3 className="recipe-title">{recipeDetailsData?.title}</h3>
                <div>
                    <button className="favbutton">Save as Favourites</button>
                </div>
                <div>
                    <span className="ingredients">Ingredients:</span>
                    <ul className="abc">
                        {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
                            <li>
                                <span className="abcd1">
                                    {ingredient.quantity} {ingredient.unit}
                                </span>
                                <span className="abcd1">
                                    {ingredient.description}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
