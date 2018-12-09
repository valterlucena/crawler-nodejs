'use strict';

module.exports = function (app) {
    var cotacao = require('./cotacaoController');

    app.route('/cotacao/:data')
        .get(cotacao.getCotacaoDia);

}