let amigos = [];
function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;
  if (amigo == "") {
    alert("Por favor, ingrese un nombre.");
    return;
  }
  amigos.push(amigo);
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML = lista.innerHTML + `<li class="amigo">${amigos[i]}</li>`;
  }
  document.getElementById("amigo").value = "";
}
function sortearAmigo() {
  if (amigos.length < 4) {
    alert("Se necesitan al menos 4 amigos para este sorteo.");
    return;
  }
  let sorteados = [];
  let amigosDisponibles = amigos.slice();
  let indiceAmigo;
  for (let i = 0; i < amigos.length; i++) {
    let amigoOriginal = amigos[i];
    do {
      indiceAmigo = Math.floor(Math.random() * amigosDisponibles.length);
    } while (amigosDisponibles[indiceAmigo] === amigoOriginal);
    sorteados.push({
      amigo: amigoOriginal,
      regalaA: amigosDisponibles[indiceAmigo],
    });
    amigosDisponibles.splice(indiceAmigo, 1);
  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  for (let i = 0; i < sorteados.length; i++) {
    resultado.innerHTML =
      resultado.innerHTML +
      `<li class="sorteados">${sorteados[i].amigo} -> ${sorteados[i].regalaA}</li>`;
  }
}
