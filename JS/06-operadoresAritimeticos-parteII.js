// Adição e subtração - Multiplicação * divisão / modulo % inversão de sinal/negativo

//Operadores aritiméticos avançados
//Operador de exponenciação [**]
let base = 2;
let expoente = 3;
let resultado = base ** expoente; // 2*2*2 = 2³ = 8
console.log(`2³ = ${resultado}`)

// Incremento | Aumenta Valor ++ (adiciona o valor 1)
// Decremento | Diminui Valor -- (diminui o vaulor 1)
console.log('Incremento ++')
let controle = 0; // Aqui declaro minha variável
console.log(`Incremento a variável: ${controle++}`); // Incremento minha variável
console.log(`Mostrando variável incrementada: ${controle}`); // aqui eu mostro minha variável declarada
console.log(`Incremento novamente: ${controle++}`); // Neste caso '1' repete a operação
console.log(`Mostrando novamente: ${controle}`) // Aqui já esta incrementada

console.log('\nDecremento --')
let x = 0; // Aqui declaro minha variável
console.log(`Decremento a variável: ${x--}`); // Incremento minha variável
console.log(`Mostrando Decremento: ${x}`); // aqui eu mostro minha variável declarada
console.log(`Decremento novamente: ${x--}`) // Neste caso '1' repete a operação
console.log(`Mostrando novamente: ${x}`) // Aqui já esta incrementada

//Pré Incremento // Decremento
let b = 0;
console.log('\nPré Incremento')
console.log(++b); // Da primeira vez ele vinha zero, porém agora ele já incrementa;
console.log(++b);
console.log(++b);
console.log(++b);

console.log('\nPré Decremento');
console.log(--b)
console.log(--b)
console.log(--b)
console.log(--b)

