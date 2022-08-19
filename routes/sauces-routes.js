const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces-controllers');
const multer = require("../middleware/multer-config");


// Routes pour les sauces
router.get("/", auth, saucesCtrl.getAllSauces);
router.post("/", auth, multer, saucesCtrl.createSauce);

module.exports = router;