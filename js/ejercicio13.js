document.getElementById('btnVerificar').addEventListener('click', function () {
    const edadInput = document.getElementById('edad');
    const resultadoInput = document.getElementById('resultado');
    const mensajeError = document.getElementById('mensajeError');

    const valorEdad = edadInput.value.trim();

    if (valorEdad === '') {
        mensajeError.textContent = 'Por favor ingresa tu edad.';
        resultadoInput.value = '';
        return;
    }

    if (isNaN(valorEdad) || Number(valorEdad) <= 0) {
        mensajeError.textContent = 'El valor ingresado debe ser un número positivo.';
        resultadoInput.value = '';
        return;
    }

    mensajeError.textContent = '';

    const edad = parseFloat(valorEdad);

    if (edad >= 18) {
        resultadoInput.value = 'Puedes votar';
    } else {
        resultadoInput.value = 'No puedes votar';
    }
});