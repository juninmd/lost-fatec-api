var Schema = require('mongoose').Schema

module.exports = db.model('usuario', new Schema(
  {
    name: { type: String, default: '', trim: true },
    ra: { type: String, default: '', trim: true },
    email: { type: String, default: '', trim: true },
    pass: { type: String, default: '', trim: true }
  }))
