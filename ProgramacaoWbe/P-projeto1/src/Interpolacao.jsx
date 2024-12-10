//Interpolacao eh injetar js dentro do html.
//Quando coloco {} sgnifica que quero fazer uma interpolacao 

import PropTypes from "prop-types";


let nome = "julia";
const soma = 10 + 90;
const urlImg = "https://s2.glbimg.com/GfB70I78gRr_AhgvRfJMTrzVtYY=/620x430/e.glbimg.com/og/ed/f/original/2016/03/18/times-square-em-nova-york.jpg"

function Interpolacao ({age, lastname, info}) {
    return (
        <div>

            <h1> Meu nome é {nome} e tenho {soma} dolares </h1> 
            <p>Minha idade: {age}</p>
            <h3>{info ?  info : "sem props de sobrenome"}</h3> {/*  ' <h3>{info ?  info : "sem props de sobrenome"}</h3> ' se info estiver em um componente, deve mostrar o que esta dentro do componente, se essa props nao estiver definida em um componente, mostra o que defini na funcao do componente*/}
            <p>meu sobrenome {lastname ? lastname : "Brizin" }</p>
            <img src={urlImg} alt="new york" />
        </div>
    );
}

 // Validacao das Props
 Interpolacao.propTypes = {
    age: PropTypes.number.isRequired, 
    lastname: PropTypes.string,
    info: PropTypes.string,
};

export default Interpolacao


//Passos para CRIAR uma PROPS (OBS: no componente que a prop criada, procure valida-la.):
// 1- declare a props e seu valor no componente que renderiz App();
// 2- dentro do componente que usa a Props, no () especificamente, coloque o nome da props (atributos que dou ao meu componente);
// 3- use a Props onde quiser na funcao - nesse caso foi usado na linha '<p>Minha idade: {age}</p>' -.


// Validacao das props:
// 1- Importe o prop-types;
// 2- Faça como esta sendo descrito no 'Validacao das Props'.
// OBS:
//PropTypes.number : especifica que age deve ser um numero.
// sRequired : torna obrigatorio passar a prop age. React mostra erro no console se ela estiver ausente.