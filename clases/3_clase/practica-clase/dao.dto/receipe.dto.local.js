// esta capa se encarga de como la data se transfiere es decir el in/out del sistema

import cryto from "crypto"


class RecipeDTO {
    constructor(name, ingredients, instructions) {
        if (!name || typeof name !== 'string') throw new Error('Invalid or missing recipe name.');
        if (!Array.isArray(ingredients)) throw new Error('Ingredients must be an array.');
        if (typeof instructions !== 'string') throw new Error('Instructions must be a string.');

        this.name = name.trim();
        this.ingredients = ingredients.map(i => i.trim());
        this.instructions = instructions.trim();
    }

    static fromEntity(recipe) {
        if (!recipe || typeof recipe !== 'object') {
            throw new Error('Invalid recipe entity.');
        }

        return new RecipeDTO(recipe.name, recipe.ingredients, recipe.instructions);
    }
}



// basicamente lo que hace es manejar los errores de esto siempre y cuando existan estos errores
// el objeto que tiene es validar de que no se pase ningun error
class CreateRecipeDTO {
    constructor(name, ingredients, instructions) {
        if (!name || typeof name !== 'string' || name.trim() === '') {
            throw new Error('Recipe name is required and must be a string.');
        }
        if (!Array.isArray(ingredients) || ingredients.length === 0) {
            throw new Error('Ingredients must be a non-empty array.');
        }
        if (!instructions || typeof instructions !== 'string' || instructions.trim() === '') {
            throw new Error('Instructions are required and must be a string.');
        }

        this.name = name.trim();
        this.ingredients = ingredients.map(i => i.trim());
        this.instructions = instructions.trim();
    }
}

class GetRecipeDTO {
    constructor(name) {
        if (!name || typeof name !== 'string' || name.trim() === '') {
            throw new Error('Invalid or missing recipe name.');
        }
        this.name = name.trim().toLocaleLowerCase();
    }
}

export { GetRecipeDTO, CreateRecipeDTO, RecipeDTO }