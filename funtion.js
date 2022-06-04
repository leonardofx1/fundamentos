console.log(typeof(Object))//ex de funtion

class Pai{}

console.log(typeof(Pai))

function imprimiSoma(a, b){
    console.log(a + b)
}

imprimiSoma(50, 100)

function soma(a, b=5){
    console.log(a+b)
}

soma(5)
soma(8, 10)