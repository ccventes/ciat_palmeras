//Install express server
const express = require('express');
const path = require('path');
const {sequelize,Zonas} = require('./models');
async function cargar_tablas(){
    await sequelize.sync({force: true})// crear db a partir de los modelos
}
//cargar_tablas();
const app = express();
app.use(express.json() )

// Serve only the static files form the dist directory
app.use(express.static('./dist/ciat_palmera_frontend'));
//rutas de manejo de la db
app.post('/zonas', async(req, res)=> {

    console.log("entro aqui");
    console.log(req.body);
    const{numero,eHorizontal,eVertical } = req.body
    try{
        
        const zona = await Zonas.create({numero,eHorizontal,eVertical})
        console.log("valores de la zona", zona)
        return res.json(zona)
    } catch(err){
        console.log(err)
        return res.status(500).json(err)

    }
})


app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/ciat_palmera_frontend/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, async() =>{
    
    await sequelize.sync({force: true})
});