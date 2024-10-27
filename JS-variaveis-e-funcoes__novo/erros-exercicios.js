const texto = 'Olá, mundo!';
const numero = 42;
const booleano = true;

console.log(typeof texto); // String
console.log(typeof numero); // Number
console.log(typeof booleano); // Boolean
console.log("_____________________________________")
//exercicio 2
const primeiroNome = 'Murilo';
const ultimoNome = 'Freitas de Souza';

// Usando o operador +
const nomeCompletoConcatenado = primeiroNome + ' ' + ultimoNome;
console.log('Usando operador +: ', nomeCompletoConcatenado);

// Usando template strings
const nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`;
console.log(`Usando template strings: ${nomeCompletoTemplate}`);

console.log("_____________________________________")
//exercicio 3

const string = 'universo';

const texto3 = `${numero} é a resposta para a pergunta mais importante do ${string}`;
console.log(texto3);
console.log("_____________________________________")
//exercicio 4
let minhaVariavel = 'Primeiro valor';
console.log(minhaVariavel);

minhaVariavel= 'Novo valor';
console.log(minhaVariavel);

console.log("_____________________________________")
//exercicio 5
var fora = 'Fora do bloco';

if (true) {
    var dentro = 'Dentro do bloco';
    console.log(fora); // retorna 'Fora do bloco'
    console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // retorna 'Dentro do bloco'

/////////////////////


if (true) {
    let dentro = 'Dentro do bloco';
    console.log(fora); // retorna 'Fora do bloco'
    console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // erro 'dentro is not defined'
console.log("_____________________________________")
//exercicio 6
const estaChovendo = false;

if (estaChovendo) {
    console.log('É melhor levar um guarda-chuva!');
} else {
    console.log('O tempo está bom, sem necessidade de guarda-chuva.');
}