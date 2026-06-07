/*
 * Exercício: Tabuleiro de Xadrez
 *
 * Enunciado:
 *  Escreva um programa que cria uma string que representa uma grade 8×8,
 *  usando caracteres de nova linha para separar linhas. Em cada posição da
 *  grade há um espaço ou um caractere "#". Os caracteres devem formar um
 *  tabuleiro de xadrez.
 */


// Loop que imprime por linhas
for (let a = 1; a <= 8; a++) {
    // Loop que constroi cada linha com "#" ou " "
    for (let s = ""; s.length < 8;) {
        // condicional que verifica se a iteração atual e par ou impar 
        // e adiciona "#" caso o resultado do tamanho de "s"(string da linha) + a(contador do loop pai) seja par
        if ((s.length + a) % 2 == 0) {
            s += "#";
        } else {
        // adiciona " " caso seja impar
            s += " ";
        }
        // imprime no console a linha completa, caso já tenha chegado ao seu tamanho total de caracteres
        if (s.length == 8) console.log(s);
    }
}