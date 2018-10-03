var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Invoice = require('../models/Invoice.js');

/* GET ALL INVOICES */
router.get('/', function(req, res, next) {
  Invoice.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE INVOICE BY ID */
router.get('/:id', function(req, res, next) {
  Invoice.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE INVOICES */
router.post('/', function(req, res, next) {
  Invoice.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE INVOICES */
router.put('/:id', function(req, res, next) {
  Invoice.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE INVOICES */
router.delete('/:id', function(req, res, next) {
  Invoice.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
