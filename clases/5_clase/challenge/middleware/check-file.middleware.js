import fs from "fs/promises"


const warnSizeFile = async (req, res, next) => {
    try {
        const fileSizeMax = 1
        const mbSize = 1024
        if (!req.file) return next();
        const stats = await fs.stat(req.file.path)
        const sizeMb = stats.size / (mbSize * mbSize)

        if (sizeMb > fileSizeMax) {
            req.warning = `⚠️ El archivo "${req.file.originalname}" pesa más de 1MB (${sizeMb.toFixed(2)}MB).`;

        }
        next()
    }
    catch (error) {
        next(error)
    }
}


export { warnSizeFile }