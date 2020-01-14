const { checkToken } = require("../../auth/tokenValidation");
const productRoutes = require('express').Router();
const { getProducts, getProduct } = require('../product/controller');