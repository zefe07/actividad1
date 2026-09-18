let estudiantes = [];

function agregarEstudiante() {
  const nombreInput = document.getElementById('nombre');
  const calificacionInput = document.getElementById('calificacion');

  const nombre = nombreInput.value.trim();
  const calificacion = calificacionInput.value.trim();

  if (nombre === '' || calificacion === '') {
    alert('Completa el nombre y la calificación');
    return;
  }

  const calificacionNum = Number(calificacion);

  if (isNaN(calificacionNum)) {
    alert('La calificación debe ser un número válido');
    return;
  }

  estudiantes.push({ nombre: nombre, calificacion: calificacionNum });
  renderizarLista();

  nombreInput.value = '';
  calificacionInput.value = '';
  nombreInput.focus();
}

function renderizarLista() {
  const lista = document.getElementById('listaEstudiantes');
  lista.innerHTML = '';

  estudiantes.forEach(estudiante => {
    const li = document.createElement('li');
    li.textContent = estudiante.nombre + ' — ' + estudiante.calificacion;
    lista.appendChild(li);
  });
}

function calcular() {
  if (estudiantes.length === 0) {
    alert('Agrega al menos un estudiante antes de calcular');
    return;
  }

  const suma = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
  const promedio = suma / estudiantes.length;

  const calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
  const calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

  const estudianteMax = estudiantes.find(e => e.calificacion === calificacionMaxima);
  const estudianteMin = estudiantes.find(e => e.calificacion === calificacionMinima);

  document.getElementById('promedio').value = promedio.toFixed(2);
  document.getElementById('maxima').value = estudianteMax.nombre + ' (' + calificacionMaxima + ')';
  document.getElementById('minima').value = estudianteMin.nombre + ' (' + calificacionMinima + ')';
}