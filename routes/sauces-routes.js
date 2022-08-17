const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces-controllers');


router.get('/', saucesCtrl.getSauces);
router.post('/', saucesCtrl.createSauce);

module.exports = router;