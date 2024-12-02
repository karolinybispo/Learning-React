//Exemplo de componentes de classes

import React from "react";

// 1- crio uma clase inves de uma funcao. 2- extendo uma classe pai. 3- usa um metodo render para renderizar os elementos e retornar o jsx. 4- exportar para ele ser utilizado
class ClassComponent extends React.Component{

    render(){
        return(
            <h5>exemplo de componentes de classe</h5>
        )
    }
}

export default ClassComponent;