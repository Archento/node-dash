const express = require('express')
const router = express.Router()

/* location '/' */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

module.exports = router
