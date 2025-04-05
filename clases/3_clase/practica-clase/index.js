//generar un conector a un archivo json tratando de usar las mejores practicas 
// desacoplando responsabilidades

import { config } from "./config/local-storage.config.js";
import { CreateRecipeDTO } from "./dao.dto/receipe.dto.local.js";
import { ReceipeRepository } from "./repository/repository.receipe.js";


const receipeRepository = new ReceipeRepository(config)

async function fetchAllData(){
    
    console.log('All recipes:');
    const receipesResponse  = await receipeRepository.fetchAllData();

    console.log({
        status: 200,
        message: "All receipes in the database",
        payload: receipesResponse
    });
}



async function main() {

    try {

        // console.log("Agregando recetas a nuestro recetario");
        // const newReceta = new CreateRecipeDTO(
        //     "Dulce de Leche Argentino",
        //     ["1 litro de leche", "300g de azúcar", "1 cucharadita de bicarbonato de sodio", "1 cucharadita de esencia de vainilla"],
        //     `   1. En una olla grande, mezcla la leche, el azúcar y el bicarbonato de sodio.
        //     2. Cocina a fuego medio, revolviendo constantemente con una cuchara de madera.
        //     3. Cuando empiece a espesar y tomar color marrón, baja el fuego.
        //     4. Sigue revolviendo hasta obtener una textura cremosa.
        //     5. Retira del fuego y añade la esencia de vainilla.
        //     6. Deja enfriar y guarda en un frasco hermético`
        // )

        // const savedReceipe = await receipeRepository.saveReceipe(newReceta)

        // console.log({
        //     status: 200,
        //     message: "Receipe Created",
        //     payload: savedReceipe
        // });

        await fetchAllData()

    
    }

    catch (error) {
        console.error({
            status: 403,
            message: error.message,
            payload: {}
        });

    }
}



main()