# Projeto Criado com " Create React App "
 
 O projeto foi construido a partir de um conjunto de ferramentas funcionalidades pré-configuradas Create React App, economizando dessa forma muito tempo para configura-lo.


## Scripts Disponiveis 
  
## Dentro da pasta do projeto rode o comando: 

Caso seja a primeira vez, é necessario instalar as dependencias da aplicação para que o projeto consiga rodar de forma correto, então tenha ciencia de que sua maquina possua:

Yarn 1.22.5 \
Node Js 12.20.0 \
npm  6.14.8 

Caso não tenha essas ferramentas instaladas, segue os links abaixo:

Node https://github.com/nodesource/distributions/blob/master/README.md \
Yarn https://classic.yarnpkg.com/en/docs/install/#debian-stable 

## Ao instalar as ferramentas, execute:

### `yarn install`

yarn install é usado para instalar todas as dependências de um projeto. Isso é mais comumente usado quando você acabou de verificar o código de um projeto ou quando outro desenvolvedor no projeto adicionou uma nova dependência que você precisa escolher. Se você está acostumado a usar o npm, deve usar --save ou --save-dev.

## Após instalar as dependencias execute:

### `yarn start`

Executa o aplicativo no modo de desenvolvimento. \
Abra [http: // localhost: 3000] para visualizá-lo no navegador.


## Decisões técnicas

 Para deixar a aplicação um pouco mais dinâmica foi decidido utilizar o Json Server, sendo ele um pacote NPM que você pode para criar um webservice REST JSON simulando uma API.
 
 Após a aplicação ser iniciada execute:
 
 ### `npm install -g json-server`
 
 Este comando vai instalar o Json Server dentro da aplicação , e logo em seguida execute:
 
 ### `json-server --watch db.json --port 3004`
 
 Após executar este comando so direciona o endereço do serviçe API para http://localhost:3004 e ja pode começar a consumir os dados.
 
Um detalhe muito importante foi na imagem do Post que foi deixada de forma estatica. A aplicação ja ficou pronto para enviar os dados para o backend salvar e devolver todos os agendamentos realizados ja com as URLs para cada imagem, como foi decidido salvar as informções no arquivo DB.json, na minha concepção ficaria enviavel eu salvar a imagem no Front end para gerar uma URL para ela, dessa forma todas as informações são salvas no arquivo DB.json e somente a imagem permanece a mesma.

 
 ## Dificuldades
 
 Encontrei algumas dificuldades relacionadas as iterações dos objetos sendo consumidos do arquivo DB.json, primeiramente eu estruturei a aplicação toda estática , após finalizar comecei a modifica-la para buscar os dados de forma dinâmica e atribuir nos locais de destino, neste momento eu tive muitas duvidas, tais qual:
 
 Sintaxe da linguagem; \
 substituição das variaveis estaticas por uma dinâmica nos icones; 
 
  ## Melhorias
  
  Como melhoria futuras eu adicionaria as seguintes funcionalidades;
  
  Poder agendar mais de um imagem;\
  Poder agendar outros tipos de midias;
  
  
  
 
 
 
 
 
 
 
 






