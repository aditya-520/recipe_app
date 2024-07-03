import React from 'react';
import './recipeitem.css';

export default function RecipeItem({ item }) {
    return (
        <div className="recipe-item">
            <div className="image-container">
                <img src={item?.image_url} alt="recipe item" className="image-block" />
            </div>
        </div>
    );
}
