let operacionParc = "";

let opRealizada = document.getElementById("operacionreal")

let txtResultado = document.getElementById("txtresult")

let operadorSeleccionado = "";

let numero = "";

let ultimoDigitoClick = "";

function operador(num) {
    numero = numero + num;
    operacionParc = operacionParc + num;
    
    opRealizada.innerHTML = operacionParc;

    if (numero == '0' && operadorSeleccionado == '/') {
        limpiar();
        txtResultado.innerHTML = "indefinido";
        return;
    }

    if (ultimoDigitoClick == 'operacion') {
        ultimoDigitoClick = 'numero';
    }
}

function operacion(ope) {
    operadorSeleccionado = ope;
    ultimoDigitoClick = "operacion";
    operacionParc = operacionParc + ope;
    numero = 0;
    opRealizada.innerHTML = operacionParc;
}

function calculo() {
    operacionParc = eval(operacionParc);
    txtResultado.innerHTML = operacionParc;
    
    console.log(opRealizada)
    operacionParc = operacionParc;
    numero = "";
    
}


function limpiar() {
    operadorSeleccionado = "";
    operacionParc = "";
    txtResultado.innerHTML = "";
    numero = "";
    opRealizada.innerHTML = 0;
   
}



