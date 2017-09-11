var Schema = require('mongoose').Schema

module.exports = db.model('usuario', new Schema(
  {
    name: { type: String, default: '', trim: true }
  }))
