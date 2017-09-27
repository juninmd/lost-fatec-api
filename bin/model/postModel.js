var Schema = require('mongoose').Schema

module.exports = db.model('post', new Schema(
	{
		autor: { type: String, default: '', trim: true },
		horario: { type: Date, default: '', trim: true },
		descricao: { type: String, default: '', trim: true },
		status: { type: Number, default: '', trim: true }
	}))
