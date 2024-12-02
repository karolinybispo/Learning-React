/* eslint-disable react/prop-types */


import React from "react";

//acesso o onb props, entro na propriedade nome e o dado dinamico aparece ao user
const PropsExample = (props) => {
    return(
        <div>
        <h1> ola {props.nome} </h1>
        <p>Eu tenho { props.anos }</p>
        </div>
    )
}

export default PropsExample

/* OUTRA MANEIRA DE USAR
const PropsExample = ({nome, anos}) => {
    return(
        <div>
        <h1> ola {nome} </h1>
        <p>Eu tenho {anos}</p>
        </div>
    )
}
*/