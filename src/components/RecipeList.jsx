import OpengraphReactComponent from 'opengraph-react';
//je passe en paramètre de NoteList entre accolades le nom de la clé notes(key)
export default function RecipeList({ recipes, onRemoveBtn }) {


    const listRecipes = recipes.map((recipe, index) =>
        <li key={index}>{recipe.title} {recipe.url}
            &nbsp;<button onClick={(event) => onRemoveBtn(recipe)}>X</button>
        </li>
    );

    const listPreview = recipes.map((recipe) =>
        <li key={recipe.id}>
            <h4>{recipe.title}</h4>
            &nbsp;<button onClick={(event) => onRemoveBtn(recipe)}>Supprimer la recette de ma liste</button>
            <OpengraphReactComponent
                site={recipe.url}
                appId={'b5af2217-6fe5-48c7-95e9-79b4c27dffe9'}
                loader={<div>Loading...</div>}
                size={'small'}
            />

        </li>
    );

    return (
        <>
            <p>
                Liste des recettes enregistrées
            </p>

            {/* <ul>
                {listRecipes}
            </ul> */}

            <ul>
                {listPreview}
            </ul>

        </>
    )
}

