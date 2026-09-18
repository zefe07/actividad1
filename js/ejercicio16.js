const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

function calcularOperacion(operacion) {
  const numero1 = document.getElementById('numero1').value.trim();
  const numero2 = document.getElementById('numero2').value.trim();

  if (numero1 === '' || numero2 === '' || isNaN(numero1) || isNaN(numero2)) {
    Swal.fire({
      icon: 'error',
      title: 'Datos inválidos',
      text: 'Ingresa dos números válidos'
    });
    return;
  }

  const n1 = Number(numero1);
  const n2 = Number(numero2);
  let resultado;

  if (operacion === 'suma') {
    resultado = sumar(n1, n2);
  } else if (operacion === 'resta') {
    resultado = restar(n1, n2);
  } else if (operacion === 'multiplicacion') {
    resultado = multiplicar(n1, n2);
  } else if (operacion === 'division') {
    resultado = dividir(n1, n2);

    if (resultado === 'Error: División por cero') {
      Swal.fire({
        icon: 'error',
        title: 'División por cero',
        text: 'No se puede dividir entre cero'
      });
      return;
    }
  }

  document.getElementById('resultado').value = resultado;
}