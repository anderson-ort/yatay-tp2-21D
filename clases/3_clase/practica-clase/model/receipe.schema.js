import crypto from "crypto"

class Receipe {
    constructor(
        { id, name, ingredients = [], instructions = "" }
    ) {
        this.id = id ?? crypto.randomUUID().toString()
        this.name = name
        this.ingredients = ingredients
        this.instructions = instructions
    }
}

export { Receipe }