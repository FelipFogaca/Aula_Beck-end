const readlineSync = require('readline-sync'); 
// Biblioteca que permite ler dados do terminal, ele pausa a execução do programa até a entrada de um valor.

function menu() {
    console.clear(); 
    console.log(" __________________________");
    console.log("|        Calculadora       |");
    console.log("|--------------------------|");
    console.log("| [1] - Adição             |");
    console.log("|--------------------------|");
    console.log("| [2] - Subtração          |");
    console.log("|--------------------------|");
    console.log("| [3] - Divisão            |");
    console.log("|--------------------------|");
    console.log("| [4] - Multiplicação      |");
    console.log("|--------------------------|");
    console.log("| [0] - Sair               |");
    console.log("|__________________________|");

    const operacao = readlineSync.question('Escolha uma opcao: ');

    if (operacao == '0') {
        console.log("Encerrando");
        return;
    }

    const num1 = Number(readlineSync.question('Numero 1: '));
    const num2 = Number(readlineSync.question('Numero 2: '));
//readlineSync.question é o método da biblioteca realine-sync do Node para ler dados.


    switch (operacao) {
        case "1":
            console.log("O resultado da soma é " + (num1 + num2));
            break;

        case "2":
            console.log("O resultado da subtração é " + (num1 - num2));
            break;

        case "3":
            console.log("O resultado da divisão é " + (num1 / num2));
            break;

        case "4":
            console.log("O resultado da multiplicação é " + (num1 * num2));
            break;
        default:
            console.log("Opção inválida");
    }
    readlineSync.question('Pressione Enter para continuar');
    menu();
}

menu();
