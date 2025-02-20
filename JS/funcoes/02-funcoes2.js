//function nomeFuncao(){Instrucao} - Sintaxe básica

//Mensagem para identificar um cadastro
function enviarMensagem() {
  console.log(`Para continuar informe seu nome para cadastro!`);
}
//chamada
// enviarMensagem();

// Cadastro de usuário
function cadastrar(nome, sobrenome) {
  console.log(`Olá ${nome} ${sobrenome}!, você foi cadastrado com sucesso!`);
}
//chamadno função
// cadastrar('Millene', 'Galetti');

// operacoes matemáticas
function banco(deposito, saque) {
  let saldo = deposito - saque; //criando uma variável para calculo do saldo
  return saldo; //devolve valor calculado
}
//chamada
// console.log(banco(1000, 60));

// FUNCAO PRINCIPAL
function main() {
  enviarMensagem();
  cadastrar('Daniel', 'Porto');
  let saldo = banco(10000, 780);
  console.log(`Saldo atual R$ ${saldo}`);
}

main();

