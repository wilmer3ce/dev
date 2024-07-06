let nombre = "juan";
let apellido = "perez";
let edad = "30";
let esEstudiante = true;


let saludo = "Hola" + nombre + " " + apellido + " . tu edad es" + edad + ".";


let edadstring = edad.toString();


let nombreMayusculas = nombre.toUpperCase();


document.getElementById("texto").innerHTML= `
<strong>Saludo:</strong> ${saludo}<br>
<strong>Edad como cadena:</strong> ${edadstring}<br>
<strong>Nombre en mayuscula:</strong> ${nombreMayusculas}<br>
<strong>Es Estudiante:</strong> ${esEstudiante? "si" : "no"}
`;