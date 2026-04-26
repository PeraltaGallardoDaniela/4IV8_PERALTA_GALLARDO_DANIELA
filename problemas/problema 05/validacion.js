document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const hombresInput = document.getElementById("hombres").value;
    const mujeresInput = document.getElementById("mujeres").value;

    const error = document.getElementById("error");
    const resultado = document.getElementById("resultado");

    // Regex: solo números enteros positivos
    const regex = /^\d+$/;

    if (!regex.test(hombresInput) || !regex.test(mujeresInput)) {
        error.textContent = "Ingrese números válidos (enteros positivos)";
        resultado.textContent = "";
        return;
    }

    const hombres = parseInt(hombresInput);
    const mujeres = parseInt(mujeresInput);

    const total = hombres + mujeres;

    if (total === 0) {
        error.textContent = "El total no puede ser 0";
        resultado.textContent = "";
        return;
    }

    error.textContent = "";

    const porcentajeHombres = (hombres / total) * 100;
    const porcentajeMujeres = (mujeres / total) * 100;

    resultado.textContent = 
        `Hombres: ${porcentajeHombres.toFixed(2)}% | Mujeres: ${porcentajeMujeres.toFixed(2)}%`;
});