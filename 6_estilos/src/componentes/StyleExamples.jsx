
import "./StyleExamples.css"; //esse eh o exemplo third

import styles from './StyleExamples.module.css'; // esse eh do exemplo fourth. Nesse caso os estilos estao como se fosse um objeto, sao propriedades do objeto styles mencionado nessa linha


export const StyleExamples = () => {
  
    //first forma de aplicar estilo: de forma global pelo aquivo
    //secund forma de aplicar estilo: por aqui como foi apresentado o exemplo
    //third forma de aplicar estilo: ter um arquivo de css com o mesmo nome do componente (todos os compoennetes da pasta vao possuir esse estilo, nao somente para quem importou. Isso nem sempre eh positivo)
    //fourth forma de aplicar estilo: usar css modules (em todos os casos, nesse e nos anteriores, por convencao o nome do arquivo eh o mesmo do componente)

  //inline
  const inlineStyle ={ //variavel que contem objeto que contem estilos
    color: "blue",
    fontSize: "20px,"
  }

    return (
    <div>
       <h1>StyleExamples</h1>
        <h2 style={inlineStyle}>
            estilo inline
        </h2>
        {/*usando o estilo da pagina com extensao css*/}
        <p className="text"> estilo vindo de css externo </p>

        {/* css modulo*/}
        <p className={styles.textPink}> Ola </p> {/* O estilo vai ser acesado usando o obj e pegando o elemento dentro do obj. Agora esse estilo nao vai vazar para os demias*/}
    </div>
  )
}
