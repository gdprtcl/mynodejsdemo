// var express = require('express');
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var playerSchema = new Schema({
//   name: {type: String, default: ''},
//   position: {type: String, default: ''}
// });

// var Player = mongoose.model('Player', playerSchema);

// var router = express.Router();

// /* GET home page. */
// router.get('/', function (req, res, next) {
//     res.render('owners/index', { title: 'Owners' });
// });

// router.get('/create', function (req, res, next) {
//     res.render('edit', {item: new Player()._doc});
// });

// router.post('/create', function(req, res, next) {
//     var player = new Player(req.body);

//     mongoose.connect('mongodb://localhost/test');
//     var db = mongoose.connection;
//     db.on('error', console.error.bind(console, 'connection error:'));
//     db.once('open', function() {
//         console.log('Connected!!');
//         player.save(function(ex) {
//             if(ex) console.log(ex);
//             else console.log('saved');
//         });
//         res.render('index', {title: 'Saved!!'});
//     });
// });

// module.exports = router;
