document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const p1 = document.getElementById("p1").value;
    const p2 = document.getElementById("p2").value;
    const p3 = document.getElementById("p3").value;
    const examen = document.getElementById("examen").value;
    const trabajo = document.getElementById("trabajo").value;

    const error = document.getElementById("error");
    const resultado = document.getElementById("resultado");

    // Regex: números entre 0 y 10 (con decimales opcionales)
    const regex = /^(10|[0-9](\.\d+)?)$/;

    if (!regex.test(p1) || !regex.test(p2) || !regex.test(p3) || 
        !regex.test(examen) || !regex.test(trabajo)) {
        error.textContent = "Ingrese calificaciones válidas (0 - 10)";
        resultado.textContent = "";
        return;
    }

    error.textContent = "";

    const parcial1 = parseFloat(p1);
    const parcial2 = parseFloat(p2);
    const parcial3 = parseFloat(p3);
    const exFinal = parseFloat(examen);
    const trabFinal = parseFloat(trabajo);

    // Promedio de parciales
    const promedioParciales = (parcial1 + parcial2 + parcial3) / 3;

    // Porcentajes
    const calificacionFinal = 
        (promedioParciales * 0.55) +
        (exFinal * 0.30) +
        (trabFinal * 0.15);

    resultado.textContent = 
        `Calificación final: ${calificacionFinal.toFixed(2)}`;
});