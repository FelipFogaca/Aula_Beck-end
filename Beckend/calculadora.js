function soma(a, b){
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

function divisao(a, b){
    return a / b;
}

function multiplicacao(a, b){
    return a * b;
}

const operacao = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);


switch (operacao){
    case "soma":
    console.log(("O resultado da soma é "+ soma(num1,num2)));
    break;

    case "subtracao":
        console.log(("O resultado da subtração é " + subtracao(num1,num2)));
        break;
    
    case "divisao":
        console.log(("O resultado da divisão é " + divisao(num1,num2)));
        break;

    case "multiplicacao":
        console.log(("O resultado da multiplicação é " + multiplicacao(num1,num2)));
        break;
}