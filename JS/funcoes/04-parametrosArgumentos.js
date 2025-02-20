// function nomeFuncao (PARÂMETRO) { instrucao }
function soma(a, b) {
  //construimos a funcao com parâmetro
  console.log(a + b);
}
//nomeFunction(ARGUMENTO) - Chamada da função (executa o bloco de instrução)
soma(1, 2); //dentro estão os dois argumentos que vao preencher a nossa funcao

function calcularPreco(precoUnitario, quantidade) {
  let total = precoUnitario * quantidade;
  console.log(`Total da sua compra ${total}`);
}
//chamada
let camiseta = 30;
let quantidadeItem = 3;

calcularPreco(30, 3); // adicionando argumento dentro da funcao
calcularPreco(camiseta, quantidadeItem); // adicionando valores reais armazenados dentro da minha variável
//parametro: dado que a funcao vai precisar para funcionar;
//valor real: argumentos que estao guardados dentro das minhas variáveis;

