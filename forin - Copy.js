const lista = ['leo', 'taty', 'marcos', 'neto']
for(let i in lista){
    console.log(i, lista[i])
}

const Pessoa={
    nome: 'taty',
    idade:  27,
    cor:'branca',
    cabelo:'Ruivo',
}
for(let atributos in Pessoa){
    console.log(`${atributos} = ${Pessoa[atributos]}`)
}