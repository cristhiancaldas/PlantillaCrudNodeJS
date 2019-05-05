const express = require('express');
const router = express.Router();

const userController=require('../controllers/user.controllers');

router.route('/')
.get(userController.lstIndex);

module.exports=router;