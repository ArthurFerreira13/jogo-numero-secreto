function imc(peso, altura) {
    return peso / (altura * altura);
}
console.log(parseInt(imc(70, 1.75))); // Exemplo de uso
function fator(n) {
    if (n === 0) {
        return 1;
    }
    return n * fator(n - 1);
}       
console.log(fator(5)); // Exemplo de uso
function converterDolarParaReal(dolar) {
    const cotacao = 5.40; // Exemplo de cotação do dólar
    return dolar * cotacao;
}
console.log(converterDolarParaReal(10)); // Exemplo de uso

function areaDoRetangulo(base, altura) {
    return base * altura;
}   
console.log(areaDoRetangulo(5, 10)); // Exemplo de uso
function areCirculo(raio) {
    return Math.PI * raio * raio;
}
console.log(areCirculo(3)); // Exemplo de uso

function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
console.log(tabuada(5)); // Exemplo de uso

let numero = [1,2,3,4,5,6,7,8,9,10];
let valor = numero[numero.length - 1];
console.log(valor); // Exemplo de uso
