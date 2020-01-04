const { createUser, userLogin } = require('../user/controller');
const router = require('express').Router();

router.post('/register', createUser);
router.post('/login', userLogin);

module.exports = router;