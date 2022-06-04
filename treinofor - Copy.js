let pedido = document.getElementByid('pedido')
function fazer(){
let feito= Number(pedido.value)
if(feito < 0 ){
    window.alert ='pedido ínvalido'
}
}