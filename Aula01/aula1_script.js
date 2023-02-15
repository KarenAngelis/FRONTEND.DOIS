//Quando vou escrever um script separadamente via js, não preciso trazer <script> aqui, basta deixar no html que puxa tudo
console.log("aula1_script");

let nome = "Ronaldo";
console.log("Seja bem vindo " + nome);

let meuArray = ["Robson", "Ronaldo", "Gustavo", 34, false];

meuArray.push("Novo nome");
console.log(meuArray);

for (const element of meuArray) {
    console.log(element);
}

//Declarando variável textual e exibindo no console do navegador
//let nome = "Ronaldo";
//console.log("Seja bem-vindo " + nome);

//Declarando um array misto em JS
//let meuArray = ["Robson", "Ronaldo", "Gustavo", 34, false];

//Adicionado uma informação no Array
//meuArray.push("Novo nome");

//Se eu quiser puxar um nome específico?
//console.log(meuArray[2]);  -- Neste caso puxaria o nome Gustavo.

//Percorrendo o array de elementos e exibindo os valores no console

