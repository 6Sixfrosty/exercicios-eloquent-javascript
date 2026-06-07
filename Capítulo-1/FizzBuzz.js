/*
 * Exercício: Fizz Buzz
 * Enunciado: Escreva um programa que use console.log para imprimir todos os
 * números de 1 a 100, com duas exceções. Para números divisíveis por 3,
 * imprima "Fizz" em vez do número, e para números divisíveis por 5 (e não
 * por 3), imprima "Buzz" em vez do número.
 */

// Inicializando loop com variável que armazena os números.
// A cada iteração é incrementado +1 à variável.
for (let a = 1; a <= 100; a++) {
    /*
     * Variável que armazena o resultado da verificação por 3 e 5.
     * Atenção: reinicia a cada iteração.
     */
    let resultado = "";
    /*
     * Estruturas condicionais para avaliar se o número da iteração atual
     * é divisível por 3 ou 5.
     */
    if (a % 3 === 0) resultado += "Fizz";
    if (a % 5 === 0) resultado += "Buzz";
    // Imprime "Fizz", "Buzz", "FizzBuzz" ou o número da iteração atual.
    console.log(resultado || a);
}