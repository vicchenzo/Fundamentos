// Retorno de uma funçào

let pedido = {
  id: 1234,
  nome: 'João',
  email: 'joao@email.com',
  lanche: 12,
  batataFrita: 6,
  suco: 4,
};

function enviarNotificacao(nome, idPedido, email) {
  console.log(
    //simular o envio de um email
    `Enviando email para: ${email} confirmando pedido de número ${idPedido}`
  );
  console.log(`Mensagem: ${nome} pedido confirmado`);
  // não possui retorno explícito, não esta retornando nenhum valor que eu conseguiria utilizar ou armazenar em nenhum outro campo, pois a idéia dessa função é simular o envio de um email;
}

// buscando e acessando cada chave do meu objeto
enviarNotificacao(pedido.nome, pedido.id, pedido.email);

// funcao principal, vai calcular e retornar o valor do pedido
function processarPedido(id, item1, item2, item3) {
  let totalPedido = item1 + item2 + item3;
  console.log('Pedido: ' + id + ' Processado');
  console.log(`O total do pedido é: ${totalPedido}`);
  return totalPedido; //especificando o valor que deve ser devolvido dessa funcao | Encerra nossa função
}

processarPedido(pedido.id, pedido.lanche, pedido.batataFrita, pedido.suco);

// RETURN, estamos armazenando e devolvendo o valor do pedido para utilizarmos em qualquer outro lugar;

// armazenando dentro de uma variável o retorno da função;
let retornoDaFuncao = processarPedido(
  pedido.id,
  pedido.lanche,
  pedido.batataFrita,
  pedido.suco
);

console.log(retornoDaFuncao)

// feito conseguimos somar por exemplo o resultado da nossa função
console.log(retornoDaFuncao + retornoDaFuncao)
