// Imports
const express = require('express');
const router = express.Router();

// Path childs
const USERS = require('./usersRoutes.js');
const AUTHORIZATION = require('./authorizationRoutes.js');

// Middlewares
router.use('/users', USERS);
router.use('/authorization',AUTHORIZATION);

//  --------------------------------------------------------------------    //
// GET
router.get('/', (req, res) => {
    res.json({response: 'API HELP'});
});

module.exports = router;