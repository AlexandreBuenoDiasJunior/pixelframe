function mostrarToast() {
  const t = document.getElementById('toast');
  t.classList.add('mostrar');
  setTimeout(() => t.classList.remove('mostrar'), 3000);
}

function abrirModal() {
  document.getElementById('modalOverlay').classList.add('aberto');
}

function fecharModal() {
  document.getElementById('modalOverlay').classList.remove('aberto');
}
