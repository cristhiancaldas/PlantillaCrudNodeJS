const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controllers');

router.route('/')
    .get(userController.lstIndex);

router.route('/addUser')
    .post(userController.addUser);

router.route('/delete/:id')
    .get(userController.deleteUser);

router.route('/userById/:id')
    .get(userController.userByid);

router.route('/updateUser/:id')
    .post(userController.updateUser);

module.exports = router;