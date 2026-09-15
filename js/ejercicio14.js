function calcular() {
    var entrada = document.getElementById("numeros").value.trim();

    if (entrada === "") {
        alert("Por favor ingresa una serie de números separados por comas.");
        return;
    }

    var partes = entrada.split(",");
    var numeros = partes.map(function(valor) {
        return valor.trim();
    });

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] === "" || isNaN(numeros[i])) {
            alert("Por favor ingresa solo números válidos separados por comas.");
            return;
        }
    }

    numeros = numeros.map(Number);

    var mayor = Math.max(...numeros);
    var menor = Math.min(...numeros);
    var suma = numeros.reduce((acc, valor) => acc + valor, 0);
    var promedio = suma / numeros.length;

    document.getElementById("mayor").value = mayor;
    document.getElementById("menor").value = menor;
    document.getElementById("promedio").value = promedio;
}