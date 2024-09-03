const faturamentos = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};


const totalMensal = Object.values(faturamentos).reduce((total, valor) => total + valor, 0);


console.log("Percentual de representação de cada estado é:");
for (const [estado, valor] of Object.entries(faturamentos)) {
    const percentual = (valor / totalMensal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}