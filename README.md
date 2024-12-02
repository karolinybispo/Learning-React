# Learning-React


### Node.js (linguagem back-end do js)
- react eh instalado via npm. 
- todo projeto react inicia com as pastas da IMGinitial.png
- arq "eslint.congig.js": possui as configuracoes do linte.
- arq: package.json: possui todas as dependencias do projeto, o que foi intalado com npm install esta aqui e o scripts que permite acesso ao navegador.
- arq vite.config.js: as configuracoes do vite
- pasta node_modules: tudo que precisa para o react rodar
- pasta public: pasta utilizada para assets, o que eu desejo que apareca no index.html
- pasta src: onde eu programo, contem ars inicias do react
- na pasta src criei uma pasta componentes e arq com .jsx que o react entende. Criei uma funcao com o mesmo nome do arquivo
- arq app eh o componente pai
- componente pai tem acesso ao compnente filho por meio da importacao. Para funionar a importacao tem que ter a exportacao.
- quando importa componente tem que colocar no jsx para poder aparecer ao user
- dentro do componente pai eu abro uma tag e coloco o nome do componente para poder aparwcer na tela

- crio um componente (funcao), retorno um obj com jsx e exporto o componente. Onde uso o componente, importo a funcao e coloco a funcao onde quero que ela apareça, UTILIZO ESSA funcao no jsx. Componente pai importa componente filho.

- exsite uma forma antiga de fazer export e import que eh usando o componente de classe. Foi colocado um exemplo, esta no arq ClassComponent.jsx

- em situacoes que deseja o componente dinamico, usa-se o PROPS, que sao propriedades. O dado dinamico vai vir do argumento

- props eh basicamente uma comunicacao do componente pai para o componente filho



- na pasta *2_jsx* criei e iniciei um novo projeto react usando vite(ferramenta moderna e rapida para construir projetos front). Dentro do terminal integrado a pasta, siga esses comandos: 
1. npx create-vite . : cria um novo projeto [nele voce escolhe o fremework e a variante].
2. npm install: instala todas as dependencias listadas no arquivo package.json.
3. npm run dev: inicia o servidor de desenvolvimento vite.
4. a imagem img-2_jsx.png mostra tudo dito anteriormente.