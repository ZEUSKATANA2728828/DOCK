function accept(btn) {
  const section = btn.closest('.script-page');
  section.querySelector('.code').classList.remove('hidden');
  section.querySelector('.copy').classList.remove('hidden');
  btn.parentElement.style.display = 'none';
}

function reject() {
  history.back();
}

function copyCode(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text);
  alert("Script copiado!");
}
