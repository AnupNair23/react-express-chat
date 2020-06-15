const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
    max: 100,
  },
  emailId: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Exporting the model
module.exports = mongoose.model('Users', UserSchema);
