const func = []
for( var a = 0; a < 10; a++ ){//let 
    func.push(function (){
        console.log(a)
    })
}
func[2]()