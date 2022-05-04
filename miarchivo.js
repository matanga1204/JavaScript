for(let i = 0; i<=10 ;i++){
    alert(i);
}
console.log("*--------------*")

let numeroIngresado = parseInt(prompt("ingrese un numero"));
for(let i= 0; i<10; i++){
    let resultado = numeroIngresado+i;
    alert(numeroIngresado + " + " + i + " = " + resultado)
}

console.log("*--------------*")

let entrada = prompt("ingresar un dato");
while(entrada != "ESC") {
    alert("El Usuario ingreso" + entrada);
    entrada= prompt("ingresar otro dato")
}

let = entrada = prompt("ingresar un nombre");
while (entrada != 'ESC') {
    switch (entrada){
        case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert ("HOLA JUAN");
            break
        case "MATEO":
            alert("HOLA MATEO");
            break    
    }
    entrada= prompt("ingresar un nombre");
}
