const express = require('express');
      app     = express(),
      port    = port.env.PORT || 8000;

let cotacao = require('./cotacao/cotacaoRoutes');
cotacao(app);

app.listen(port, () => console.log(`App running on port ${port}`));

module.exports = app;