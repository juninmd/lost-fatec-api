const webconfig = require('../webconfig');
const mysql = require('jano-mysql')(webconfig.dataConfig.MYSQL);

module.exports = {
    inserir: (nome) => {
        return mysql.executeObject("INSERT INTO cliente SET ?", { NOME: nome });
    },
    inserirProc: (nome) => {
        return mysql.readProcedure("CLIENTES", [1]);
    }
}