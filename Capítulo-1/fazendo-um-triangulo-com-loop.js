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
 
// Inicializando o loop com uma variavel "a" para contar 7 execuções
for (let a = 0; a < 7; a++) {
    // imprimir no console o caractere
    console.log(char);
    // a cada interação do loop e incrementado o caractere
    char += "#"
}
