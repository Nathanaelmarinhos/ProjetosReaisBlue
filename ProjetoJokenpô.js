do {
  var contador = 0, pontos = 0, respostaAdequada = 0, pcpontos = 0, denovo = 0;
  var possibilidades = ["PEDRA", "PAPEL", "TESOURA"];
  console.log("Jokenpô - Jogue ou morra! Vai encarar?!");
  do {
    var quantidadeRodadas = +prompt("Quantas rodadas vamos jogar?");
    if (quantidadeRodadas > 0) {
      contador = ++contador;
    } else {
      console.log("Valor inválido. Tente Novamente");
    }
  } while (contador == 0);
  
  do { 
    do {
      console.log("========================");
      var escolhaJogador = prompt("Pedra, Papel ou Tesoura?\n").toUpperCase();
      var posicao = possibilidades.indexOf(escolhaJogador);
    } while (escolhaJogador != possibilidades[posicao]);
    respostaAdequada = ++respostaAdequada
    var escolhaAleatoria=possibilidades[Math.floor(Math.random()*possibilidades.length)];
      console.log("O PC escolheu: " + escolhaAleatoria + "\n");
    
    if (escolhaJogador === "PEDRA") {
      if (escolhaAleatoria === "PEDRA") {
        console.log("Essa rodada deu empate\n");
      } else if (escolhaAleatoria === "TESOURA") {
        pontos = ++pontos;
        console.log("Você ganhou essa rodada!\n");
      } else {
        pcpontos = ++pcpontos;
        console.log("Você perdeu essa rodada!\n");
      }
    } else if (escolhaJogador === "PAPEL") {
      if (escolhaAleatoria === "PAPEL") {
        console.log("Essa rodada deu empate\n");
      } else if (escolhaAleatoria === "PEDRA") {
        pontos = ++pontos;
        console.log("Você ganhou essa rodada!\n");
      } else {
        pcpontos = ++pcpontos;
        console.log("Você perdeu essa rodada!\n");
      }
    } else {
      if (escolhaAleatoria === "TESOURA") {
        console.log("Essa rodada deu empate\n");
      } else if (escolhaAleatoria === "PEDRA") {
        pontos = ++pontos;
        console.log("Você ganhou essa rodada!\n");
      } else {
        pcpontos = ++pcpontos;
        console.log("Você perdeu essa rodada!\n");
      }
    }
  } while (quantidadeRodadas !== respostaAdequada);
  
  console.log("==========================");
  console.log("Seu total de vitórias: " + pontos);
  console.log("Seu total de derrotas: " + pcpontos);
  if (pontos === pcpontos) {
    console.log("Você empatou com o game!\n");
  } else if (pontos > pcpontos) {
    console.log("Você é o grande campeão do game!\n");
  } else {
    console.log("Você perdeu o game\n");
  }
  
  var reiniciar = prompt("Deseja reiniciar o jogo [S/N]\n").toUpperCase().slice(0, 1);
  if (reiniciar === "S" || reiniciar === "N") {
    if (reiniciar === "N") {
      denovo = ++denovo;
    } 
  } else {
    console.log("Resposta inválida. Saindo do jogo...");
    denovo = ++denovo;
  }
} while (denovo === 0);
console.log("Espero que tenha se divertido");
