//to decode token
const jwt = require('jsonwebtoken');


const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log(authHeader);

    const token = authHeader && authHeader.split(' ')[1];
    if(!token) {
        return res.status(401).json({
            success: false,
            message: 'Access denied no token provided, please log in to continue'
        });
    }

    //decode the token and verify
    try{
        const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(decodedTokenInfo);

        req.user = decodedTokenInfo;

        next();

    } catch(e) {
        return res.status(500).json({
            success: false,
            message: 'Access denied no token provided, please log in to continue'
        });
    }

}

module.exports = authMiddleware;
