//salvando uma funçao em uma variavel
const multi = function(a,b){
    console.log(a * b)
}
multi(15, 2)

// ex de arrow functon
const soma = (a, b) =>{
    return a + b
}

console.log(soma(15 , 15))

// arrow mais simples
const sub = (n, c)=> n - c

console.log(sub(5, 3))

//abuso da humildade
const imprimir = v => console.log(v)

imprimir('hello world')
