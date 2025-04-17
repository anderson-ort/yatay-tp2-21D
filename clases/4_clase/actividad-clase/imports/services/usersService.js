const userFetcher = async (url) => {
    const users = await fetch(url, {})
    const cleanUsers =  await users.json()
    return cleanUsers
}


export { userFetcher }