export function mega(quantidade = 6, numeros = []) {
   //Dessa forma estamos convertendo uma string para 
   let qtde = +quantidade
    
   if (qtde < 6 || qtde > 60) {
      throw "Quantidade inválida!"
    }
    // Caso base: Se a quantidade desejada de números foi atingida, ordenar e retornar a lista
    if (numeros.length === qtde) {
      return numeros.sort((n1, n2) => n1 - n2)
    }
    
    // Gera um número aleatório de 1 a 60
    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    
    // Verifica se o número aleatório já foi gerado
    if (!numeros.includes(numeroAleatorio)) {
      // Adiciona o número aleatório à lista e continua gerando
      return mega(qtde, [...numeros, numeroAleatorio])
    }
    
    // Número aleatório já foi gerado, tentar novamente
    else {
        return mega(qtde, numeros)
    }
  }
  