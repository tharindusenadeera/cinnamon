const { createUser, userLogin, getUserById, updateUserById, getUsers, deleteUserById, userSignup } = require('../user/controller');
const { checkToken } = require("../../auth/tokenValidation");
const router = require('express').Router();

//Users
router.post('/register', checkToken, createUser);
router.post('/login', userLogin);
router.post('/signup', userSignup);
router.get('/user/:id', checkToken, getUserById);
router.get('/user', checkToken, getUsers);
router.patch('/user/:id', checkToken, updateUserById);
router.delete('/user/:id', checkToken, deleteUserById);


module.exports = router;