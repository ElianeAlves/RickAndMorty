# RickAndMorty
Dashboard Rick and Morty

Login para acessar a dashboard apresentada no placeholder na tela de login.

Home page apresenta um navbar menu lateral para navegação de telas, no corpo, Personagens, Episódios e Localizações.

As rotas dispõem de um Guard de autenticação de usuário logado para serem acessadas.
As requisições (get) de rotas sem parametro possuem funcionalidade de cache, sharedReplay do RxJS para serem feitas apenas 1 vez na primeira inicialização do projeto.