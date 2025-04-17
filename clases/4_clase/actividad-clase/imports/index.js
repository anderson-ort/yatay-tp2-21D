// const songs = require("./datastore/db.json")
// const { responseService } = require("./services/songService")
import { responseService } from "./services/songService.js"
import fs from "node:fs/promises"
import { userFetcher } from "./services/usersService.js"


const main = async () => {
    let songs = await fs.readFile("./datastore/db.json", { encoding: "utf8" })
    songs = JSON.parse(songs)

    // console.log(responseService(songs))
    const URL = "https://jsonplaceholder.typicode.com/users"
    console.log(await userFetcher(URL))

}


main()