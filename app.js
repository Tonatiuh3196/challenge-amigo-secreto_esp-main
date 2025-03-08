// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigoSecreto = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value.trim();
    if (nombre === ""){
        alert("Ingresa un nombre valido.");
        return
    } else{
        amigoSecreto.push(nombre);
        nombre.value = "";
        limpiar();
        mostrarAmigos();
    }

}

function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigoSecreto.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigoSecreto.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigoSecreto.length);
    let amigoSorteado = amigoSecreto[indiceAleatorio];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = `¡El amigo sorteado es: ${amigoSorteado}!`;
    resultado.appendChild(li);
}

function limpiar(){
    document.querySelector('#amigo').value = '';
}