export default function repeticao() {
  const listaAprovados = [
    "João",
    "Maria",
    "Ana",
    "Bia",
    "Carlos",
    "Daniel",
    "Laura",
  ];

  function rendenizaLista() {
    //Usando o map com arrow function
  //  return listaAprovados.map((nome,i) => <li key={i}>{nome}</li>)
    
  //Aqui com funcao anonima.
  return listaAprovados.map(function(nome, i){
        return <li key={i}>{nome}</li>
    })    
    
    
    // return (
    //   <>
    //     <li>Elemento #01</li>
    //     <li>Elemento #02</li>
    //     <li>Elemento #03</li>
    //     <li>Elemento #04</li>
    //   </>
    // )
  }

  return (
            <ul>
                {rendenizaLista()}
        </ul>
  )
}


//uma alternativa
// function rendenizaLista() {
//     //Percorrendo a lista de uma forma bem manual
//     const itens = []

//     //Com o push colocamos os itens dentro da lista.
//     for (let i = 0; i < listaAprovados.length; i++) {
//         itens.push(<li key={i}>{listaAprovados[i]}</li>)
        
//     }
//     return itens
