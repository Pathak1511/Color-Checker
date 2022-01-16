'use strict';

let openbtn = document.querySelector('.container-1');
const btn3 = document.querySelector('.show-modal1');

function openbtn1() {
  openbtn.classList.remove('hidden1');
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !openbtn.classList.contains('hidden1')) {
      closeModal();
    }
  });
}

let outputBox = document.querySelector('.output');
let getBody = document.querySelector('.section-hero');

function getvalue() {
  let red = document.getElementById('red').value;
  let green = document.getElementById('green').value;
  let blue = document.getElementById('blue').value;
  let alpha = document.getElementById('alpha').value;
  getBody.style.background = `rgba(${red},${green},${blue},${alpha})`;
  outputBox.innerHTML = `rgba(${red},${green},${blue},${alpha})`;
}

function copy() {
  let element = document.createElement('textarea');
  element.value = outputBox.textContent;
  document.body.appendChild(element);
  element.select();
  document.execCommand('copy');
  document.body.removeChild(element);
  // alert('copied');
}
