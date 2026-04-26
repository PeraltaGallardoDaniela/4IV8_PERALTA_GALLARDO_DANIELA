function validar(formulario) {
    // ── NOMBRE ───────────────────────────────────────────────
    if (formulario.nombre.value.trim().length < 3) {
        mostrarMensaje("Por favor ingrese un nombre mayor de 3 caracteres.", "error");
        formulario.nombre.focus();
        return false;
    }

    var abcOK = "QWERTYUIOPPÑLKJHGFDSAZXCVBNMqwertyuiopñlkjhgfdsazxcvbnm ";
    var checkString = formulario.nombre.value;
    for (var i = 0; i < checkString.length; i++) {
        var caracter = checkString.charAt(i);
        if (abcOK.indexOf(caracter) == -1) {
            mostrarMensaje("El nombre solo debe contener letras.", "error");
            formulario.nombre.focus();
            return false;
        }
    }

    // ── EDAD ─────────────────────────────────────────────────
    var edadValue = formulario.edad.value;
    if (edadValue.length == 0 || isNaN(edadValue)) {
        mostrarMensaje("Por favor ingrese una edad válida.", "error");
        formulario.edad.focus();
        return false;
    }

    var edadNum = parseInt(edadValue);
    if (edadNum < 1 || edadNum > 120) {
        mostrarMensaje("La edad debe estar entre 1 y 120 años.", "error");
        formulario.edad.focus();
        return false;
    }

    // ── EMAIL ────────────────────────────────────────────────
    var correoRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!correoRegex.test(formulario.email.value)) {
        mostrarMensaje("Ingrese un correo electrónico válido.", "error");
        formulario.email.focus();
        return false;
    }

    // ── TEXTAREA (COMENTARIOS) ───────────────────────────────
    if (formulario.comentarios.value.trim().length < 10) {
        mostrarMensaje("Los comentarios deben tener al menos 10 caracteres.", "error");
        formulario.comentarios.focus();
        return false;
    }

    // ── ÉXITO ────────────────────────────────────────────────
    mostrarMensaje("¡Formulario validado con éxito! Enviando datos...", "exito");
    return true; 
}

function mostrarMensaje(mensaje, tipo) {
    var box = document.getElementById("mensaje-validacion");
    box.textContent = mensaje;
    box.style.display = "block";

    if (tipo === "error") {
        box.style.backgroundColor = "#fce7f3";
        box.style.border = "1px solid #ec4899";
        box.style.color = "#4a1942";
    } else {
        box.style.backgroundColor = "#f0fdf4";
        box.style.border = "1px solid #16a34a";
        box.style.color = "#14532d";
    }
}