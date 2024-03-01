import { Recipe } from './recipe.jsx';

export class RecipeManager {
    static async list() {
        const response = await fetch("http://localhost:3000/recipes/");
        const data = await response.json();
        return data.map(obj => new Note(obj.id, obj.title, obj.url));
    }

    static async create(recipe)  {
        console.log('create for recipe: ', recipe);
        const response = await fetch('http://localhost:3000/recipes/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(recipe)
        });
        const data = await response.json();
        return data;
    }

    static async remove(id) {
        const response = await fetch('http://localhost:3000/recipes/' + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }, 
        });


    }
}


