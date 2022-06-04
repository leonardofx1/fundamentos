function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

const naime = new Pessoa('leonardo', 22)
console.log(naime.idade)
const cliente = new Pessoa('tatyane', 27)
console.log(cliente.nome)
console.log(naime.nome)