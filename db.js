const Sequelize = require('sequelize')

const FilmModel = require('./models/films')
const UserModel = require('./models/users')

const sequelize = new Sequelize('LCYfEKvEa5', 'LCYfEKvEa5', '366LQL396G',
    {
        host: 'remotemysql.com',
        dialect: 'mysql' //acalracion de con que base de datos se esta trabajando
    }
)

const Film = FilmModel(sequelize, Sequelize)
const User = UserModel(sequelize, Sequelize)

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas')
    })

module.exports = {
    Film,
    User
}