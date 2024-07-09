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
                setRecipeDetailsData(data.data.recipe);
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
                <button className="favbutton">Save as Favourites</button>
                <div className="ingredients-section">
                    <span className="ingredients-title">Ingredients:</span>
                    <ul className="ingredients-list">
                        {recipeDetailsData?.ingredients.map((ingredient, index) => (
                            <li key={index} className="ingredient-item">
                                <span className="ingredient-quantity">
                                    {ingredient.quantity || ''}
                                </span>
                                <span className="ingredient-unit">
                                    {ingredient.unit || ''}
                                </span>
                                <span className="ingredient-description">
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
