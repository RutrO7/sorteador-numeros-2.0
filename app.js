function sortear() {
  let quantidade = Number(document.getElementById("quantidade").value);
  let de = Number(document.getElementById("de").value);
  let ate = Number(document.getElementById("ate").value);
  //corrigindo erro de digitação;
  if (de >= ate) {
    alert(
      "Reveja se inseriu os dados corretamente.\nO número inicial não pode ser maior que o número final."
    );
    reiniciar();
    return;
  }

  let sorteados = [];
  let numero;
  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);
    if (quantidade > (de - ate + 1)) {
      alert(
        "Quantidade inválida\nA quantidade de números deve ser menor ou igual ao intervalo entre os números."
      );
      reiniciar();
      return;
    }
    // quero criar um loop while até que minhas repetições não sejam iguais, usando o includes para isso;
    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
    }
    sorteados.push(numero);
    // criar um botão que quando sortear e os numeros forem revelados, poder repetir o jogo;
  }

  // variavel que vai adicionar meus numeros no campo de numeros sorteados na parte do front, usando o document.getElementeById;
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
  repetirOJogo();
}
function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// para repetir os comandos;
function repetirOJogo() {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}
function reiniciar() {
  // essa parta faz com que eu chame de volta as variaveis, e tambem, quando reiniciar ele voltar como um texto vazio;
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById("resultado").innerHTML =
    '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
  repetirOJogo();
}
