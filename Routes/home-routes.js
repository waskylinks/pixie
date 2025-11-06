const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/auth-middleware');


router.get('/welcome', authMiddleware, (req, res) => {
    res.json({
        message: 'Welcome to the home page'
    });
});

module.exports = router;