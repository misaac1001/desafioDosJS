let notas = [];

//Saludo al usuario

function saludar (nombre) {
    console.log ("Hola! " + nombre);
}

// Validar usuario 

function validarUsuario (nombre){
    if  (nombre != "") {
        return true;
    }
    else{ 

        return false;

    }
}

const nombre = prompt ("Ingrese su nombre");

let usuarioTrue = validarUsuario (nombre); 

if ( usuarioTrue != " " ) {
    
    saludar(nombre);
    
    alert ("Bienvenido al sistema " + nombre);

}
else {   
    
    alert ("Usuario incompleto"); 
}


// PIDO DATOS DEL ALUMNO 

const nombreAlumno = prompt ("Ingrese nombre y apellido del alumno"); 

for ( i = 0 ; i < 3 ; i++) {
    
    notas.push( Number (prompt("Ingrese la nota del alumno: " + (i + 1) , " 1 AL 10"))); 

}

// SUMAR TODAS LAS NOTAS

const suma = notas.reduce(function(total, cantidad) {
    return total + cantidad
});


//PROMEDIO DE LAS NOTAS

const promedio = (suma / (notas.length)).toFixed(1);

//NOTIFICAMOS SI ESTA APROBADO O DESAPROBADO

let estado;
if (promedio >= 8 ) {
    estado = ("Aprobado, buena!");
} else if (promedio >= 4 ) {
    estado = ("Regular, te falto un poquito");
}
else {
    estado = ("Desaprobado, la próxima será");
}
//se imprimen los resultados en pantalla.

document.write("Tus notas son: " + notas + "<br>" + "Tu Promedio es: " + promedio + "<br>" + "Estado: " + estado + "<br>");
console.log (nombreAlumno , notas , estado)
alert(estado); 




