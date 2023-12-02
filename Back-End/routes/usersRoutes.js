// Imports
const express = require('express');
const router = express.Router();

//  ----------------------------------------------------------------------  //
// GET
router.get('/', (req, res) => {
    res.send("USER LIST")
});

// POST
router.use(express.json());

module.exports = router;