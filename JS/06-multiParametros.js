// parametros

let pedido = {
  id: 1234,
  nome: 'João',
  email: 'joao@email.com',
  lanche: 12,
  batataFrita: 6,
  suco: 4,
};

// multiplos parametros;
// 3 parametros
function enviarNotificacao(nome, idPedido, email) {
  console.log(
    `Enviando email para: ${email} confirmando pedido de número ${idPedido}`
  );
  console.log(`Mensagem: ${nome} pedido confirmado`);
}

// buscando e acessando cada chave do meu objeto
enviarNotificacao(pedido.nome, pedido.id, pedido.email);

// 4 parametros
function processarPedido(id, item1, item2, item3) {
  let totalPedido = item1 + item2 + item3;
  console.log('Pedido: ' + id + ' Processado');
  console.log(`O total do pedido é: ${totalPedido}`);
  return totalPedido;
}

processarPedido(pedido.id, pedido.lanche, pedido.batataFrita, pedido.suco);

