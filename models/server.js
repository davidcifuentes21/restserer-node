const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        //middlewares
        this.middlewares();

        //routes
        this.routes();
    }

    middlewares(){
        //cors
        this.app.use(cors());

        //parse body
        this.app.use(express.json())

        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usersPath, require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor en el puerto', this.port);
        });
    }
}

module.exports = Server;