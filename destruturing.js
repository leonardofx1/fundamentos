const casa = {
    numero: 25,
    Rua: 'Rua Vinte De Outubro',
    cor: 'red && blue',
    dono:{
        nome:'leo',
        idade: 22

    }
}

const {dono: nome,idade}= casa
console.log(idade, nome)
const {numero, Rua, cor}= casa
console.log(numero, Rua, cor)