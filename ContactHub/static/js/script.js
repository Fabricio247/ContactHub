// Obtener elementos del formulario
function validarContacto() {
    let nombre = document.querySelector("[name='nombre']");
    let telefono = document.querySelector("[name='telefono']");
    let correo = document.querySelector("[name='correo']");

    if (!nombre || !telefono || !correo) {
        return true;
    }

    // Obtener valores de los campos
    let nombreValor = nombre.value.trim();
    let telefonoValor = telefono.value.trim();
    let correoValor = correo.value.trim();

    // Validar que no estén vacíos
    if (nombreValor === "" || telefonoValor === "" || correoValor === "") {
        alert("Nombre, teléfono y correo son obligatorios.");
        return false;
    }

    // Validar teléfono debe tener 8 dígitos
    if (telefonoValor.length !== 8 || isNaN(telefonoValor)) {
        alert("El teléfono debe tener exactamente 8 dígitos.");
        return false;
    }

    // Validar formato de correo (debe tener @ y .)
    if (!correoValor.includes("@") || !correoValor.includes(".")) {
        alert("El correo debe tener un formato válido. Ejemplo: usuario@dominio.com");
        return false;
    }

    return true;
}

// Valida antes de agregar un contacto
function validarFormulario() {
    return validarContacto();
}

// Valida y pide confirmación antes de editar
function confirmarEditar() {
    if (validarContacto() === false) {
        return false;
    }

    return confirm("¿Está seguro/a que desea actualizar la información del contacto? Esta acción no puede ser revertida.");
}

// Pide confirmación antes de eliminar
function confirmarEliminar(nombre) {
    if (!nombre || nombre.trim() === "") {
        nombre = "este contacto";
    }

    return confirm("¿Está seguro/a que desea eliminar a " + nombre + "?\n\nEsta acción no puede ser revertida.");
}

// Muestra credenciales del login
function olvidoContrasena() {
    alert("Usuario: admin\nContraseña: 1234");
}

// Redirige a la página de contactos
function limpiarBusqueda() {
    window.location.href = "/contactos";
}
