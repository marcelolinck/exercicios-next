export default function Estilo(props) {
  
  const classeAplicada = props.numero >= 0 ? "azul" : "vermelha";
  
  return (
    <div style={{margin: '1vh'}}>
      <h1
        style={{
          backgroundColor: props.numero >= 0 ? "#2d2" : "#d22",
          color: props.color,
          textAlign: props.direita ? "right" : "left",
          
        }}
      >
        Estilo
      </h1>
      <h2 className="{classeAplicada}">Texto #02</h2>
    </div>
  );
}
