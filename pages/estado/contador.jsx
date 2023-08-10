<<<<<<< HEAD
import NumeroDisplay from "@/components/NumeroDisplay";
import { useState } from "react";
=======
import {useState} from 'react'
import ContadorDisplay from '@/components/ContadorDisplay'

>>>>>>> f7596e43830f6c5694f37af59d06829308185d3f

export default function contador() {
  const [numero, setNumero] = useState(0);
  const botao = {
    width: 50,
    heigth: 60,
    margin: 5,
    alignItens: "center",
  };

<<<<<<< HEAD
  // function inc(){
  //     setNumero(numero + 1 )
  // }
=======
    const botao = {
        width: 30,
        heigth: 50,
        margin: 10, 
        alignItens: 'center',
    }
>>>>>>> f7596e43830f6c5694f37af59d06829308185d3f

  //Com ArrowFunction

  // function dec(){
  //     setNumero(numero - 1 )
  // }
  //Opcao de uma linha somente
  const dec = () => setNumero(numero - 1);

<<<<<<< HEAD
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Contador</h1>
      <NumeroDisplay numero={numero} />
      <div>
        <button onClick={dec} style={botao}>
          {" "}
          -{" "}
        </button>
        <button onClick={() => setNumero(numero + 1)} style={botao}>
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
=======

    const [numero, setNumero] = useState(0)
    return (
        <div style={{
            display: "flex",
            flexDirection: "column", 
            justifyContent: "center",
            alignItems: "center",

        }}>
            <h1>Contador</h1>
            {/*<div>Valor: {numero}</div>*/}
            <ContadorDisplay numero={numero}/>
            <div>
                <button onClick={dec} style={botao}> - </button>
                <button onClick={inc} style={botao}> + </button>
            </div>
        </div>
    )
>>>>>>> f7596e43830f6c5694f37af59d06829308185d3f
}
