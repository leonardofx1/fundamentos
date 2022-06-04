console.log('valores que são True usando !')
// apenas ! é falso por que  é uma negaçao !! volta para true porque é 2 negaçao
console.log(!!'1')
console.log(!!1)
console.log(!!'estring vazia é falsa')
console.log(!!'{}')
console.log(!!(isAtivo=true))

console.log('ex de False')
console.log(!!0)
console.log(!!(isAvtivo=false))
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log(!!(null || 123 ||'ola'))//apenas um tem que ser verdadeiro por causa da || que siginifica ou
console.log((null || 123 ||'ola'))// retorna o primeiro valor verdadeiro que encontrar.
let vazio = ""
console.log(vazio||'hello world')