/*
 * Exercício: Fazendo um Triângulo
 * Enunciado: Escreva um loop que faça sete chamadas a console.log
 * para exibir o seguinte triângulo:
    #
    ##
    ###
    ####
    #####
    ######
    #######
 */

// Declarando a variável que vai ser utilizada e o caractere que vai ser utilizado
let char = "#";
for (let a = 0; a < 7; a++) {
    console.log(char);
    char += "#"
}
