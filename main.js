const nomes = [“Ana”, “Fernanda”, “Maria Eduarda”,
“Marcelo”, “Amanda”, “Gustavo”, “Gabrielconst nomes = [“Ana”, “Fernanda”, “Maria Eduarda”,
“Marcelo”, “Amanda”, “Gustavo”, “Gabriel”];

export function aleatorio (lista){
const posicao = Math.floor(Math.random()* lista.length);
return lista[posicao];
}
export const nome = aleatorio(nomesimport { aleatorio, nome } from ‘./aleatorio.js’;function mostraResultado() {
caixaPerguntas.textContent = `Em 2049, ${nomefunction substituiNome() {
for (const pergunta of perguntas) {
pergunta.enunciado = pergunta.enunciado.replace(/você/g,
nomefunction substituiNome() {
for (const pergunta of perguntas) {
pergunta.enunciado = pergunta.enunciado.replace(/você/g,
nome);
}
}
substituiNome();
mostraPergunta();
