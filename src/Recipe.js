import React from 'react';
import style from './recipe.module.css';
const Recipe = ({title,calories,image,ingredients,healthLabels}) => {
   
    return (
        <div className={style.recipe}>
            
            <h1 className={style.title}>{title}</h1>
            <img className={style.image} src= {image} alt="" />
            <section>
  <div className={style.list}>
    <h2>Health Labels</h2>
    <ul className={style.checklist}>
    {healthLabels.map(healthLabel => (
                  <li>{healthLabel}</li>  
                ))} 
    </ul>
  </div>
</section>
<div>
            <h2 className={style.cal}>Calories</h2> <span className={style.sp}>{calories}</span>
             </div>
             <div className={style.listtype1}>
             <h2 className={style.ing}>Ingredients</h2>
             <ol>
                {ingredients.map(ingredient => (
                  <li>{ingredient.text}</li>  
                ))} 
                </ol>
</div>

        
            {/* <p>Health Labels</p>
            <ol>
                {healthLabels.map(healthLabel => (
                  <li>{healthLabel}</li>  
                ))} 
                </ol> */}

        
           
        </div>
    )
}

export default Recipe;