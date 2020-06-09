import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {
const APP_ID = "4dcd8070";
const APP_KEY = "9a3a0ca62b03cb5b80166054b2a617ef";

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState('chicken');

useEffect(() =>{
getRecipes();
}, [query]);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
}

const updateSearch = e => {
  setSearch(e.target.value);
  
};

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return (
    <div className= "App">
     
      <div id="clipped-title1">
   <h1>Search it! Make it.</h1>
    

</div>

      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search 🥗</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
        key={recipe.recipe.label} 
        title = {recipe.recipe.label}
        calories  = {recipe.recipe.calories}
        image = {recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        healthLabels={recipe.recipe.healthLabels}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
