console.log("Trabalho")   

let vencedorRodada1 = 0;
let vencedorRodada2 = 0;
let rodada = 0 ;
let empate = 0;
    do  {

      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      
    let jogador1 = prompt("Jogador 1: Digite Pedra =1, Papel=2 ou Tesoura=3");
    let  jogador2 = getRandomIntInclusive(1, 3);
    let valorConvertido = parseInt(jogador1);

    if (valorConvertido == 1) { // Pedra
      if (jogador2 == 3) {
        rodada ++;
        vencedorRodada1 ++;
        alert("Pedra quebra tesoura: Pedra venceu!");

      } else if (jogador2 == 2) {
        rodada ++;
        vencedorRodada2 ++;
        alert("Papel envolve a Pedra: Papel venceu!");
        
      } else if (jogador2 == 1) {
        empate ++;
        rodada ++;
        alert("Empate, jogue novamente!");
      }
    }
    else if (valorConvertido == 3) { // Tesoura
      if (jogador2 == 1) {
        rodada ++;
        vencedorRodada2 ++;
        alert("Pedra quebra tesoura: Pedra venceu!");
      } else if (jogador2 == 2) {
        rodada ++;
        vencedorRodada1 ++;
        alert("tesoura corta papel: Tesoura venceu!");
      } else if (jogadoe2 == 3) {
        rodada ++;
        alert("Empate, jogue novamente!");
      }
    }

    else if (valorConvertido == 2) { //Papel
      if (jogador2 == 1) {
        rodada ++;
        vencedorRodada1 ++;
        alert("Papel envolve pedra: Papel venceu!");
      } else if (jogador2 == 3) {
        rodada ++;
        vencedorRodada2 ++;
        alert("Tesoura corta papel: Tesoura venceu!");
      } else if (jogador2 == 2) {
        rodada ++;
        alert("Empate, jogue novamente!");
      }

    }


} while ((vencedorRodada1||vencedorRodada2)<3);


console.log(vencedorRodada1);
console.log(vencedorRodada2);
console.log(empate);
console.log(rodada);

