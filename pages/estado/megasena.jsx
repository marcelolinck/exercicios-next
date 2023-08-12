import { useState, useEffect } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"
import { mega } from "../../functions/mega"



export default function megasena() {

  const [qtde, setQtde] = useState(6);

  const [numeros, setNumeros] = useState([])

  useEffect(() => {
    setNumeros(mega())
  }, [])
  
  function rendenizarNumeros() {
    return numeros.map(
        n => <NumeroDisplay key={n} numero={n} />
    )
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Mega Sena</h1>
      <div style={{ display: "flex",
    flexWrap: "wrap" }} >
        {rendenizarNumeros()}
      </div>
      <div>
      <input type="number" min={6} max={20} onChange={ev => setQtde(parseInt(+ev.target.value))} value={qtde}/>

        {/* Dessa forma estamos passando uma funcao anonima quando clicar o novo numero. Se deixar sem a funcao, ele vai carregar o numero quando carregar a pagina */}
        <button onClick={() => setNumeros(mega(qtde))}>Gerar Aposta</button>
      </div>
    </div>
  );
}
