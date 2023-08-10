import NumeroDisplay from "@/components/NumeroDisplay";
import { useState } from "react";

export default function contador() {
  const [numero, setNumero] = useState(0);
  const botao = {
    width: 50,
    heigth: 60,
    margin: 5,
    alignItens: "center",
  };

  // function inc(){
  //     setNumero(numero + 1 )
  // }

  //Com ArrowFunction

  // function dec(){
  //     setNumero(numero - 1 )
  // }
  //Opcao de uma linha somente
  const dec = () => setNumero(numero - 1);

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
}
