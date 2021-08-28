const express = require('express')
const router = express.Router()

const Constructor = require("./code/cumsa-constructor.js")

// Add your routes here - above the module.exports line

router.get('/', Constructor.constructMain)
router.get('/supp', Constructor.constructSupp)
router.get('/login', Constructor.constructLogin)

module.exports = router
