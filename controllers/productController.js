const AppError = require('../utils/appError');
const Product = require('./../models/productModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getAllProducts = factory.getAll(Product);

exports.getProduct = factory.getOne(Product, { path: 'reviews' });

exports.createProduct = factory.createOne(Product);

exports.updateProduct = factory.updateOne(Product);

exports.deleteProduct = factory.deleteOne(Product);
