const config = require('../config/database');
const Sequelize = require('sequelize');
const con = new Sequelize(config); 


const usuarioController = {

    registro: (req, res, next) => {

        let {name, email, username, password} = req.params;

        con.query('INSERT INTO users (:name, :email, :username, :password)',
        {
            replacements: {name, email, username, password},
            type: Sequelize.QueryTypes.INSERT,
            //timestamps: true => Tabela Já Possui TimeStamps
        }).then(
            (resultado) => {
            res.render('auth/login', {email: resultado.email})
        }).catch(
            (error) => { console.log(error) }
        )
    }
}

module.exports = usuarioController;