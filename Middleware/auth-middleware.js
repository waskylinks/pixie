//to decode token
const jwt = require('jsonwebtoken');


const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];
    if(!token) {
        return res.status(401).json({
            success: false,
            message: 'Access denied: Token missing. Please log in.'
        });
    }

    //decode the token and verify
    try{
        const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userInfo = decodedTokenInfo;

        next();

    } catch(err) {
        console.error('Token verification failed:', err.message);
        return res.status(500).json({
            success: false,
            message: 'Invalid or expired token. Please log in again.'
        });
    }

}

module.exports = authMiddleware;
