//DOM
// Creamos las constantes de los botones y a los contenedores
const btn_agregar = document.getElementById('btn_agregar');
const btn_reporte = document.getElementById('btn_reporte');
const txt_tabla = document.getElementById('txt_tabla');
const txt_alerta = document.getElementById('txt_alerta');
const txt_reporte = document.getElementById('txt_reporte');

let estudiantes = [];
//el evento click para el boton agregar 
btn_agregar.addEventListener('click', function(event){
    
//Capturamos los datos
    let nombre = document.getElementById('txt_nombre').value;
    let edad = document.getElementById('txt_edad').value;
    let nota = parseFloat(document.getElementById('txt_nota').value);
//limpiamos los mesajes anteriores
    txt_alerta.innerHTML = '';
    txt_reporte.innerHTML = '';
//Validaciones




//Ciclo WHILE




//Ciclo FOR
// Calcular estadisticas con FOR
function calcularEstadisticas(){
    let suma = 0;
    let aprobados = 0;
    let reprobados = 0;

    for(let i = 0; i < estudiantes.length; i++){
        suma += estudiantes[i].nota;

        if(estudiantes[i].nota >= 14){
            aprobados++;
        } else {
            reprobados++;
        }
    }

    let promedio = estudiantes.length > 0 ? (suma / estudiantes.length).toFixed(2) : 0;

    document.getElementById('txt_total').innerHTML = estudiantes.length;
    document.getElementById('txt_promedio').innerHTML = promedio;
    document.getElementById('txt_aprobados').innerHTML = aprobados;
    document.getElementById('txt_reprobados').innerHTML = reprobados;
}


// Generar reporte con DO...WHILE
btn_reporte.addEventListener('click', function(event){
    
    if(estudiantes.length === 0){
        txt_alerta.innerHTML = '<div class="alert alert-info">No hay estudiantes registrados</div>';
        return;
    }

    let suma = 0;
    let i = 0;

    do {
        suma += estudiantes[i].nota;
        i++;
    } while(i < estudiantes.length);

    let promedio = suma / estudiantes.length;

    let mensaje = '';
    let clase = '';

    if(promedio >= 14){
        mensaje = 'Buen rendimiento';
        clase = 'success';
    } else if(promedio >= 10 && promedio < 14){
        mensaje = 'Rendimiento regular';
        clase = 'warning';
    } else {
        mensaje = 'Rendimiento bajo';
        clase = 'danger';
    }

    txt_reporte.innerHTML = `
        <div class="alert alert-${clase}">
            <strong>Reporte de Rendimiento:</strong> ${mensaje}<br>
            <strong>Promedio General:</strong> ${promedio.toFixed(2)}
        </div>
    `;
});



});
