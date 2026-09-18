const manejarTareas = (function() {

  function obtenerTareas() {
    const tareas = localStorage.getItem('tareas');
    return tareas ? JSON.parse(tareas) : [];
  }

  function guardarTareas(tareas) {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }

  function agregar() {
    const input = document.getElementById('nuevaTarea');
    const texto = input.value.trim();

    if (texto === '') {
      Swal.fire({
        icon: 'warning',
        title: 'Campo vacío',
        text: 'Escribe una tarea antes de agregar'
      });
      return;
    }

    const tareas = obtenerTareas();
    tareas.push({ texto: texto });
    guardarTareas(tareas);

    input.value = '';
    input.focus();
    renderizarTareas();
  }

  function eliminar(indice) {
    Swal.fire({
      title: '¿Eliminar tarea?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(function(resultado) {
      if (resultado.isConfirmed) {
        const tareas = obtenerTareas();
        tareas.splice(indice, 1);
        guardarTareas(tareas);
        renderizarTareas();

        Swal.fire({
          icon: 'success',
          title: 'Eliminada',
          text: 'La tarea fue eliminada'
        });
      }
    });
  }

  return {
    agregar: agregar,
    eliminar: eliminar,
    obtenerTareas: obtenerTareas
  };

})();

function renderizarTareas() {
  const lista = document.getElementById('listaTareas');
  lista.innerHTML = '';

  const tareas = manejarTareas.obtenerTareas();

  tareas.forEach(function(tarea, indice) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = tarea.texto;

    const boton = document.createElement('button');
    boton.textContent = 'Eliminar';
    boton.onclick = function() {
      manejarTareas.eliminar(indice);
    };

    li.appendChild(span);
    li.appendChild(boton);
    lista.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', renderizarTareas);