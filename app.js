// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaCreadaAmigos = [];

function agregarAmigo() {

    // creo una variable que almacene el valor del elemento con id "amigo"
    let nombreNuevo = document.getElementById("amigo").value;

    listaCreadaAmigos.push(nombreNuevo);
    
    let elementoUl = document.querySelector(".name-list");

    let elementoCreateLi = document.createElement("li");
    elementoCreateLi.innerHTML = nombreNuevo;
    elementoUl.appendChild(elementoCreateLi);  
    
}

function sortearAmigo() {
    let numeroAleatorio = Math.floor(Math.random()* listaCreadaAmigos.length);
    let elementoUlResultado = document.querySelector(".result-list");
    elementoUlResultado.innerHTML = listaCreadaAmigos[numeroAleatorio];
    console.log(numeroAleatorio,listaCreadaAmigos.length);

}