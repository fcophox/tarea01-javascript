//Tarea : 1 

//1er punto
function verificarNumero(value) {
    if (value%2==0) {
        console.log("Tu número es par");

    } else {
        console.log("Tu número es impar");
    }
}

//2do punto
function posicionEnString(value) {
    var abcedarios = 'abcdefghijklmnñopqrstuvwxyz';
    var resultado = abcedarios.indexOf(value);
    console.log(resultado);
}

// 3er punto
function precioImpuesto (value) {
    var precioConImpuesto = value*(1+19/100);
    console.log('El precio con impuesto es de $'+precioConImpuesto );
}

// 4to punto // sin clousere
function lanzandoDados() {
    var random = Math.floor(Math.random() * 6);
    console.log ('Chan!!! Julio tiró un dado y salió ' + random)
}


// 5to punto
function persona (){
    var nombreCompleto = 'Marcela Guerra'
    var edad = '34'

    localStorage.setItem(nombreCompleto, nombreCompleto);
    localStorage.setItem(edad, edad)

    sessionStorage.setItem(nombreCompleto, nombreCompleto)
    sessionStorage.setItem(edad, edad)

    console.log('Revisar en LocalStorage y Session Storage los datos de personas ... ')
}
