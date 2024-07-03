import { useContext } from "react"
import { GlobalContext } from "../context"
import RecipeItem from "../components/recipe-item"



export default function Home() {

    const { recipeList, loading } = useContext(GlobalContext)

    if (loading) return <div>Loading... Please wait</div>

    return <div className="Rcpitem">
        {recipeList && recipeList.length > 0 ?
            recipeList.map(item => <RecipeItem item={item} />)
            : <div className="no-search">Nothing to show</div>}
    </div>
}
