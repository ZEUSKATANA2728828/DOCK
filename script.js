const pages = document.querySelectorAll('.page');
const modal = document.getElementById('legal');
let target = null;

document.querySelectorAll('[data-nav]').forEach(b =>
  b.onclick = () => show(b.dataset.nav)
);

document.querySelectorAll('[data-script]').forEach(b =>
  b.onclick = () => {
    target = b.dataset.script === 'fps' ? 'script-fps' : 'script-estica';
    modal.classList.add('show');
  }
);

document.getElementById('accept').onclick = () => {
  modal.classList.remove('show');
  show(target);
};

document.getElementById('deny').onclick = () => {
  modal.classList.remove('show');
  show('blox');
};

function show(id) {
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function copyScript(id) {
  navigator.clipboard.writeText(document.getElementById(id).innerText);
}
