const nomes= [
"Ana", "Beatriz", "Rafaela", "Diana", "Elisa", "Fernanda", "Gabriela", "Helena", "Isabela", "Juliana", "Arthur",
"Bruno", "Carlos", "Daniel", "Eduardo", "Fernando", "Gabriel", "Henrique", "Igor",  "João"
];

export function aleatorio(lista) {
  const posicao = Math.floor(Math.random() * lista.length);
  return lista[posicao];
}

export const nome = aleatorio(nomes);