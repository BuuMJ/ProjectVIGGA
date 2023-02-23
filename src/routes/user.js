const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');
const { checkLogin, checkStaff, checkCoordinator, checkManager, checkAdmin } = require('../ulti/authonize')


router.get('/', userController.index)

module.exports = router;