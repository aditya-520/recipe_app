


export default function RecipeItem({item})
{
    return(
        <div className="xyz">
            <div>
                <img src = {item?.image_url} alt="recipe item" className="imageblock" />
            </div>
        </div>

    )
}