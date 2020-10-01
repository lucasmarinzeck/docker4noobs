const router = require('express').Router();
require('dotenv').config({
  path: process.env.NODE_ENV === 'DEV' ? './.env.dev' : './.env',
});




router.get('/register', (req, res) => {
  try {
    const { user } = req.body;
    if(!user) {
      res.status(400).send({message: 'No user provided'})
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;