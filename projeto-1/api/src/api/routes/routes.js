const router = require('express').Router();
const authController = require('../controllers/authController')

router.get('/', (req, res) => {
  res.status(200).json({message: 'Docker4Noobs'})
})

router.use('/auth', authController);

module.exports = router;