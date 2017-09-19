const categoria = require('../model/categoriaModel');

module.exports = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            categoria.find({}, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            })
        })
    },
    findById: (id) => {
        return new Promise((resolve, reject) => {
            categoria.find({ id: id }, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            })
        })
    },
    insert: (body) => {
        return new Promise((resolve, reject) => {
            categoria.create(body, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            })
        })
    },
    update: (body) => {
        return new Promise((resolve, reject) => {
            categoria.update(body, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            })
        })
    },
    delete: (id) => {
        return new Promise((resolve, reject) => {
            categoria.find({ id: id }, (err, body) => {
                if (body.length == 0) {
                    err = new Error('Não foi encontrado');
                }
                if (err) {
                    return reject(err);
                }
                categoria.remove(body[0], (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(result);
                })
            })

        })
    }
}