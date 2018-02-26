var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var models = {};
var connectionString = process.env.CONNECTION_STRING;

mongoose.connect(connectionString);

var productSchema = new Schema({
  name: {type: String, default: ''},
  description: {type: String, default: ''}
});
models.Product = mongoose.model('Product', productSchema);

module.exports = models;