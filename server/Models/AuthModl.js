const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AdminSchema = new Schema({
  UserName: {
    type: String,
  },
  Password: {
    type: String,
  },
  role: {
    type: mongoose.Types.ObjectId,
    ref: "Role"  // refernse table 
  }
});
AdminSchema.methods.generateAuthTokenAndSaveUser = function () {
  const token = jwt.sign(
    { _id: this._id.toString() },
    process.env.TOKEN_KEY,
    {
      expiresIn: "2h",
    }
  );

  return token

}
const User = mongoose.model('admin', AdminSchema)

module.exports = User