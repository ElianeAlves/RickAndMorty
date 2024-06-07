RickAndMorty Dashboard
======================


Instalação/Inicialização
------------------------


### Versão Angular


-   **Angular v17**
    -   Instale a versão mais recente do Angular CLI:


        bash


        Copiar código


        `npm install -g @angular/cli@latest`


### Versão Node.js


-   **Node.js**: A partir da versão 18.13
    -   Verifique a versão no arquivo `package.json` do Angular: [Ver versão no unpkg](https://unpkg.com/browse/@angular/core@17.0.0/package.json)


### Passos para Instalação


1.  **Clone o repositório:**


    bash


    Copiar código


    `git clone <repository-url>
    cd <repository-directory>`


2.  **Instale as dependências:**


    bash


    Copiar código


    `npm install`


3.  **Inicie o servidor de desenvolvimento:**


    bash


    Copiar código


    `ng serve`


4.  **Acesse a aplicação no navegador:**


    arduino


    Copiar código


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
