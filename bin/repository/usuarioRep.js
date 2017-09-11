const usuario = require('../model/usuarioModel');

module.exports = {
    save: () => {
        return new Promise((resolve, reject) => {
            usuario.create({ name: 'fluffy' }, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            })
        })

    }
}
