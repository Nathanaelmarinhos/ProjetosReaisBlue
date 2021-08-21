console.log("----------------------------")
console.log("Olá. Vamos jogar um jogo!");
console.log("----------------------------")
let s = ("S");
let n = ("N");
let soma = 0;

//while vai fazer um loop no código e cada vez que identificar o (soma ++ ele vai dar um ponto p/ a variável soma)

while (true){
    t = prompt("1-Você telefonou pra a vítima? [S/N]\n");
    if (t == s){
        soma ++;
        console.log("Beleza. Mais uma pergunta.")
    }   else {
        console.log("Hmmm. Entendi!")
  } 
    e = prompt("Esteve no local do crime? [S/N]\n");
    if (e == s){
        console.log("Beleza. Mais uma pergunta.")
        soma ++;
    }   else {
        console.log("Hmmm. Entendi!") 
  }
    f = prompt("Mora perto da vítima? [S/N]\n");
    if (f == s){
        console.log("Beleza. Mais uma pergunta.")
        soma ++;
    }   else {
        console.log("Hmmm. Entendi!") 
  }
    g = prompt("Devia para a vítima? [S/N]\n");
    if (g == s){
        console.log("Beleza. Só mais uma pergunta.")
        soma ++;
  }     else {
        console.log("Hmmm. Entendi!")  
  }
    h = prompt("Já trabalhou com a vítima? [S/N]\n");
    if (h == s){
        console.log("Espere um momento.\n")
        soma ++;
  }     else {
        console.log("Hmmm. Entendi!") 
  }
//esse comando para o while na linha 9 para não rodar em loop infinito
  break;
}
    console.log(`Sua pontuação final é: ${soma}`)
    
    if(soma === 2){
    console.log("Você é suspeito.")
  } else if(soma === 3){  
    console.log("Você é cúmplice.")
  } else if(soma === 4){  
   console.log("Você é cúmplice.")
  } else if(soma === 5){
    console.log("Assassino!!! Você está preso!")
  } else if (soma === 0 && 1){
   console.log("Você é inocente!")
  } else if (soma === 1){
    console.log("Você é inocente!")
 } 
