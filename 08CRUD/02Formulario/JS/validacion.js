function validar(formulario){

    // VALIDAR VACÍOS
    if(formulario.nombre.value.trim() === ""){
        alert("El nombre es obligatorio");
        formulario.nombre.focus();
        return false;
    }

    if(formulario.edad.value.trim() === ""){
        alert("La edad es obligatoria");
        formulario.edad.focus();
        return false;
    }

    if(formulario.email.value.trim() === ""){
        alert("El email es obligatorio");
        formulario.email.focus();
        return false;
    }

    // VALIDAR NOMBRE (mínimo 3 letras)
    if(formulario.nombre.value.length < 3){
        alert("Nombre mínimo 3 caracteres");
        formulario.nombre.focus();
        return false;
    }

    // SOLO LETRAS
    var letras = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/;
    if(!letras.test(formulario.nombre.value)){
        alert("Solo letras en el nombre");
        formulario.nombre.focus();
        return false;
    }

    // SOLO NÚMEROS EN EDAD
    if(isNaN(formulario.edad.value)){
        alert("Edad solo números");
        formulario.edad.focus();
        return false;
    }

    // VALIDAR EMAIL
    var correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!correo.test(formulario.email.value)){
        alert("Email no válido");
        formulario.email.focus();
        return false;
    }

    alert("Formulario enviado correctamente");
    return true;
}