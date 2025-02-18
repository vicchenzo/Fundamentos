/*Exercício 1: 
Você tem um produto que custa R$ 200,00 e recebeu um desconto de R$ 40,00.
 Além disso, há um imposto de R$ 12,00 sobre o preço com desconto. Calcule o preço final do
 produto após aplicar o desconto e o imposto 
Exemplo de Saída: -> “Preço final do produto: R$ 172
 */

let produto = 200;
let desconto = 40;
let imposto = 12;

const precoDesconto = produto - desconto; //Aplicamos um desconto em cima do produto
const precoFinal = precoDesconto + imposto; // Depois aplicamos o imposto

console.log(`Preço final do produto é de R$ ${precoFinal}`);

/* Exercício 2: 
Você comprou um produto por R$ 100,00 e deseja vender com um lucro adicional
 de R$ 30,00. Calcule o preço de venda do produto.
Exemplo de Saída: -> “Preço de venda do produto: R$ 130 */

compra = 100;
lucro = 1.3;
precoVenda = compra * lucro

console.log(`Preço de venda do produto R$ ${precoVenda},00`)

/* Exercício 3: Você tem um orçamento de R$ 250,00 e deseja verificar se o custo de um
 produto, após aplicar um desconto de R$ 50,00, está dentro do orçamento. O custo do produto
 é R$300,00.
 Exemplo de Saída: -> “Preço com desconto: R$ 250” e “Está dentro do orçamento? True” */
orcamento = 250;
desconto = 50;
valorTotal = 300;
precoComDesconto = valorTotal - desconto
orcamentoOk = precoComDesconto <= orcamento // valor com desconto é <= ao meu orçamento?

console.log(`Preço com Desconto: R$ ${precoComDesconto} está dentro do orçamento? ${orcamentoOk}`)

/*Exercício 4:
Você tem duas variáveis, uma que representa a quantidade de produtos em um
estoque como uma string ("20") e outra que representa a quantidade mínima necessária de
produtos no estoque como um número (20). Verifique se a quantidade atual de produtos é
suficiente (igual ou maior que a quantidade mínima necessária) após converter a string para um
número. Imprima no console se a quantidade é suficiente ou não.
Exemplo de Saída: -> “A quantidade no estoque é suficiente: true */

let quantidadeEstoqueString = "20" 
let quantidadeMinEstoque = 20

let quantidadeEstoque = Number(quantidadeEstoqueString) // Conversão de string para number
console.log(typeof quantidadeEstoque) // verificação conversão

// verificação de igualdade estrita
let suficiente = quantidadeEstoque === quantidadeMinEstoque 
console.log(`A quantidade no estoque é suficiente: ${suficiente}`);

/* Exercício 5: Você tem três variáveis: uma que representa se um produto está disponível como
 umbooleano (true), outra que representa a quantidade de produtos no estoque (10), e uma
 terceira que representa a quantidade mínima necessária de produtos no estoque (15). Verifique
 se o produto está disponível e se a quantidade é suficiente (igual ou maior que a quantidade
 mínima necessária) usando operadores lógicos NOT e AND. Imprima no console se o produto
 está disponível e tem a quantidade suficiente.
 -> Exemplo de Saída: “'O produto está disponível e tem quantidade suficiente: false” e “'O
 produto está indisponível: false */

let produtoDisponivel = true;
let estoque1 = 10;
let qtdMin = 15;

// verificação de disponibilidade e quantidade 
let quantidadeSuficiente = estoque1 >= qtdMin
let produtoDisponivelSuficiente = produtoDisponivel && quantidadeSuficiente

console.log(`Produto está disponível e tem quantidade suficiente: ${produtoDisponivelSuficiente}`)

//NOT - Verificação o produto está disponível
let produtoIndisponivel = !produtoDisponivel;
console.log(`O produto está indisponível: ${produtoDisponivel}`)
