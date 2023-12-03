// Imports
const express = require('express');
const router = express.Router();

//  ----------------------------------------------------------------------  //
// GET
router.get('/', (req, res) => {
    res.json({});
});

// POST
router.use(express.json);
router.use(express.urlencoded({extended:true}));

module.exports = router;