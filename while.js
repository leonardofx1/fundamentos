function getNumeroInteiro(min, max){
    const gera = Math.random() * (max - min)+ min 
    return Math.floor(gera)
}

let opcao = -1

while (opcao != -1){
    opcao = getNumeroInteiro(-1, 10)
    console.log(`o numero gerado foi ${opcao}`)
}