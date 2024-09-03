function pertenceFibonacci(num) {
    if (num < 0) return false;

    let a = 0, b = 1;
    while (b < num) {
        [a, b] = [b, a + b];
    }

    return b === num;
}

const numero = parseInt(prompt("Informe um número para descobrir se ele pertence à sequêcia Fibonacci:"), 10);
if (pertenceFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}