// Coerção Implícita e Métodos de Conversão Explícita | Parte II
let numero = 123;
console.log(typeof numero)
numero = String(numero) //REATRIBUINDO STRING
console.log(typeof numero)

// Funcionalidade que transforma numero em valor de string ".toString()"
let numero2 =  45;
console.log(numero2); //TIPO NUMERO
console.log(numero2.toString()) //toString retorna uma nova string porém não altera o tipo da variável inicial.

// TRANSFORMANDO TEXTO PARA BOOLEANO
let string = "meu texto";
console.log(Boolean(string));

let num = 0;
console.log(Boolean(num)) // 0 igual false

let stringNumero = "12345";
console.log(Number(stringNumero)); //Retorna valor numérico mas não altera a variável original.
console.log(Number(string));// Retorna NaN

// MÉTODO NUMBER
let stringNumber = "6789";
console.log(typeof stringNumber); // "string"

let numeroConvertido = Number(stringNumber);
console.log(numeroConvertido); // 12345 (agora é um número)
console.log(typeof numeroConvertido); // "number"

console.log(typeof stringNumero); // "string" (a original continua sendo string)

// BOOLEANO PARA STRING
let booleano = true;
console.log(String(booleano));// Converte o valor booleano para a sua representação de string
console.log(typeof booleano)
