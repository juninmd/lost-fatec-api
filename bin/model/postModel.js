var Schema = require('mongoose').Schema

module.exports = db.model('post', new Schema(
	{
		autor: { type: String, default: '', trim: true },
		horario: { type: String, default: '', trim: true },
		nome: { type: String, default: '', trim: true },
		status: { type: String, default: '', trim: true },
		categoria: { type: String, default: '', trim: true }
	}))
