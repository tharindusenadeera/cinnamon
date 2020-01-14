const { checkToken } = require("../../auth/tokenValidation");
const productRoutes = require('express').Router();
const { getAllProducts, getProductById } = require('../product/controller');

