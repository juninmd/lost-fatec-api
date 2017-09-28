var Schema = require('mongoose').Schema

module.exports = db.model('categoria', new Schema(
  {
    descricao: { type: String, default: '', trim: true }
  }))
