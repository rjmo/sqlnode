const Sequelize = require('sequelize');
const FilmModel = require('./models/film');


 const sequelize = new Sequelize('sqlnode', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});


const Film = FilmModel(sequelize, Sequelize);

sequelize.sync({force: false})
.then(() => {
    console.log('Sincronizado');
});

module.exports = {
    Film
}