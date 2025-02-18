// Coerção Implícita: Processo pelo qual JS converte valores de um tipo para o outro.
// Essas COERÇÕES já estão automaticamente implícitas dentro dos símbolos - * quando eles verificam esse tipo de operação
console.log(5 == "5"); 
console.log("5" == 5); 
// igualdade - coercao implicita
// comparacao sempre do valor da esquerda para direita.

console.log(5 === "5");
console.log(5 + "5");
console.log("10" - 5); // 10 - 5 = 5
// Basicamente não existe como uma string diferente do + que é entendido como uma concatenação, '-' não possui nenhum tipo de propriedade que faça nossa string converter o numero 5 para uma string, agora acontece o contrário, o - faz com que o "10" se transforme num valor de número
console.log("3" * "2") // * transformou as strings em number

console.log(null == undefined)
