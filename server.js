//Install express server
const express = require('express');
const path = require('path');
const {sequelize,Zonas,Palmera} = require('./models'); // llamado a los modelo de sequlize
//async function cargar_tablas(){
//    await sequelize.sync({force: true})// crear db a partir de los modelos
//}
//cargar_tablas();

const app = express();
app.use(express.json() )

// Serve only the static files form the dist directory
app.use(express.static('./dist/ciat_palmera_frontend'));
//rutas de manejo de la db
app.post('/zonas', async(req, res)=> {

    console.log("entro aqui");
    console.log(req.body);
    const{numero,area } = req.body
    try{
        
        const zona = await Zonas.create({numero,area})
        console.log("valores de la zona", zona)
        return res.json(zona)
    } catch(err){
        console.log(err)
        return res.status(500).json(err)

    }
})
//toda la zonas
app.get('/zonas', async(req,res)=>{

    try{
        const zona = await Zonas.findAll()
        return  res.json(zona)  
    }
    catch(err){
        console.log(err)
        return req.status(500).json({error: 'something went wrong'});

    }
})
//buscar una zona en especifico
app.get('/zonas/:numero', async(req,res)=>{

    const numero = req.params.numero
    try{
        const zona = await Zonas.findOne({

            where: {numero}
        })
        return  res.json(zona)  
    }
    catch(err){
        console.log(err)
        return req.status(500).json({error: 'something went wrong'});

    }
})


app.post('/palmera', async(req,res)=>{
    //const{znumero, tipo, enfermo} = req.tipo;
    const tipo = req.body.tipo;
    const enfermo = req.body.enfermo;
    const znumero = req.body.numero;
    try{
     
      const zona = await Zonas.findOne({where: {numero: znumero}}); //buscar una zona en especifica

      const palmera = await Palmera.create({tipo, enfermo ,zonaID: zona.id});  // crear la palmera
      return res.json(palmera);  //retornar la palmera
    }
    catch(err){

        console.log(err)
        return res.status(500).json(err);
    }

});

app.get('/palmera', async(req,res)=>{
      
    try{

     const palmeras = await Palmera.findAll({order: ['zonaID'], include : [{model : Zonas, as: 'zonas'}]}); 
      
      return res.json(palmeras);  //retornar el post
    }
    catch(err){

        console.log('Se pifio en la funcion de mostrar '.red);
        console.log(err)
        return res.status(500).json(err);
    }

});



app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/ciat_palmera_frontend/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, async() =>{
    
    await sequelize.authenticate()
});