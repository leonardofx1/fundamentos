const peso1 = 1.0
const peso2 = Number('2.5' )//transforma um numero que esta em forma de string em Number
console.log('calculando as medias')
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))//confere se é um numero inteiro
const nota1 = 8
const nota2 = 5 
let total = nota1 *peso1 + nota2 * peso2 
let media = total / (peso1 + peso2)
console.log(media.toString(2))// mudou para Binario 
console.log(media.toFixed(2))//formata a soma, podemos escolher a quantidade de casa decimais