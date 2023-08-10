export function mega(qtde = 6, numeros = []){
    if (qtde < 6 || qtde > 60) {
        throw "Quantidade inválida!"
    }
    if (numeros.length === qtde) {
        //O metodo sort faz a ordenação dos dados, só que deve-se passar os demais parametros para que funcione
        return numeros.sort((n1, n2)=> n1 - n2)
    }

    //Dessa forma cria um numero aleatorio de 1 a 60 com o +1 do lado, pois os numeros em si são de 0 até o limite, nesse caso até 59
    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    
    //Aqui verifica se o numero aleatorio está incluido na lista
    if (!numeros.includes(numeroAleatorio)) {
        //O ...numeros faz uma copia da lista numeros para uma nova lista. Com isso ele vai gerar novos numeros até chegar o limite
        return mega(qtde, [...numeros, numeroAleatorio])
    }else{
        return mega(qtde,numeros)
    }
}

console.log(mega(61))