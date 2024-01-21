const jwt = require('jsonwebtoken');

const secretKey = 'secret-key';

function verifyToken(req, res, next){
    const token = req.header('Authorization');

    if(!token) 
    return res.status(401).send('Access Denied');
}

    jwt.verify(token, secretKey, (err, decoded) => {
        if(err) return res.status(403).send('Invalid Token');
        req.user = decoded;
        next();
    });


function generateToken(userId) {
    return jwt.sign({ id: userId }, secretKey, { expiresIn: '1n'});
}

module.exports = { verifyToken, generateToken };