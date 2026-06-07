/*
 * Exercício: Fizz Buzz
 * Enunciado: Escreva um programa que use console.log para imprimir todos os
 * números de 1 a 100, com duas exceções. Para números divisíveis por 3,
 * imprima "Fizz" em vez do número, e para números divisíveis por 5 (e não
 * por 3), imprima "Buzz" em vez do número.
 */

// Inicializando loop com variavel que armazena os numeros.
// A cada interação e incrementando (+1) a variavel.
for (let a = 1; a <= 100; a++){
    /* 
    * Inicializada variavel que armazena o resultado da divisão por 3 e 5.
    * Atenção!!!, essa variavel reinicia a cada interação.
    */
    let resultado = ""
    /* 
    * Estruturas condicionais para avaliar se o numero da atual interação
    * e divisivel por 3 ou 5.
    */
    if (a % 3 == 0) resultado += "Fizz";
    if (a % 5 == 0) resultado += "Buzz";
    // Imprime no console a variavel resultado, caso alguma das condicionais resultar em verdadeiro
    // Caso o número atual não seja nem Fizz ou Buzz, imprima o número da interação atual
    console.log(resultado || a);
}