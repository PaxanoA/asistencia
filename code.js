
let cantidad = prompt("cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
	alumnosTotales[i] = [prompt("Nombre del alumno " + (i++)), 0];

}

const tomarAsistencia = (nombre, p) =>{
	let presencia = prompt(nombre);
	if (presencia == "p" || "P"){
		alumnosTotales[p][1]; /* el error sale en esta linea de codigo, no llama a la posicion 1 */
	}
}
for (i = 0; i < 30; i++) {
	for (alumno in alumnosTotales) {
		tomarAsistencia(alumnosTotales[alumno][0]);
	}
}


for (alumno in alumnosTotales) {
	let resultado = `${alumnosTotales[alumno][0]}: </br>
	______Presentes: ${alumnosTotales[alumno][1]} </br>
	______Ausentes: ${30 - alumnosTotales[alumno][1]} </br>`
	if (30 - alumnosTotales[alumno][1] > 18) {
		resultado = "REPROBADO </br></br>"
	}else{
		resultado += "</br>"
	}document.write(resultado);
}
