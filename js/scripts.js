function escribirTexto() {
    var div = document.getElementById("div1");
    var h1 = document.createElement("h1");
    h1.textContent = "Mi nombre es: José Antonio Díaz García";
    h1.style.color = "black";
    div.appendChild(h1);
}
function enviarMensaje() {
    var input = document.getElementById("miInput");
    var texto = document.getElementById("miTexto");
  
    texto.textContent = input.value;
    input.value = "";
  }
  
