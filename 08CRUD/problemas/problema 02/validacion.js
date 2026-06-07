document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const sueldo = document.getElementById("sueldo").value;
    const venta1 = document.getElementById("venta1").value;
    const venta2 = document.getElementById("venta2").value;
    const venta3 = document.getElementById("venta3").value;

    const error = document.getElementById("error");
    const resultado = document.getElementById("resultado");

    // Regex: números positivos (enteros o decimales)
    const regex = /^\d+(\.\d+)?$/;

    if (!regex.test(sueldo) || !regex.test(venta1) || !regex.test(venta2) || !regex.test(venta3)) {
        error.textContent = "Todos los campos deben ser números válidos";
        resultado.textContent = "";
        return;
    }

    error.textContent = "";

    const s = parseFloat(sueldo);
    const v1 = parseFloat(venta1);
    const v2 = parseFloat(venta2);
    const v3 = parseFloat(venta3);

    // Comisión del 10%
    const totalVentas = v1 + v2 + v3;
    const comision = totalVentas * 0.10;
    const totalMes = s + comision;

    resultado.textContent = 
        `Comisión total: $${comision.toFixed(2)} | Total a recibir: $${totalMes.toFixed(2)}`;
});