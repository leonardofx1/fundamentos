var numero = 150
let valor = 105
{
    var numero = 200
    console.log(numero)
    let valor = 100
    console.log('let dentro' + valor)
}
console.log('let fora' + valor)
console.log(numero)
/* nao sei se da certo
function calculadora(){
    const soma = (valor, valor1)=> console.log(valor + valor1)
   const  sub = (valor, valor1)=> console.log(valor - valor1)
}
soma(5, 10)*/