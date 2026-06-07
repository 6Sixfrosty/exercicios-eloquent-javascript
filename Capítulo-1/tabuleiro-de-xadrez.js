/*
 * Exercício: Tabuleiro de Xadrez
 *
 * Enunciado:
 *  Escreva um programa que cria uma string que representa uma grade 8×8,
 *  usando caracteres de nova linha para separar linhas. Em cada posição da
 *  grade há um espaço ou um caractere "#". Os caracteres devem formar um
 *  tabuleiro de xadrez.
 */

/*
 * Tarefa extra:
 *  Defina um binding size = 8
 *  e mude o programa para que funcione para qualquer size, produzindo uma
 *  grade da largura e altura fornecidas.
 */

// Variável que armazena a largura e altura do tabuleiro
const size = 100;
let tabuleiro = "";

// Loop que cria cada linha verticalmente baseado no valor de "size"
for (let a = 1; a <= size; a++) {
    // Loop que constrói a linha horizontalmente baseado no valor de "size"
    for (let s = 1; s <= size; s++) {
        // Verifica se a posição atual é par ou ímpar
        // e adiciona "#" ou " " se for par ou impar para formar o padrão xadrez
        if ((s + a) % 2 == 0) {
            tabuleiro += "#";
        } else {
            tabuleiro += " ";
        }
    }
    // Atribui a quebra de linha a variavel tabuleiro
    tabuleiro += "\n";
}

// Imprime o tabuleiro no console
console.log(tabuleiro);