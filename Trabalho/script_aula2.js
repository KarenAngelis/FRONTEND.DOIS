console.log("Aula 2")

newFunction();

function newFunction() {
  do {
    while (true) {
      jogador1 = prompt("Jogador 1: Digite pedra, papel ou tesoura");
      jogador2 = prompt("Jogador 2: Digite pedra, papel ou tesoura");

      if (jogador1 == "pedra") {
        if (jogador2 == "tesoura") {
          alert("Pedra quebra tesoura: Pedra venceu!");
        } else if (jogador2 == "papel") {
          alert("Papel envolve a Pedra: Papel venceu!");
        } else if (jogador2 == "pedra") {
          alert("Empate, jogue novamente!");
        }
      }
      else if (jogador1 == "tesoura") {
        if (jogador2 == "pedra") {
          alert("Pedra quebra tesoura: Pedra venceu!");
        } else if (jogador2 == "papel") {
          alert("tesoura corta papel: Tsoura venceu!");
        } else if (jogadoe2 == "tesoura") {
          alert("Empate, jogue novamente!");
        }
      }

      else if (jogador1 == "papel") {
        if (jogador2 == "pedra") {
          alert("Papel envolve pedra: Papel venceu!");
        } else if (jogador2 == "tesoura") {
          alert("Tesoura corta papel: Tesoura venceu!");
        } else if (jogador2 == "papel") {
          alert("Empate, jogue novamente!");
        }

      }

    }


  } while (condition);
}