import React from 'react';
import './recipeitem.css';
import { Link } from 'react-router-dom';

export default function RecipeItem({ item }) {
    return (
        <div className="recipe-item">
            <div className="image-container">
                <img src={item?.image_url} alt="recipe item" className="image-block" />
            </div>
            <div>
                <span classname="item-pub">{item?.publisher}</span>
                <h3 classname="item-name">{item?.title}</h3>
                <Link to={`/recipe-item/${item?.id}`} className='abcd'>Recipe Details</Link>
            </div>
        </div>
    );
}
