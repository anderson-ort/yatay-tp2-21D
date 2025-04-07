import { Router } from "express"
import fs from "fs/promises"
import path from "path";
import { fileURLToPath } from "url";

import multer from "multer";
import { warnSizeFile } from "../middleware/check-file.middleware.js";

const router = Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_DIR = path.join(__dirname, '..', 'storage');


/**CREACION DE ARCHIVOS EN ALGUNA CARPETA CREADA*/
// 1 uso de multer
// 2 uso de middleware emitWarning

const storage = multer.diskStorage(
    {
        destination: async (req, file, cb) => {
            try {
                const folder = req.params.folder;
                const targetPath = path.join(BASE_DIR, folder);
                await fs.access(targetPath); // lanza error si no existe
                cb(null, targetPath);
            } catch {
                cb(new Error('La carpeta no existe'));
            }
        },
        filename: (req, file, cb) => cb(null, file.originalname)
    }
)

const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } })




router.post(
    "/folders/:folder/upload",
    upload.single("file"),
    warnSizeFile,
    (req, res) => {
        try {
            if (!req.file) throw new Error("No hay archivo")

            const response = {
                message: '📤 Archivo subido con éxito',
                filename: req.file.originalname
            };

            if (req.warning) {
                response.warning = req.warning;
            }

            res.status(200).json(response);
        }
        catch (error) {
            next(error)
        }

    })


/**
 * CREACION DE CARPETAS
*/
router.post('/folders/:name', async (req, res, next) => {
    const folderPath = path.join(BASE_DIR, req.params.name);
    try {
        await fs.mkdir(folderPath, { recursive: false });
        res.status(201).json({ message: '📁 Carpeta creada' });
    } catch (err) {
        next(new Error('La carpeta ya existe o hubo un error'));
    }
});


/** MOSTRAR LAS CARPETAS Y ARCHIVOS DE FORMA RECURSIVA */
router.get('/list', async (req, res, next) => {
    try {
        const listRecursive = async (dir) => {
            const items = await fs.readdir(dir);
            const result = await Promise.all(
                items.map(async name => {
                    const fullPath = path.join(dir, name);
                    const stats = await fs.stat(fullPath);

                    if (stats.isDirectory()) {
                        return {
                            name,
                            type: 'folder',
                            children: await listRecursive(fullPath) // recursión aquí // no recomendado pero util
                        };
                    } else {
                        return {
                            name,
                            type: 'file'
                        };
                    }
                })
            );
            return result;
        };

        const result = await listRecursive(BASE_DIR);
        res.json(result);
    } catch (err) {
        next(err);
    }
});


/**BORRAR ALGUN ELEMENTO*/
router.delete('/:type/:name', async (req, res, next) => {
    const { type, name } = req.params;
    const target = path.join(BASE_DIR, name);
    try {
        if (type === 'folder') {
            await fs.rm(target, { recursive: true, force: true });
            res.json({ message: '🗑️ Carpeta eliminada' });
        } else if (type === 'file') {
            await fs.unlink(target);
            res.json({ message: '🗑️ Archivo eliminado' });
        } else {
            throw new Error('Tipo inválido');
        }
    } catch (err) {
        next(err);
    }
});

export { router };