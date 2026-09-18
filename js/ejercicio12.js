document.getElementById('btnConvertir').addEventListener('click', function () {
    const pesosInput = document.getElementById('pesos');
    const dolaresInput = document.getElementById('dolares');
    const mensajeError = document.getElementById('mensajeError');

    const tasaDeCambio = 0.055; 
    const valorPesos = pesosInput.value.trim();

    if (valorPesos === '') {
        mensajeError.textContent = 'Por favor ingresa una cantidad en pesos.';
        dolaresInput.value = '';
        return;
    }

    if (isNaN(valorPesos) || Number(valorPesos) <= 0) {
        mensajeError.textContent = 'El valor ingresado debe ser un número positivo.';
        dolaresInput.value = '';
        return;
    }

    mensajeError.textContent = '';

    const pesos = parseFloat(valorPesos);
    const dolares = pesos * tasaDeCambio;

    dolaresInput.value = dolares.toFixed(2) + ' USD';
});