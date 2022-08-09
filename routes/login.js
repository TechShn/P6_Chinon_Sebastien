const express = require('express');
const router = express.Router();

const loginCtrl = require('../controllers/login')



router.post('/', loginCtrl.createThing );

router.get('/', loginCtrl.findThing);



module.exports = router;