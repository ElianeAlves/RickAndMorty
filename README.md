RickAndMorty Dashboard
======================


Instalação/Inicialização
------------------------


### Versão Angular


-   **Angular v17**
    -   Instale a versão mais recente do Angular CLI:

        `npm install -g @angular/cli@latest`


### Versão Node.js


-   **Node.js**: A partir da versão 18.13
    -   Verifique a versão no arquivo `package.json` do Angular: [Ver versão no unpkg](https://unpkg.com/browse/@angular/core@17.0.0/package.json)


### Passos para Instalação


1.  **Clone o repositório:**

    `git clone https://github.com/ElianeAlves/RickAndMorty.git`


2.  **Instale as dependências:**

    `npm install`


3.  **Inicie o servidor de desenvolvimento:**


    `ng serve -o`


4.  **Acesse a aplicação no navegador:**

    `http://localhost:4200`


Funcionalidades
---------------


### Login


-   Para acessar a dashboard, use o login fornecido na tela de login.


### Home Page


-   A página inicial apresenta um menu de navegação lateral (navbar) para navegação entre diferentes seções:
    -   **Personagens**
    -   **Episódios**
    -   **Localizações**


### Rotas e Autenticação


-   **Guard de Autenticação**: As rotas são protegidas por um guard de autenticação, garantindo que apenas usuários autenticados possam acessá-las.


### Requisições e Cache


-   **Funcionalidade de Cache**: As requisições `get` para rotas sem parâmetros possuem funcionalidade de cache utilizando `sharedReplay` do RxJS, garantindo que as requisições sejam feitas apenas uma vez na primeira inicialização do projeto.
