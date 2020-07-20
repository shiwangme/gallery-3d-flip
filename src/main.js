/* eslint-disable no-undef */
function randNumber(m, n = m) {
  return parseInt(Math.random() * (n - m) + m, 10);
}
function randomShow() {
  const el = document.querySelectorAll('.background:not(.animated)');
  const rnd = randNumber(0, el.length);
  el[rnd].classList.add('animated');
  if (el.length > 1) {
    setTimeout(randomShow, randNumber(1, 80));
  }
}

function main() {
  const app = document.getElementById('app');
  const imgPerLine = Math.ceil(window.innerWidth / 200);
  const imgLines = Math.ceil(window.innerHeight / 200);
  const width = imgPerLine * 200;
  const left = (width - window.innerWidth) / 2;
  app.style.width = `${width}px`;
  app.style.left = `-${left}px`;
  for (let i = 0; i < imgPerLine * imgLines; i += 1) {
    const node = document.createElement('div');
    node.className = 'background';
    app.appendChild(node);
  }
  setTimeout(randomShow, 2000);
}
window.onload = main;
