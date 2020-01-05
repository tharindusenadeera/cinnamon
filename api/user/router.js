const { createUser, userLogin, getUserById, updateUserById, getUsers, deleteUserById } = require('../user/controller');
const { checkToken } = require("../../auth/tokenValidation");
const router = require('express').Router();

router.post('/register', checkToken, createUser);
router.post('/login', userLogin);
router.get('/user/:id', checkToken, getUserById);
router.get('/user', checkToken, getUsers);
router.patch('/user/:id', checkToken, updateUserById);
router.delete('/user/:id', checkToken, deleteUserById);

module.exports = router;