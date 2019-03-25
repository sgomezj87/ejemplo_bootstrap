const funciones = require('./funciones');
let menu = () => {
switch (opcion){
	case 'crear':
	funciones.crear (argv);	
	break;

	case 'promedio':
	funciones.promedio (argv.n);	
	break;
	
	case 'mostrar':
	funciones.mostrar();		
	break

	case 'mostrarMat':
	funciones.mostrarMat();	
	break;

	case 'mostrarProm':
	funciones.mostrarProm();		
	break;

	case 'actualizar':	
	funciones.actualizar(argv.nombre, argv.materia, argv.nota)
	break;

	case 'borrar':
	funciones.borrar(argv.nombre);	
	break;
	
	default:
	console.log('Comando no es reconocido');
}
}
