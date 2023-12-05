// Imports
const express = require('express');
const perms = require('../middlewares/authorization.js');
const router = express.Router();

// functions routes
const USERS = require('./usersRoutes.js');
const REPORTES = require('./reportesRoutes.js');
const AUTHORIZATION = require('./authorizationRoutes.js');

router.get('/', (req, res) => {
    res.json({response: 'API HELP'});
})

router.get('/users',USERS.list);

router.post('/reportes/add',REPORTES.addReport)
router.delete('/reportes/remove',REPORTES.deleteReport)
router.get('/reportes/search',REPORTES.searchReport)
router.put('/reportes/edit',REPORTES.editReport)

router.get('/authorization',AUTHORIZATION.help)
router.post('/authorization/auth',perms.auth,AUTHORIZATION.auth)
router.post('/authorization/login',AUTHORIZATION.login)
router.post('/authorization/register',AUTHORIZATION.register)

module.exports = {
    router
}