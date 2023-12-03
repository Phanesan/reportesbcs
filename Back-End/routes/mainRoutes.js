// Imports
const express = require('express');
const router = express.Router();

// Path childs
const USERS = require('./usersRoutes');

// Middlewares
router.use('/users', USERS)

//  --------------------------------------------------------------------    //
// GET
router.get('/', (req, res) => {
    res.json({response: 'API HELP'});
});

module.exports = router;