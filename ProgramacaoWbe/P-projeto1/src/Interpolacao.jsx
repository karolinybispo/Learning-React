//Interpolacao eh injetar js dentro do html.
//Quando coloco {} sgnifica que quero fazer uma interpolacao 


let nome = "julia";
const soma = 10 + 90;
const urlImg = "https://s2.glbimg.com/GfB70I78gRr_AhgvRfJMTrzVtYY=/620x430/e.glbimg.com/og/ed/f/original/2016/03/18/times-square-em-nova-york.jpg"

function Interpolacao () {
    return (
        <div>

            <h1> Meu nome é {nome} e tenho {soma} dolares </h1> 
            <img src={urlImg} alt="new york" />
        </div>
    )
}

export default Interpolacao