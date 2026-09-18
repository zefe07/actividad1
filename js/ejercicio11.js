function convertir() {
    var kmInput = document.getElementById("kilometros");
    var millasInput = document.getElementById("millas");
    var valor = kmInput.value.trim();

    if (valor === "") {
        alert(" ingresa un valor en kilómetros.");
        return;
    }

    if (isNaN(valor)) {
        alert("Por favor ingresa un valor numérico válido.");
        return;
    }

    var kilometros = parseFloat(valor);
    var millas = kilometros * 0.621371;
    millasInput.value = millas;
}