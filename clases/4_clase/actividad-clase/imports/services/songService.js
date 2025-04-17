const calculateAge = yearInit => {
    let now = new Date()
    return now.getUTCFullYear() - yearInit;
}



const dataTransformer = song => ({
    song: song.name.toLowerCase(),
    authorName: song.author,
    band: song.band ?? "Unknown",
    releasedYearActive: calculateAge(song.releaseYear)
})




const responseService = songs => {
    try {
        let cleanSongs = songs.map(dataTransformer)
        const response = {
            status: 200,
            data: cleanSongs,
            message: "Success"
        }
        return JSON.stringify(response, null, 2)

    }
    catch (e) {
        return {
            status: 500,
            data: null,
            message: e.message
        }
    }
}


// module.exports = { responseService }

export { responseService }



