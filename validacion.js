document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const anioInput = document.getElementById("anio").value;
    const error = document.getElementById("error");
    const resultado = document.getElementById("resultado");

    // Regex: solo años válidos (4 dígitos)
    const regex = /^\d{4}$/;

    if (!regex.test(anioInput)) {
        error.textContent = "Ingrese un año válido (4 dígitos)";
        resultado.textContent = "";
        return;
    }

    const anioNacimiento = parseInt(anioInput);
    const anioActual = new Date().getFullYear();

    if (anioNacimiento > anioActual) {
        error.textContent = "El año no puede ser mayor al actual";
        resultado.textContent = "";
        return;
    }

    error.textContent = "";

    const edad = anioActual - anioNacimiento;

    resultado.textContent = `Edad aproximada: ${edad} años`;
});