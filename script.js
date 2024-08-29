const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Cristiano Ronaldo Jr é um jovem de 15 anos que encontrou uma paixão no futebol e estuda linguagens de programação. Ele se encontra indeciso entre as seguintes opções:",
        alternativas: [
            {
                texto: "Focar nos seus treinos de futebol e deixar os estudos de programação de lado.",
                afirmacao: "Cristiano decide se dedicar exclusivamente ao futebol, acreditando que o tempo dedicado aos treinos será essencial para seu desenvolvimento como jogador."
            },
            {
                texto: "Focar nos estudos de programação e deixar os treinos de futebol de lado.",
                afirmacao: "Cristiano opta por concentrar-se na programação, imaginando um futuro onde pode criar aplicativos que ajudem jogadores a melhorar suas habilidades."
            }
        ]
    },
    {
        enunciado: "Após tomar sua decisão inicial, Cristiano recebe um convite para participar de um torneio juvenil de futebol, mas também é aceito em um curso intensivo de programação para jovens talentos. Ele deve escolher:",
        alternativas: [
            {
                texto: "Participar do torneio de futebol, onde terá a chance de ser observado por olheiros de grandes clubes.",
                afirmacao: "Cristiano decide participar do torneio, focado em impressionar os olheiros com suas habilidades em campo."
            },
            {
                texto: "Frequentar o curso intensivo de programação, que lhe dará uma base sólida para projetos futuros.",
                afirmacao: "Cristiano escolhe o curso de programação, decidido a desenvolver seu conhecimento em tecnologia e inovação."
            }
        ]
    },
    {
        enunciado: "Durante o torneio/curso, Cristiano recebe uma oferta tentadora: um clube de futebol de elite quer que ele se junte a eles imediatamente, mas a escola de programação também oferece uma bolsa para um programa avançado. Qual caminho ele deve seguir?",
        alternativas: [
            {
                texto: "Assinar com o clube de futebol de elite e seguir sua carreira de jogador profissional.",
                afirmacao: "Cristiano assina com o clube e começa sua jornada para se tornar um jogador profissional, enfrentando desafios intensos e treinamentos rigorosos."
            },
            {
                texto: "Aceitar a bolsa para o programa avançado de programação, onde ele pode explorar seu lado criativo e inovador.",
                afirmacao: "Cristiano aceita a bolsa de estudos e se mergulha no mundo da programação avançada, criando novas oportunidades para o futuro."
            }
        ]
    },
    {
        enunciado: "Já estabelecido em sua nova jornada, Cristiano é confrontado com um desafio inesperado: um projeto importante de programação entra em conflito com uma final de campeonato de futebol. Como ele deve lidar com essa situação?",
        alternativas: [
            {
                texto: "Priorizar a final do campeonato, acreditando que é uma oportunidade única para sua carreira esportiva.",
                afirmacao: "Cristiano se prepara para a final do campeonato, determinado a vencer e mostrar seu valor em campo."
            },
            {
                texto: "Concentrar-se no projeto de programação, que pode ser um trampolim para futuras inovações tecnológicas.",
                afirmacao: "Cristiano decide focar no projeto, acreditando que sua criatividade e habilidades tecnológicas podem fazer a diferença."
            }
        ]
    },
    {
        enunciado: "Após tomar sua decisão final, Cristiano reflete sobre suas escolhas. Ele é abordado por um mentor que oferece uma terceira via: combinar seu amor pelo futebol com a programação e criar um aplicativo revolucionário para jogadores de futebol. O que ele faz?",
        alternativas: [
            {
                texto: "Aceita o desafio de criar o aplicativo, unindo suas duas paixões e criando algo único.",
                afirmacao: "Cristiano começa a desenvolver o aplicativo, unindo seu conhecimento de futebol e programação para ajudar outros jogadores a melhorar suas habilidades."
            },
            {
                texto: "Decide focar completamente em sua carreira atual, acreditando que especialização é a chave para o sucesso.",
                afirmacao: "Cristiano escolhe se dedicar completamente ao seu campo atual, seja ele futebol ou programação, para se tornar o melhor no que faz."
            }
        ]
    }
];

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
    caixaAlternativas.textContent = "";
    mostrarAlternativas();
}

function mostrarAlternativas() {
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click" , () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
};

function respostaSelecionada(opcoesSelecionadas){
    const afirmacoes = opcoesSelecionadas.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostrarPergunta();
}

function mostrarResultado() {
    caixaPerguntas.textContent = "Logo..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostrarPergunta();