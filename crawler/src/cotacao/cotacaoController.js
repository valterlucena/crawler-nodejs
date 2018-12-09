'use strict';

const request = require('request'),
      cheerio = require('cheerio'),
      url = 'https://www.neocambio.io/cotacao/euro/';

exports.getCotacaoDia = function(req, res) {
    var data = req.params.data;
    request(url + data, function (error, response, html) {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
            let cotacao = $('h2', '.currency__wrapper').text().split("R$ ")[1];
            res.json({
                date: data,
                cotacao: cotacao
            });
        }
    });
}