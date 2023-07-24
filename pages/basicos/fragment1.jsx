import React from 'react'

export default function fragment1(){
    
    //Usando o react fragment - É uma soluçao para que o react consiga rendenizar os dados dentro do componente quando se tem multiplas linhas sem a necessidade de criar uma DIV para isto. Com array nao vai dar erro.
    
    return(
        <React.Fragment>
            <h1>Título</h1>
            <h2>Subtitulo</h2>
        </React.Fragment>
    )
}