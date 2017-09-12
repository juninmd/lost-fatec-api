const usuarioRep = require('../repository/usuarioRep');

module.exports = (app) => {
    app.get("/usuario/", (req, res, next) => {
        usuarioRep.findAll()
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.get("/usuario/:ra", (req, res, next) => {
        usuarioRep.findById(req.params.ra)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.post("/usuario/", (req, res, next) => {
        usuarioRep.save(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.put("/usuario/", (req, res, next) => {
        usuarioRep.update(req.query.nome)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.delete("/usuario/", (req, res, next) => {
        usuarioRep.delete(req.query.ra)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })
}