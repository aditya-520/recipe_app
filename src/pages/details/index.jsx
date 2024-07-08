import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../context";



export default function Details() {

    const { id } = useParams();
    const {
        recipeDetailsData,
        setRecipeDetailsData,
    } = useContext(GlobalContext);

    useEffect(() => {
        async function getRecipeDetails() {
            const response = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
            );
            const data = await response.json();

            console.log(data);
            if (data?.data) {
                setRecipeDetailsData(data?.data);
            }
        }

        getRecipeDetails();
    }, []);

    console.log(recipeDetailsData, "recipeDetailsData");

    return <div className="xyzz">
        <div className="xyzz2">
            <div className="xyzz3">
                <img
                    src={recipeDetailsData?.recipe?.image_url}
                    className="imgxyz"
                />
            </div>
        </div>
        <div className="xyzz4">
            <span className="text1">{recipeDetailsData?.recipe?.publisher} </span>
            <h3 classname="item-title">{recipeDetailsData?.recipe?.title}</h3>
        </div>
    </div>
}