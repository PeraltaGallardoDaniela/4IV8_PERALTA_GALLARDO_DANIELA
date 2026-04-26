document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const capitalInput = document.getElementById("capital");
    const error = document.getElementById("error");
    const resultado = document.getElementById("resultado");

    const capital = capitalInput.value;

    // Expresión regular: solo números positivos (enteros o decimales)
    const regex = /^\d+(\.\d+)?$/;

    if (!regex.test(capital)) {
        error.textContent = "Ingrese un número válido";
        resultado.textContent = "";
        return;
    }

    error.textContent = "";

    const capitalNum = parseFloat(capital);

    // 2% mensual
    const interes = capitalNum * 0.02;
    const total = capitalNum + interes;

    resultado.textContent = `Después de 1 mes tendrás: $${total.toFixed(2)} (Ganancia: $${interes.toFixed(2)})`;
});