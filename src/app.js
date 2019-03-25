//Requires
const express = require('express')
const app = express ()
const path = require('path')
const hbs = require ('hbs')
const bodyParser = require('body-parser')
require('./helpers/helpers')

//Paths
const dirPublic = path.join(__dirname, "../public")
const dirViews = path.join(__dirname, '../template/views')
const dirPartials = path.join(__dirname, '../template/partials')
const dirNode_modules = path.join(__dirname , '../node_modules')

//Static
app.use(express.static(dirPublic))
app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));


//BodyParser
app.use(bodyParser.urlencoded({ extended: false }));

//hbs
app.set('view engine', 'hbs')
app.set('views', dirViews)
hbs.registerPartials(dirPartials)

//Views
app.get('/', (req, res ) => {
	res.render('index', {
		titulo: 'Inicio'		
	})	
});

app.post('/calculos', (req, res ) => {
	res.render('calculos', {
		titulo: 'Calcular Promedio',		
		nombre: req.body.nombre,
		nota1: parseInt(req.body.nota1),
		nota2: parseInt(req.body.nota2),
		nota3: parseInt(req.body.nota3)
	})	
});

app.get('/listado', (req, res ) => {
	res.render('listado', {
		titulo: 'Listado de Estudiantes'		
	})	
});


app.get('*',(req,res)=> {
	res.render('error', {
		titulo: "Error 404"
	})
});


app.listen(3000, () => {
	console.log ('servidor en el puerto 3000')
});