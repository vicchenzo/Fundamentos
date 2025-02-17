// Tipos Primitivos: 
// String: tudo que for um caracter é considerado uma string, temos tres formas:
/* 
"texto" - string
'criar mensagem' - string 
`cria mais um texto` - string template
*/

let mensagem = "olá, ";
let nome = 'Paulo';
let mensagem3 = 'bem bindo ao curso!'
let mensagem2 = `olá, ${nome}. ${mensagem3}`;//neste formato a string consegue fazer uma interpolação com variáveis, ou seja, consigo utilizar dentro do meu texto a variável que eu desejo para mostrar esse valor a ela

console.log(mensagem + nome + '. bem vindo ao curso!');
console.log(mensagem2);// resultado da interpolação das variaveis

// String segundo professora é imutavel, ela não consegue ser alterada, porém podemos manipula-la
// Indice: quando quisermos percorrer um 'caminho de letras' nós estamos falando de índice, assim cada letra tem um índice
// P A U L O 
// 0 1 2 3 4 Indice sempre começa em = 0
console.log(nome[0])// retorna primeira letra da variavel
console.log(nome[0] = 'Q')// fazendo atribuicao para letra, apenas imprimindo uma atribuicao
console.log(nome)// ainda assim vem como 'Paulo'

//EXPLICANDO SITUAÇÃO ACIMA:
//Professora explica que criamos uma string 'Q' porem ele não está armazenado em nenhum lugar, porque ele nao consegue alterar esse nome que é nossa variável inicial, ele apenas trás um console.log() de uma atribuicao

//NUMBERS:
// vao apresentar valores numéricos em js, podem ser 'inteiros'; 'positivos'; 'negativos'; 'decimais'

let numero = 30;
let numero1 = -56;
let decimal = 6.78;
console.log(numero, numero1, decimal)

// numeros especias: Infinity e NaN (Not a Number)

let string = '10'; //texto 
let dez = 10;// numero
console.log(string + ' ' + dez)// quando quisermos concatenar, fazer essa atribuição entre valores, ele converte tudo isso a string
console.log(`${string} e ${dez}`)// ele também nos trás o valor de dez como string, porém, sabemos que estamos manipulando um número;

console.log("formatando pelo prettier")
