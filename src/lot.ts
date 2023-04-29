// valor do m2
const valorM2: number = 1000;

function formatarPreco(preco: number): string {
  // Usar o tolocalestring com esses atributos para o valor resultante sair como R$ XX,XX)
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Calculo area em m2 = largura * profundidade e
// Calculo do preco = area * valor do m2
function calculoPrecoM2(largura: number, comprimento: number) {
  const area = largura * comprimento;

  const preco: number = area * valorM2;

  return formatarPreco(preco);
}

// Pegar dados do input e atualizar o valor
const form = document.querySelector("#calculadora") as HTMLFormElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // pegar os valores dos inputs
  let largura: number = form.largura.value;
  let comprimento: number = form.comprimento.value;

  // calcular preco
  let preco = calculoPrecoM2(largura, comprimento);

  // atualizar paragrafo
  const valorElement = document.querySelector("#valor") as HTMLParagraphElement;
  valorElement.innerText = preco;
});
