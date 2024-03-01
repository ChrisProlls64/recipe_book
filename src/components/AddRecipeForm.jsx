export default function AddRecipeForm(recipes) {
    return (
        <form>
            <select>
                <option>Catégorie :</option>
                <option>Entrée</option>
                <option>Plat</option>
                <option>Dessert</option>
                <option>Snacks</option>
                <option>Apéritif</option>
            </select>
            <input type="text" placeholder="Nom de la recette"></input>
            <input type="url" placeholder="Url du site"></input>
        </form>
    )
}




