import { aleatorio, nome } from "./aleatorio.js";
import { perguntas } from "./perguntas.js";

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoReiniciar = document.querySelector(".restart-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

botaoIniciar.addEventListener('click', iniciaJogo);
botaoReiniciar.addEventListener('click', reiniciarJogo);

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPergunta() {
  if (atual >= perguntas.length) {
    mostrarResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.innerHTML = ""; // Limpa alternativas anteriores
  mostrarAlternativas();
}

function iniciaJogo() {
  atual = 0;
  historiaFinal = '';

  telaInicial.style.display = 'none';
  caixaPerguntas.classList.remove("mostrar");
  caixaAlternativas.classList.add("mostrar");
  caixaResultado.classList.remove("mostrar");

  mostrarPergunta();
}

function mostrarAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(opcoesSelecionadas) {
  const afirmacoes = aleatorio(opcoesSelecionadas.afirmacao);
  historiaFinal += afirmacoes + " ";
  
  if (opcoesSelecionadas.proxima !== null) {
    atual = opcoesSelecionadas.proxima;
  } else {
    mostrarResultado();
    return;
  }

  mostrarPergunta();
}

function mostrarResultado() {
  caixaPerguntas.textContent = ``;
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.innerHTML = ""; 
  caixaResultado.classList.add("mostrar");
}

function reiniciarJogo() {
  
  caixaResultado.classList.remove("mostrar");
  telaInicial.style.display = 'block';
  
  caixaPerguntas.classList.remove("mostrar");
  caixaAlternativas.classList.remove("mostrar");
  historiaFinal = ''; 
  atual = 0; 
}

export function substituirNomes() {
  for (const pergunta of perguntas) {
    pergunta.enunciado = pergunta.enunciado.replace(/nome/g, nome);
    for (const alternativa of pergunta.alternativas) {
      alternativa.afirmacao = alternativa.afirmacao.map((texto) =>
        texto.replace(/nome/g, nome)
      );
    }
  }
}

substituirNomes(); 
