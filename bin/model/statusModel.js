var Schema = require('mongoose').Schema

module.exports = db.model('status', new Schema(
  {
    nome: { type: String, default: '', trim: true }
  }))
