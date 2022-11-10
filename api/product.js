const express = require('express')
const router = express.Router()
try {
  router.get('/', (req, res) => {
    // router code here
    res.json({
      status: 200,
      message: 'get product is succifully',
    })
  })
} catch (error) {
  console.error(error)
  res.status(500).send('Server error')
}

module.exports = router
