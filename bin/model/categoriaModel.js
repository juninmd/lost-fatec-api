var Schema = require('mongoose').Schema

module.exports = db.model('categoria', new Schema(
  {
    name: { type: String, default: '', trim: true }
  }))
