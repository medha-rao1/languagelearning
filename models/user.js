// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  mobileNo: String,
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  aadhaar: String,
  cibilScore: Number,
  password: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
