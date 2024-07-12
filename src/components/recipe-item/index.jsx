import React from 'react';
import { Link } from 'react-router-dom';
import './recipeitem.css';

export default function RecipeItem({ item }) {
    return (
        <div className="recipe-item">
            <div className="image-container">
                <img src={item?.image_url} alt="recipe item" className="image-block" />
            </div>
            <div className="recipe-details">
                <span className="item-pub">{item?.publisher}</span>
                <h3 className="item-name">{item?.title}</h3>
                <Link to={`/recipe-item/${item?.id}`} className='recipe-button'>Recipe Details</Link>
            </div>
        </div>
    );
}
