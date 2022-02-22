const {sequelize,Zonas} = require('./models'); // llamado a los modelo de sequlize
async function cargar_tablas(){
    await sequelize.sync({force: true})// crear db a partir de los modelos
}
cargar_tablas();