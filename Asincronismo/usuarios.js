// Archivo: usuarios.js

// Función para simular un callback
function obtenerUsuariosConCallback(callback) {
    setTimeout(() => {
        const usuarios = [
            { id: 1, nombre: 'Juan Pérez' },
            { id: 2, nombre: 'María López' }
        ];
        callback(usuarios);
    }, 1000);
}

// Uso de fetch y Promise para obtener datos de una API pública
function obtenerUsuariosConFetch() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener los usuarios');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            throw error;
        });
}

// Uso de async/await para obtener datos de una API pública
async function obtenerUsuariosConAsyncAwait() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al obtener los usuarios');
        }
        const usuarios = await response.json();
        return usuarios;
    } catch (error) {
        console.error('Error en la solicitud async/await:', error);
        throw error;
    }
}

// Función para mostrar los usuarios en la página
function mostrarUsuarios(usuarios) {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.textContent = usuario.name || usuario.nombre; // 'name' para fetch, 'nombre' para callback
        li.className = 'list-group-item';
        userList.appendChild(li);
    });
}

// Manejador de evento para el botón
document.getElementById('fetchUsersBtn').addEventListener('click', async () => {
    // Usamos async/await
    try {
        const usuarios = await obtenerUsuariosConAsyncAwait();
        mostrarUsuarios(usuarios);
    } catch (error) {
        console.error('Error al mostrar los usuarios:', error);
    }

    // También podemos probar las funciones con callbacks o promesas
    // obtenerUsuariosConCallback(mostrarUsuarios);
    // obtenerUsuariosConFetch().then(mostrarUsuarios).catch(error => console.error('Error:', error));
});