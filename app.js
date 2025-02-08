// Programa que agrega una lista de amigos y sortea un amigo secreto

let listaCreadaAmigos = [];

function agregarAmigo() {
    // creo una condición para que si el input está vacío, me muestre un alert
    if (document.getElementById("amigo").value === "") {
        alert("Por favor, ingrese un nombre");
        return;
    }
    // creo una variable que almacene el valor del elemento con id "amigo"
    let nombreNuevo = document.getElementById("amigo").value;

    listaCreadaAmigos.push(nombreNuevo);
    
    let elementoUl = document.querySelector(".name-list");

    let elementoCreateLi = document.createElement("li");
    elementoCreateLi.innerHTML = nombreNuevo;
    elementoUl.appendChild(elementoCreateLi);  
    limpiarInput();
    
}

function sortearAmigo() {
    let numeroAleatorio = Math.floor(Math.random()* listaCreadaAmigos.length);
    let elementoUlResultado = document.querySelector(".result-list");
    limpiarLista();
    elementoUlResultado.innerHTML = `El amigo secreto es ${listaCreadaAmigos[numeroAleatorio]}`;
    
}

function limpiarInput() {
    let inputAmigo = document.getElementById("amigo");
    inputAmigo.value = "";
    inputAmigo.focus();
}
function limpiarLista() {
    let elementoListaAmigos = document.getElementById("listaAmigos");
    elementoListaAmigos.innerHTML = "";
    
}
