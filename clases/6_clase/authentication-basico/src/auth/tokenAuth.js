
const SECRET_KEY = process.env.JWT_SECRET || 'claveSuperSecreta';
const validUser = process.env.JWT_USER || 'docente';
const validPass = process.env.JWT_PASS || 'claveSegura'


const generateToken = (req, res) => {

    const { usuario, clave } = req.body;

    if (usuario === validUser && clave === validPass) {
        const token = jwt.sign(
            {
                rol: 'admin',
                curso: 'Seguridad en APIs'
            },
            SECRET_KEY,
            { expiresIn: '1h' }
        );
        return res.json({ token });
    }

    res.status(401).json({ error: 'Credenciales inválidas' });
}



const validateToken = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }

    const token = authHeader.split(' ')[1]; // formato: "Bearer <token>"

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded; // guarda el payload del token para usar después
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido o expirado' });
    }
}
