document.getElementById('btnConvertir').addEventListener('click', function () {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const mensajeError = document.getElementById('mensajeError');

    const valorCelsius = celsiusInput.value.trim();

    if (valorCelsius === '') {
        mensajeError.textContent = 'Por favor ingresa un valor en grados Celsius.';
        fahrenheitInput.value = '';
        return;
    }

    if (isNaN(valorCelsius)) {
        mensajeError.textContent = 'El valor ingresado debe ser numérico.';
        fahrenheitInput.value = '';
        return;
    }

    mensajeError.textContent = '';

    const celsius = parseFloat(valorCelsius);
    const fahrenheit = (celsius * 9 / 5) + 32;

    fahrenheitInput.value = fahrenheit.toFixed(2) + '°F';
});