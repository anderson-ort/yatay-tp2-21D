// maneja la logica de la creacion con la "persistence"

import { config } from "../config/local-storage.config.js"
import { readData, writeData } from "../dao.dto/receipe.dao.local.js"
import { CreateRecipeDTO, GetRecipeDTO, RecipeDTO } from "../dao.dto/receipe.dto.local.js"
import { Receipe } from "../model/receipe.schema.js"

class ReceipeRepository {

    constructor(config) {
        this.config = config
    }

    async getReceipeByName(name) {
        const receipeName = new GetRecipeDTOetRecipeDTO(name)

        const receipes = await readData(this.config)
        const receipe = receipes.find(
            receipe => receipe.name === receipeName.name
        )

        return receipe ? RecipeDTO.fromEntity(
            new Receipe(receipe)
        ) : null
    }

    async fetchAllData() {
        const receipes = await readData(this.config);
        const curatedReceipes = receipes
            .map(recipe => {
                try {
                    return RecipeDTO.fromEntity(recipe);
                } catch {
                    return null;
                }
            })
            .filter(Boolean);

        return curatedReceipes;
    }



    async saveReceipe(createReceipeDTO) {

        if (!createReceipeDTO instanceof CreateRecipeDTO) {
            throw new Error("No es valido este objeto")
        }


        const receipes = await readData(this.config)
        const newReceipe = new Receipe(createReceipeDTO)

        await writeData(this.config, receipes)

        return RecipeDTO.fromEntity(newReceipe)
    }

}


export { ReceipeRepository }
