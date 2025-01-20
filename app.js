// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const input = document.getElementById('amigo'); //Boton de agregar amigo
const listaAmigos = document.getElementById('listaAmigos'); //Lista de amigos


let amigos = [];

function agregarAmigo(){

    const inputName = input.value; //valor del input
    if(inputName === '') {
        alert('No puedes agregar un amigo sin nombre'); //si el input esta vacio muestra un alert
        return; //retorna
    }
    console.log(inputName); //imprime el valor del input
    amigos.push(inputName); //agrega el valor del input al array amigos
    console.log(amigos); //imprime el array amigos
    listaAmigos.appendChild(document.createElement('li')).textContent = inputName; //agrega un li con el valor del input al ul
    input.value = ''; //limpia el input
    
}

function sortearAmigo(){
    let cantAmigos = amigos.length; //cantidad de amigos
    if(cantAmigos == 0) {
        alert('No hay amigos para sortear'); //si no hay amigos muestra un alert
        return; //retorna
    }
    let amigo = Math.floor(Math.random() * cantAmigos); //sortea un amigo
    const amigoSorteado = amigos[amigo]; //guarda el amigo sorteado
    alert(`El amigo sorteado es: ${amigoSorteado}`); //muestra un alert con el amigo sorteado
}

