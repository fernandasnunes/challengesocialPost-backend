var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    name: String,
    age: String,
    email: String
  
})
module.exports = mongoose.model('user', userSchema)