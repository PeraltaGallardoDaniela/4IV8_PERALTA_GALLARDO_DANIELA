document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const totalInput = document.getElementById("total").value;
    const error = document.getElementById("error");
    const resultado = document.getElementById("resultado");

    // Regex: números positivos (enteros o decimales)
    const regex = /^\d+(\.\d+)?$/;

    if (!regex.test(totalInput)) {
        error.textContent = "Ingrese un número válido";
        resultado.textContent = "";
        return;
    }

    error.textContent = "";

    const total = parseFloat(totalInput);

    // Descuento del 15%
    const descuento = total * 0.15;
    const totalFinal = total - descuento;

    resultado.textContent = 
        `Descuento: $${descuento.toFixed(2)} | Total a pagar: $${totalFinal.toFixed(2)}`;
});