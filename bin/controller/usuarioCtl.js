const usuarioRep = require('../repository/usuarioRep');
const usuarioMdl = require('../middleware/usuarioMdl');

module.exports = (app) => {
    app.get("/usuario/", usuarioMdl.validateBody, (req, res, next) => {
        usuarioSrv.validar(req.params.nome)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.get("/usuario/:nome", usuarioMdl.validateBody, (req, res, next) => {
        usuarioSrv.validar(req.params.nome)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.post("/usuario/", usuarioMdl.validateBody, (req, res, next) => {
        usuarioRep.save(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.put("/usuario/", usuarioMdl.validateBody, (req, res, next) => {
        usuarioSrv.validar(req.query.nome)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.delete("/usuario/", usuarioMdl.validateBody, (req, res, next) => {
        usuarioSrv.validar(req.query.nome)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })
}