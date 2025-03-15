let amigos = []; // Array para almacenar los nombres

function agregarAmigo() {
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim();
    
    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
    } else {
        amigos.push(nombre);
        console.log('Amigos después de agregar:', amigos); // Verificación
        actualizarLista();
        inputNombre.value = '';
    }
}

function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, agregue al menos un nombre a la lista.');
    } else {
        console.log('Amigos antes del sorteo:', amigos);
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];
        mostrarResultado(amigoSecreto);
    }
}

function mostrarResultado(amigoSecreto) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
}