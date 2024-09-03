const fs = require('fs');

function analisaFaturamento(faturamentos) {
    const valores = faturamentos.map(f => f.faturamento).filter(f => f > 0);
    const menorFaturamento = Math.min(...valores);
    const maiorFaturamento = Math.max(...valores);
    const mediaMensal = valores.reduce((sum, valor) => sum + valor, 0) / valores.length;
    const diasAcimaMedia = valores.filter(valor => valor > mediaMensal).length;
    
    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaMedia
    };
}

fs.readFile('faturamento.json', 'utf8', (err, data) => {

    const faturamentos = JSON.parse(data);
    const resultados = analisaFaturamento(faturamentos);
    
    console.log(`O menor valor do faturamento é: ${resultados.menorFaturamento}`);
    console.log(`O maior valor do faturamento é: ${resultados.maiorFaturamento}`);
    console.log(`O número de dias acima da média mensal é: ${resultados.diasAcimaMedia}`);
});
