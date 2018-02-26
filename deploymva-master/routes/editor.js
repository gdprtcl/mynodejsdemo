var express = require('express');
var mongoose = require('mongoose');
var models = require('../models');
var config = require('../editorConfig.json');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    models.Product.find(function (err, products) {
        if (err) return console.error(err);
        console.log(products);
        res.render('index', { products: products });
    })
});

router.get(/create/, function (req, res, next) {
    var item = getItem(req);
    res.render('edit', { item: item._doc });
});

router.post(/create/, function (req, res, next) {
    var item = getItem(req, req.body);

    console.log('Connected!!');
    item.save(function (ex) {
        if (ex) return console.log(ex);
        res.redirect('/');
    });
});

function getItem(req, seed) {
    var path = req.path.split('/')[1].toLowerCase();
    var className = config[path].className;
    return new models[className](seed);
}

module.exports = router;
