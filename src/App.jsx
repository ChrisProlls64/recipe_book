import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AddRecipeForm from './components/AddRecipeForm'
import Counter from './components/Counter'
import Filters from './components/Filters'
import RecipeList from './components/RecipeList'
import OpengraphReactComponent from 'opengraph-react';

function App() {

  const [recipes, setRecipes] = useState([
    { id: 1, title: "Cookies peanut butter", url: 'https://deliacious.com/2019/04/cookies-beurre-cacahuetes-chocolat-vegan.html' },
    { id: 2, title: "Crumble aux pommes vegan", url: 'https://deliacious.com/2021/04/crumble-pommes-vegan.html' },
    { id: 3, title: "Biscuits demi lunes à la poudre de noisettes", url: 'https://deliacious.com/2023/12/lunes-a-la-noisette.html' },
    { id: 4, title: "Tofu à la tomate et aux algues", url: 'https://deliacious.com/2023/08/tofu-tomates-algues.html' }
  ])

  function onRemoveBtnHandler(recipeToDelete) {
    const newRecipes = recipes.filter(recipe => recipe.id !== recipeToDelete.id)
    setRecipes(newRecipes);

  }

  return (
    <>
      <h1>My recipe Book</h1>
      <Counter recipes={recipes} />
      <AddRecipeForm />
      <Filters />
      <RecipeList recipes={recipes} onRemoveBtn={onRemoveBtnHandler} />
    </>
  )
}

export default App
