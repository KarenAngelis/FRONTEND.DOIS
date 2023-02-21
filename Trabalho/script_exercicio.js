console.log("Trabalho")

//1 Papel ganha de pedra
//2 Pedra ganha de tesoura
//3 Tesoura ganha de papel

//Math.random()

// == Prompt para o jogador

let usuario = prompt("Qual a sua escolha: pedra, papel ou tesoura?");

let computador = Math.floor((Math.random() * 3 - 1 +1 ) + 1);
  if (computador < 0.34) {
	computador = "pedra";
  } else if(computador <= 0.67) {
	computador = "papel";
  } else {
	computador = "tesoura";
  } 


let compare = function(escolha1,escolha2) {
    if (escolha1 === escolha2) {
        return "Empate" + " " + "Jogue novamente." ;
    }else if (escolha1 === "pedra") {
        if   (escolha2 === "tesoura") {
            return "Pedra venceu" + "." + "Melhor de três?";
        }else{ return "Papel venceu" + "<br>" + "Tente novamente.";
        } }
    
    else if (escolha1 === "papel") {
        if (escolha2 === "pedra") {
         return "papel venceu" + "<br>" + "você beat the computer, nice job!";
        }else { return "tesoura venceu" + "<br>" + "vocêr realmente pequeno computer beat você.";
        }}
    
    else if (escolha1 === "tesoura") {
        if (escolha2 === "pedra") {
          return "pedra venceu" + "<br>" + "vocêr realmente pequeno computer beat você.";
        } else {
        return "tesoura win" + "<br>" + "você beat the computer, nice job!";
        }
    }
    } //closes compare function

    
   document.write("Escolha do robô: " + computador + "<br>");
   document.write(compare(usuario,computador));
    
    