
//declaracion de variables para guardar valores
let operacionParc = ""; //guarda operacion parcial
let operadorSeleccionado = "" //guarda operador seleccionado
let txtResultado = document.getElementById("txtresult"); //donde se muestra el resultado
let opRealizada = document.getElementById("operacionreal"); //donde se muestra la operacion parcial

//Esta funcion es para agregar numeros a la operacion parcial
function operador(num) {
    operacionParc = operacionParc + num; //concatena el numero a la operacion
    opRealizada.innerHTML = operacionParc; //hará que se actualice la visualizacion de la operacion parcial
}
//Esta funcion es para agregar un operador (+,-,*,/,=)
function operacion(ope) {
   
    //Tome el ultimo valor de la operacion, si termina en algun simbolo matematico no lo va a dejar agregar 2 veces
    if (operacionParc[operacionParc.length - 1] == "*" || operacionParc[operacionParc.length - 1] == "-" || operacionParc[operacionParc.length - 1] == "+" || operacionParc[operacionParc.length - 1] == "/") {
        alert("no puedes agregar 2 operaciones al mismo tiempo")
    }else{
        operacionParc = operacionParc + ope;
        opRealizada.innerHTML = operacionParc;
    }
   
}

//Esta funcion es para calcular el resultado
function calculo() {
    operacionParc = eval(operacionParc); //eval evalua la operacion parcial y guarda resultado
    txtResultado.innerHTML = operacionParc; //muestra el resultado
}

//Esta funcio es para borrar los datos
function limpiar() {
    operadorSeleccionado = ""; //se reinicia
    operacionParc = "";
    txtResultado.innerHTML = "";
    opRealizada.innerHTML = "";
}


function sumar() {
// para obtener resultado final suma el contenido de la operacion al resultado
    let resultadoActual = parseInt(opRealizada.innerHTML) + parseInt(txtResultado.innerHTML);
    //parseInt convierte una cadena de texto en un numero entero
    txtResultado.innerHTML = resultadoActual; //Para mostrar el resultado final
}