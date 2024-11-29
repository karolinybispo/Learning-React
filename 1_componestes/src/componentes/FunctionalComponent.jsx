    //componente FILHO

    //criou a funcao:
    function FunctionalComponent() { //essa funcao ja eh um componente
        
        //retorna um obj com jsx
        return ( //essa funcao vai retornar elementos html. Devem estar dentro no return. Vai retornar para o pai. Sera retornado um obj com jsx
            <h4> meu primeiro componente </h4>
        );
}
//ele exporta todos os dados. Para o pai conseguir usar a importacao, aqui precisa exportar
export default FunctionalComponent;