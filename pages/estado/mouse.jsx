import {useState} from 'react'

export default function mouse() {

    //Essa é uma alternativa de usar o useState
//    const arrayX = useState(0)
//    let x = arrayX[0]
//    const alterarX = arrayX[1] 

//Aqui vai outra, considero mais adequada e elegante

const [x, alterarX] = useState(0)

   const arrayY = useState(0)
   let y = arrayY[0]
   const alterarY = arrayY[1]

  const estilo = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh",
  };

  function quandoMover(ev){
    alterarX(ev.clientX) 
    alterarY(ev.clientY)

  }


  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <span>Eixo X: {x}</span>
      <span>Eixo Y: {y}</span>
    </div>
  );
}
