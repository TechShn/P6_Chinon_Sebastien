// Permet de créer des routers séparer
const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user-controllers')


// Route user
router.post('/signup', userCtrl.signup );
router.post('/login', userCtrl.login );



module.exports = router;