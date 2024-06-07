# RickAndMorty
Dashboard Rick and Morty

Instalação/Inicialização
Versão Angular v17 - npm install -g @angular/cli ou npm install -g @angular/cli@latest
Versão Node.JS:  a partir de versão 18.13
Ver em: https://unpkg.com/browse/@angular/core@17.0.0/package.json
Login para acessar a dashboard apresentada no placeholder na tela de login.

Home page apresenta um navbar menu lateral para navegação de telas, no corpo, Personagens, Episódios e Localizações.

As rotas dispõem de um Guard de autenticação de usuário logado para serem acessadas.
As requisições (get) de rotas sem parametro possuem funcionalidade de cache, sharedReplay do RxJS para serem feitas apenas 1 vez na primeira inicialização do projeto.