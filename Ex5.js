function inverterString(s) {
    let resultado = '';
    for (let i = 0; i < s.length; i++) {
        resultado = s[i] + resultado;
    }
    return resultado;
}


const string = prompt("Informe uma texto para ser invertido: ");


const stringInvertida = inverterString(string);

console.log(`Texto original: ${string}`);
console.log(`Texto invertido: ${stringInvertida}`);