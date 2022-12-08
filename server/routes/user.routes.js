const router = require('express').Router()
const { isAuthenticated } = require('../middleware/jwt.middleware.js');

router.get('/:userId', isAuthenticated, async (req, res, next) => {
  
})

module.exports = router