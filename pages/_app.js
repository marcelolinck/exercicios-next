import '@/styles/globals.css'

//Como é uma biblioteca css que deve ser importada, deve ser feita dentro do _app.js. Caso o css seja somente para o componente. Terá que colocar diretmente no componente. Ou pode se carregar o css dentro do global.css

import '@/pages/css/integracao1.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
