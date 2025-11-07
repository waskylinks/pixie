const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/auth-middleware');


router.get('/welcome', authMiddleware, (req, res) => {

    //pass user info to frontend
    const {username, userId, role} = req.userInfo;

    res.json({
        success: true,
        message: 'Welcome to the home page',
        user: {
            _id: userId,
            username,
            role,
        }
            
    });
});

module.exports = router;