const express = require('express');

/** 
 * Separar a lógica do express da lógica do servidor
 * para os testes não precisarem alocar porta
 */
class AppController {

    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());

    }

    routes() {
        this.express.use(require('./routes'));
    }
}

module.exports = new AppController().express;