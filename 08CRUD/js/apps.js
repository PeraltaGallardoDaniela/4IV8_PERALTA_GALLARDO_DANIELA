// ============================================================
// APP.JS COMPLETO CORREGIDO 😎🔥
// ============================================================

const API_URL = 'http://localhost:3000';

// ============================================================
// VARIABLES
// ============================================================

let usuarios = [];
let productos = [];
let compras = [];

// ============================================================
// ELEMENTOS DEL DOM
// ============================================================

const usuarioForm = document.getElementById('form-usuario');
const productoForm = document.getElementById('form-producto');
const compraForm = document.getElementById('form-compra');

const usuariosLista = document.getElementById('tbody-usuarios');
const productosLista = document.getElementById('tbody-productos');
const comprasLista = document.getElementById('tbody-compras');

// ============================================================
// FUNCIÓN GENERAL FETCH
// ============================================================

async function fetchAPI(url, options = {}) {

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        ...options
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Error en la petición');
    }

    return data;
}

// ============================================================
// CAMBIAR SECCIONES
// ============================================================

function cambiarSeccion(seccion) {

    document.querySelectorAll('.seccion').forEach(sec => {
        sec.style.display = 'none';
    });

    document.getElementById(`seccion-${seccion}`).style.display = 'block';

    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    event.target.classList.add('active');
}

// ============================================================
// USUARIOS
// ============================================================

async function cargarUsuarios() {

    try {

        const resp = await fetchAPI(`${API_URL}/api/usuarios`);

        usuarios = resp.data;

        renderUsuarios();

        cargarSelectUsuarios();

    } catch (error) {

        console.error('Error al cargar usuarios:', error);

    }
}

function renderUsuarios() {

    usuariosLista.innerHTML = '';

    usuarios.forEach(usuario => {

        usuariosLista.innerHTML += `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.email}</td>
                <td>
                    <button onclick="eliminarUsuario(${usuario.id})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });

    document.getElementById('tabla-usuarios').style.display = 'table';

    document.getElementById('carga-usuarios').style.display = 'none';

    document.getElementById('contador-usuarios').textContent = usuarios.length;
}

usuarioForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    const nombre = document.getElementById('usuario-nombre').value;

    const email = document.getElementById('usuario-email').value;

    try {

        await fetchAPI(`${API_URL}/api/usuarios`, {

            method: 'POST',

            body: JSON.stringify({
                nombre,
                email
            })

        });

        usuarioForm.reset();

        cargarUsuarios();

    } catch (error) {

        console.error(error);

        alert(error.message);

    }
});

async function eliminarUsuario(id) {

    if (!confirm('¿Eliminar usuario?')) return;

    try {

        await fetchAPI(`${API_URL}/api/usuarios/${id}`, {
            method: 'DELETE'
        });

        cargarUsuarios();

    } catch (error) {

        console.error(error);

        alert(error.message);

    }
}

// ============================================================
// PRODUCTOS
// ============================================================

async function cargarProductos() {

    try {

        const resp = await fetchAPI(`${API_URL}/api/productos`);

        productos = resp.data;

        renderProductos();

        cargarSelectProductos();

    } catch (error) {

        console.error(error);

    }
}

function renderProductos() {

    productosLista.innerHTML = '';

    productos.forEach(producto => {

        productosLista.innerHTML += `
            <tr>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
                <td>
                    <button onclick="eliminarProducto(${producto.id})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });

    document.getElementById('tabla-productos').style.display = 'table';

    document.getElementById('carga-productos').style.display = 'none';

    document.getElementById('contador-productos').textContent = productos.length;
}

productoForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    const nombre = document.getElementById('producto-nombre').value;

    const precio = document.getElementById('producto-precio').value;

    try {

        await fetchAPI(`${API_URL}/api/productos`, {

            method: 'POST',

            body: JSON.stringify({
                nombre,
                precio
            })

        });

        productoForm.reset();

        cargarProductos();

    } catch (error) {

        console.error(error);

        alert(error.message);

    }
});

async function eliminarProducto(id) {

    if (!confirm('¿Eliminar producto?')) return;

    try {

        await fetchAPI(`${API_URL}/api/productos/${id}`, {
            method: 'DELETE'
        });

        cargarProductos();

    } catch (error) {

        console.error(error);

        alert(error.message);

    }
}

// ============================================================
// COMPRAS
// ============================================================

async function cargarCompras() {

    try {

        const resp = await fetchAPI(`${API_URL}/api/compras`);

        compras = resp.data;

        renderCompras();

    } catch (error) {

        console.error(error);

    }
}

function renderCompras() {

    comprasLista.innerHTML = '';

    compras.forEach(compra => {

        comprasLista.innerHTML += `
            <tr>
                <td>${compra.id}</td>
                <td>${compra.usuario_nombre}</td>
                <td>${compra.producto_nombre}</td>
                <td>$${compra.precio}</td>
                <td>${compra.cantidad}</td>
                <td>$${compra.total}</td>
                <td>${new Date(compra.fecha_compra).toLocaleDateString()}</td>
                <td>
                    <button onclick="eliminarCompra(${compra.id})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });

    document.getElementById('tabla-compras').style.display = 'table';

    document.getElementById('carga-compras').style.display = 'none';

    document.getElementById('contador-compras').textContent = compras.length;
}

compraForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    const usuario_id = document.getElementById('compra-usuario').value;

    const producto_id = document.getElementById('compra-producto').value;

    const cantidad = document.getElementById('compra-cantidad').value;

    try {

        await fetchAPI(`${API_URL}/api/compras`, {

            method: 'POST',

            body: JSON.stringify({
                usuario_id,
                producto_id,
                cantidad
            })

        });

        compraForm.reset();

        cargarCompras();

    } catch (error) {

        console.error(error);

        alert(error.message);

    }
});

async function eliminarCompra(id) {

    if (!confirm('¿Eliminar compra?')) return;

    try {

        await fetchAPI(`${API_URL}/api/compras/${id}`, {
            method: 'DELETE'
        });

        cargarCompras();

    } catch (error) {

        console.error(error);

        alert(error.message);

    }
}

// ============================================================
// SELECTS
// ============================================================

function cargarSelectUsuarios() {

    const select = document.getElementById('compra-usuario');

    select.innerHTML = '<option value="">-- Seleccionar --</option>';

    usuarios.forEach(usuario => {

        select.innerHTML += `
            <option value="${usuario.id}">
                ${usuario.nombre}
            </option>
        `;
    });
}

function cargarSelectProductos() {

    const select = document.getElementById('compra-producto');

    select.innerHTML = '<option value="">-- Seleccionar --</option>';

    productos.forEach(producto => {

        select.innerHTML += `
            <option value="${producto.id}">
                ${producto.nombre}
            </option>
        `;
    });
}

// ============================================================
// INICIAR APP
// ============================================================

async function iniciarApp() {

    await cargarUsuarios();

    await cargarProductos();

    await cargarCompras();
}

iniciarApp();