  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var AuthorSchema = new Schema({
    name: String,
    alive: String,
    image: String
  });
var Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
