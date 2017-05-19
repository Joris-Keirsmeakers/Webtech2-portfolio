var mongoose = require ('mongoose');
var messageSchema = mongoose.Schema({
  text: String
})

var message = mongoose.model('Classroom', messageSchema);
  module.exports = message
