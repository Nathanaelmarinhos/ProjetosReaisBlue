let jogadores = []
console.log("Vamos jogar um jogo! :D");
let rodadas = prompt('Digite a quantidade de rodadas que deseja jogar: ');
let jog = prompt('Digite o número de jogadores: ');

for (let i = 0; i < jog; i++) {
    let jogador = {}
    jogador.name = prompt("Qual o seu nome? ");
    jogador.dado = 0
    jogador.vitorias = 0
    jogadores.push(jogador);
}
for (let r = 0; r < rodadas; r++){
    for (let i = 0; i < jog; i++){
        jogadores[i].dado = Math.floor(Math.random() * 6 + 1);
    }
    jogadores.sort(function(a, b) {return a.dado - b.dado}).reverse();
    jogadores[0].vitorias += 1;
    console.log(`${jogadores[0].name} Ganhou a rodada tirando o valor: ${jogadores[0].dado}`);
}
jogadores.sort(function (a, b) {return a.vitorias - b.vitorias}).reverse();
console.log(`O maior campeão foi ${jogadores[0].name} com ${jogadores[0].vitorias} rodadas ganhas!`);
