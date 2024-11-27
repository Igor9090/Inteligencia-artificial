const nomes = [
  "Ana", "Beatriz", "Rafaela", "Diana", "Elisa", "Fernanda", "Gabriela", "Helena", "Isabela", "Juliana", "Arthur",
  "Bruno", "Carlos", "Daniel", "Eduardo", "Fernando", "Gabriel", "Henrique", "Igor", "João"
];

function aleatorio(lista) {
  const posicao = Math.floor(Math.random() * lista.length);
  return lista[posicao];
}

const nome = aleatorio(nomes);

export const perguntas = [
  {
    enunciado: "nome é um jovem de 15 anos que encontrou uma paixão no futebol e estuda linguagens de programação. nome se encontra indeciso entre as seguintes opções:",
    alternativas: [
      {
        texto: "Focar nos seus treinos de futebol e deixar os estudos de programação de lado.",
        afirmacao: [
          "nome decide se dedicar exclusivamente ao futebol, acreditando que o tempo dedicado aos treinos será essencial para seu desenvolvimento como jogador.",
          "nome sente que priorizar o futebol pode abrir portas para clubes renomados."
        ],
        proxima: 1, // Continua no fluxo de futebol
      },
      {
        texto: "Focar nos estudos de programação e deixar os treinos de futebol de lado.",
        afirmacao: [
          "nome opta por concentrar-se na programação, imaginando um futuro onde pode criar aplicativos que ajudem jogadores a melhorar suas habilidades.",
          "nome acredita que dominar programação lhe trará mais estabilidade financeira no futuro."
        ],
        proxima: 4, // Continua no fluxo de programação
      },
    ],
  },
  // FLUXO DE FUTEBOL
  {
    enunciado: "nome recebe um convite para participar de um torneio juvenil de futebol, onde terá a chance de ser observado por olheiros de grandes clubes. Qual será sua decisão?",
    alternativas: [
      {
        texto: "Aceitar o convite para o torneio.",
        afirmacao: [
          "nome decide participar do torneio, determinado a impressionar os olheiros.",
          "nome acredita que essa é sua chance de entrar em um grande clube."
        ],
        proxima: 2,
      },
      {
        texto: "Recusar o convite e continuar treinando por conta própria.",
        afirmacao: [
          "nome decide continuar treinando por conta própria, acreditando que ainda não está preparado para um torneio.",
          "nome sente que precisa melhorar suas habilidades antes de se expor."
        ],
        proxima: 3,
      },
    ],
  },
  {
    enunciado: "nome impressiona no torneio e recebe uma proposta de contrato de um clube renomado. Qual será sua decisão?",
    alternativas: [
      {
        texto: "Assinar o contrato e se tornar jogador profissional.",
        afirmacao: [
          "nome assina o contrato e começa sua jornada como jogador profissional.",
          "nome enfrenta desafios intensos e descobre o verdadeiro mundo do futebol competitivo."
        ],
        proxima: null, // Final do fluxo
      },
      {
        texto: "Recusar o contrato e continuar explorando outras opções no futebol.",
        afirmacao: [
          "nome recusa o contrato, acreditando que pode encontrar algo melhor no futuro.",
          "nome continua treinando e explorando novas oportunidades."
        ],
        proxima: null, // Final do fluxo
      },
    ],
  },
  {
    enunciado: "nome recebe um novo convite para um clube internacional. nome aceitará?",
    alternativas: [
      {
        texto: "Sim, aceitar o convite internacional.",
        afirmacao: [
          "nome decide seguir para o exterior, enfrentando novos desafios.",
          "nome percebe que essa é sua chance de se destacar em um cenário global."
        ],
        proxima: null, // Final do fluxo
      },
      {
        texto: "Não, continuar treinando no país.",
        afirmacao: [
          "nome permanece no país, acreditando que o mercado local ainda tem muito a oferecer.",
          "nome começa a treinar jovens atletas em paralelo aos seus treinos."
        ],
        proxima: null, // Final do fluxo
      },
    ],
  },
  // FLUXO DE PROGRAMAÇÃO
  {
    enunciado: "nome ingressa em um curso intensivo de programação e logo cria um protótipo de um aplicativo para jogadores. nome recebe duas ofertas: vender o projeto ou fundar sua própria startup. O que nome decide?",
    alternativas: [
      {
        texto: "Vender o projeto para uma grande empresa.",
        afirmacao: [
          "nome decide vender o protótipo, garantindo um bom retorno financeiro.",
          "nome planeja usar os recursos para continuar estudando e criando novas ideias."
        ],
        proxima: 5,
      },
      {
        texto: "Fundar sua própria startup.",
        afirmacao: [
          "nome cria sua startup, focada em soluções para atletas.",
          "nome percebe que a jornada empreendedora exige muito esforço, mas traz grandes recompensas."
        ],
        proxima: 6,
      },
    ],
  },
  {
    enunciado: "Com os recursos da venda, nome investe em um curso avançado de IA. Lá, nome desenvolve uma ferramenta inovadora para análise de dados em esportes. Qual será sua próxima etapa?",
    alternativas: [
      {
        texto: "Oferecer a ferramenta para clubes esportivos.",
        afirmacao: [
          "nome apresenta sua ferramenta para clubes, ganhando reconhecimento na área de tecnologia esportiva.",
          "nome descobre que sua paixão pela programação pode ajudar atletas a melhorar seus desempenhos."
        ],
        proxima: null,
      },
      {
        texto: "Expandir a ferramenta para outros mercados além dos esportes.",
        afirmacao: [
          "nome adapta sua ferramenta para atender outros mercados, como saúde e educação.",
          "nome se torna referência em soluções tecnológicas inovadoras."
        ],
        proxima: null,
      },
    ],
  },
  {
    enunciado: "nome enfrenta desafios como empreendedor. nome precisa decidir entre focar no crescimento da startup ou buscar parceiros estratégicos. Qual é sua escolha?",
    alternativas: [
      {
        texto: "Focar no crescimento da startup.",
        afirmacao: [
          "nome investe em expansão, contratando novos talentos e aumentando sua presença no mercado.",
          "nome descobre que liderar uma equipe traz novos desafios e aprendizados."
        ],
        proxima: null,
      },
      {
        texto: "Buscar parceiros estratégicos.",
        afirmacao: [
          "nome forma parcerias com grandes empresas, acelerando o crescimento da startup.",
          "nome percebe que trabalhar em colaboração pode gerar melhores resultados."
        ],
        proxima: null,
      },
    ],
  },
];
