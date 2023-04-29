"use strict";
// valor do m2
var valorM2 = 1000;
function formatarPreco(preco) {
    // Usar o tolocalestring com esses atributos para o valor resultante sair como R$ XX,XX)
    return preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
// Calculo area em m2 = largura * profundidade
function calculoArea(largura, comprimento) {
    return largura * comprimento;
}
// Calculo do preco = area * valor do m2
function calculoPrecoM2(area) {
    var preco = area * valorM2;
    return formatarPreco(preco);
}
// Pegar dados do input e atualizar o valor
var form = document.querySelector("#calculadora");
form.addEventListener("submit", function (element) {
    element.preventDefault();
    // pegar os valores dos inputs
    var largura = form.largura.value;
    var comprimento = form.comprimento.value;
    // calcular area
    var area = calculoArea(largura, comprimento);
    // calcular preco
    var preco = calculoPrecoM2(area);
    // atualizar paragrafo
    var valorElement = document.querySelector("#valor");
    valorElement.innerText = preco;
});
