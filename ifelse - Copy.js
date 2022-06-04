const ap = function casa(tamanho){
    if(tamanho == 'pequeno'){
        console.log('custa: 100.000 R$')
    }else if(tamanho == 'medio'){
        console.log('custa: 150.000 R$')
    }else if(tamanho == 'grande'){
        console.log('custa: 250.000 R$')
    }else{
        console.log('opçao inválida')
    }

}
ap('pequeno')
ap('grande')
ap('medio')
ap('na favela')
