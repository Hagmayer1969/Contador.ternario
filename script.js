let numero = 0;
function add() {
  numero++;
  render();
}
function dim() {
  numero--;
  render();
}
//seleciona o paragrafo e altera as cores
function render() {
  let paragrafo = document.querySelector("p");
  paragrafo.innerText = numero;
  paragrafo.style.color = numero > 0 ? "yellow" : numero < 0 ? "red" : "white";
}
render();