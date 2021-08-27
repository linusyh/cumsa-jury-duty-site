const express = require('express')
const router = express.Router()

const HomepageConstructor = require("./assets/javascripts/homepageConstructor.js")

// Add your routes here - above the module.exports line

router.get('/', HomepageConstructor.construct)

module.exports = router
