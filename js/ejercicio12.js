document.getElementById('btnConvertir').addEventListener('click', function () {
    const pesosInput = document.getElementById('pesos');
    const dolaresInput = document.getElementById('dolares');
    const mensajeError = document.getElementById('mensajeError');

    const tasaDeCambio = 0.055; // 1 USD = 18.18 MXN aprox.
    const valorPesos = pesosInput.value.trim();

    // Validación: campo vacío
    if (valorPesos === '') {
        mensajeError.textContent = 'Por favor ingresa una cantidad en pesos.';
        dolaresInput.value = '';
        return;
    }

    // Validación: valor numérico y positivo
    if (isNaN(valorPesos) || Number(valorPesos) <= 0) {
        mensajeError.textContent = 'El valor ingresado debe ser un número positivo.';
        dolaresInput.value = '';
        return;
    }

    // Limpiar mensaje de error
    mensajeError.textContent = '';

    // Conversión: USD = MXN x tasa_de_cambio
    const pesos = parseFloat(valorPesos);
    const dolares = pesos * tasaDeCambio;

    dolaresInput.value = dolares.toFixed(2) + ' USD';
});