const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces-controllers');
const multer = require("../middleware/multer-config");


// Routes pour les sauces
router.get("/", auth, saucesCtrl.getAllSauces);
router.get("/:id", auth, saucesCtrl.getOneSauce);
router.post("/", auth, multer, saucesCtrl.createSauce);
router.put("/:id", auth, multer, saucesCtrl.modifySauce);
router.delete("/id", auth, saucesCtrl.deleteSauce);
router.post("/:id/like", auth, multer, saucesCtrl.likeSauce);


module.exports = router;