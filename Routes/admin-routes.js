const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/auth-middleware');
const adminMiddleware = require('../Middleware/admin-middleware');



router.get('/welcome', authMiddleware, adminMiddleware, (req, res) => {
    res.json({
        message: 'Welcome to the admin page'
    });
});

module.exports = router;
