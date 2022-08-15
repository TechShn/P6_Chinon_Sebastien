const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces');


router.get('/', saucesCtrl.getAllSauces);

module.exports = router;