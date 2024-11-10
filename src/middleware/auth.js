const jwt = require('jsonwebtoken');
const SECRET_KEY = 'desenv_framework_II';

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.sendStatus(401);
    }

    console.log('---- authorization', authHeader);

    const token = authHeader.split(' ')[1];

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            console.log('---- jwt.verify err', err);
            return res.sendStatus(403); //Ideal seria o uso de 401, se a verificação do JWT falha, é a autenticação não a autorização que terá falhado, o 403 é usado para quando o usuário já esta autenticado mas não tem permissão
        }
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;