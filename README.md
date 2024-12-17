<!-- Banner de Apresentação -->
 <img src="./public/github/banner.png" alt="Banner OFS">
<br>
<br>
<!-- Titulo do Projeto -->
<div align="center">
<img alt="React" width="48" height="48" src="./public/github/react.svg"/></br>

![Static Badge](https://img.shields.io/badge/--path?style=flat&logo=react&logoColor=%23FFF&logoSize=auto&label=React&color=03c0e2)<br>
<small>Framework de desenvolvimento</small>

<!-- Badges do Projeto -->

![GitHub top language](https://img.shields.io/github/languages/top/emmanuelmarcosdeoliveira/dogs-ofs?style=plastic&labelColor=%23000)
![GitHub language count](https://img.shields.io/github/languages/count/emmanuelmarcosdeoliveira/dogs-ofs?style=flat&logo=github&logoColor=%23fff&logoSize=auto&labelColor=%23000)
![GitHub repo size](https://img.shields.io/github/repo-size/emmanuelmarcosdeoliveira/dogs-ofs?style=plastic&logo=github&logoColor=%23fff&logoSize=auto&labelColor=%23000)
![GitHub forks](https://img.shields.io/github/forks/emmanuelmarcosdeoliveira/ofs-dogs?style=plastic&labelColor=%23000)

</div>

# 🐶 Dogs

<!-- Menu -->

> [!NOTE]
> Table of Contents

- [Project description](#project-description)
  - [Functionalities](#functionalities)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [technologies and tools](#technologies-and-tools)
- [Instalation](#instalation)
  - [Usage](#usage)
  - [Front-End](#front-end)
  - [Back-End](#back-end)
  - [Update](#update)
- [References](#references)
- [Contributors or owners](#contributors-or-owners)
  - [Contribute-to-the-projects](#contribute-to-the-projects)
- [Contact](#contact)
- [License](#license)

<!-- Descrição do Projeto -->

## Project Description

**Dogs** é uma aplicação Web Desenvolvida com `React` e `JavaScript` de uma Rede Social par cachorros, elá é uma aplicação Front-end onde fazemos o consumo de uma `API Rest` desenvolvida em `WordPress`<br>
Nesse projeto utilizei tecnologias, como `React`,`JavaScript`,`CSS-modules`,`React-Router v6` para o gerenciamento de Rotas e configuração de rotas protegias e também fiz o uso de alguns Hooks do React como:<br>

- useState
- useEffect
- useContext
- React Lazy
- useReducer
- useFetch
- useForms
  <br>

> Nesse Projeto foi utilizado uma biblioteca para a geração de gráficos de quantidades de visualizações de uma determinada foto, a `lib Victory`.<br>

Minha fonte de motivação deste projeto foi a [Origamid](https://www.origamid.com).<br>

`Task`

- Desenvolver uma Rede Social tipo `Instagram`.

`Charlenge`

Os Maiores desafios foram:<br>
Fazer a introdução da `lógica` para todos os processo desde a criação do usuário até **post da foto, comentar a foto, deletar a foto e fazer o reset de senha do usuário**

### Functionalities

- [x] - Criação de usuário
- [x] - Postar Foto
- [x] - Comentar Foto
- [x] - Deletar Foto
- [x] - Envio de email para o usuário para reset de password</br>

> [!TIP]
>
> Baixe o Projeto em seu Computador e veja como ficou.

<!-- Setup do Projeto -->

## Setup

Requisitos necessários para rodar o projeto:<br>

### Prerequisites

`Node.js` `VSCode` `Git`

> [!IMPORTANT]
>
> - Run Time [Node.js](https://nodejs.org/en/) com a versão _20 ou superior_.<br>
> - Um editor de códigos onde eu recomendo o [VCode](https://code.visualstudio.com/)<br>
> - E o [git](https://git-scm.com/downloads) uma aplicação de versionamento de código.

<!-- > - Extensão do VSCode [**Live Server**](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) -->

### technologies and tools

`React` `JavaScript` `HTML` `CSS` `EditorConfig` `ESLint` `Prettier` `Pnpm` `React-Router-v6` `lib-Victory`

## Instalation

Para rodar o projeto em seu computador você tera que fazer o [fork](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) do repositório. Caso você não saiba como fazer, estou deixando um **link** da documentação oficial do gitHub, onde é esclarecido como fazer esse processo.<br> Fazendo esse processo você tera uma copia desse Repositório no seu GitHub.
<br>
<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">
<a href="https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo"></a>

Depois de ter feito o **fork** vamos fazer o [clone](https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository) desse Repositório através do **VSCode**. </br>
Caso você não saiba como fazer, estou deixando um link para a documentação oficial do gitHub onde é esclarecido como fazer esse processo.
<br>
<sub>Command Line</sub>

```bash
git clone https://github.com/emmanuelmarcosdeoliveira/dogs-ofs
```

<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">
<a href="https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository"></a>

Com o **VSCode** aberto, abra o **terminal**. pelo **VsCode** e vamos fazer a instalação das dependências necessárias para a execução do Projeto:

**1. Instalando as dependências**<br>

 <details open>

<summary>Gerenciador de pacotes usado</summary>

**Pnpm**

</details>

<sub>Command Line</sub>

```bash
pnpm  install
```

<br>

## Usage

### Front-End

**2. Inicie o Servidor com o seguinte comando dentro do Terminal**<br>

<details open>

<summary>Gerenciador de pacotes usado</summary>

**Pnpm**

</details>

<sub>Command Line</sub>

```bash
pnpm dev
```

</br>

> Ira aparecer um Pop-up solicitando que você clique para acessar o projeto no seu navegador.
> Segure a tecla <strong> Control </strong> e clique no local especificado, o projeto será aberto em uma nova aba do seu navegador Preferido.

### Back-end

Nesse Projeto fazemos o uso de uma rest API desenvolvida com `WordPress`
Segue abaixo o link de acesso da API

```bash
https://dogsapi.origamid.dev/json

```

<br>
 <!-- Imagem de Demostração -->
<!-- <h3 align="center"> Video de demostração do Projeto</h3>

<!-- </br>
</br>

<img src="./public/assets/image-1.png" alt="Print do Projeto"/>
<img src="./public/assets/iamge-2.png" alt="Print do Projeto"/> --> -->

<h3 align="center">📽️project demonstration video</h3>
<br>
<p align="center">Video de Demostração</p>

<br>
 <div align="center">
Acesse a versão on-line Projeto clicando no Link Abaixo
<br>
<br>
<a href="https://ofs-dogs.vercel.app/">
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/></a>

</div>
<br>

## Update

<br>

> Nessa seção teremos as atualizações do Projeto:

## References

**Acesse:** [origamid](https://origamid.com)

## Contributors or owners

<img height="64px" src="./public/github/profile.png"><br>
<small>Emmanuel Oliveira</small>

developed by 💖 [Emmanuel Oliveira](https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit)<br>
&copy; Todos os Direitos Reservados

### Contribute to the projects

> Clique na seta abaixo e veja como você pode contribuir para o projeto

<details close>
<summary>Como fazer uma contribuição ao Projeto ?</summary>
 
 - Familiarize-se com a documentação do projeto, que geralmente inclui guias de instalação.<br>
- Explore o código do projeto para entender sua estrutura e funcionamento.
<br>

**Faça um Fork**

- Crie uma cópia (fork) do repositório original em sua conta do GitHub.<br>

<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">
<a href="https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo"></a>

**Clone o Repositório**

Isso criará uma cópia local do projeto, onde você poderá fazer suas modificações.

<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">
<a href="https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository"></a>

**Crie uma Nova Branch:**

- Crie uma nova branch para isolar suas alterações.<br>
- Isso facilita a organização do seu trabalho e a criação de pull requests.<br>

**Faça as Alterações:**

- Crie funcionalidades, mude estilos ou resolva `bugs` que iram contribuir para a melhoria do Projeto.<br>

**Crie um Pull Request:**

- Inclua uma descrição clara das suas alterações e explique como elas resolvem o problema ou melhoram o projeto.<br>
- Solicitação: Envie um pull request para o repositório original, solicitando que suas alterações sejam incorporadas ao projeto.
  <br>

**Revise e Responda a Feedback:**

- Colabore: Os mantenedores do projeto podem solicitar alterações ou fornecer feedback sobre o seu código.

</details>

## Contact

[![Lindekin](https://img.shields.io/badge/--path?style=social&logo=Linkedin&logoColor=%230664C1&logoSize=auto&label=Linkedin&labelColor=%23fff&cacheSeconds=https%3A%2F%2Fwww.linkedin.com%2Fin%2Femmanuel-marcos-oliveira%2F)](https://www.linkedin.com/in/emmanuel-marcos-oliveira/)
[![WhatsApp](https://img.shields.io/badge/--path?style=social&logo=WhatsApp&logoColor=%231F3833&logoSize=auto&label=WhatsApp&color=%23fff&cacheSeconds=https%3A%2F%2Fwa.me%2F5511968336094)](https://wa.me/5511968336094)
<a href="mailto:ofs.dev.br@gmail.com"><img alt="Static Badge" src="https://img.shields.io/badge/--path?style=social&logo=Gmail&logoSize=auto&label=Gmail&cacheSeconds=--query&link=mailto%3Adev-oliveira%40outlook.com.br%22"> </a>

<sub>😁Obrigado por chegar até aqui!<sub>

## License

![Static Badge](https://img.shields.io/badge/--path?style=plastic&logo=mit&logoSize=auto&label=license%20MIT&labelColor=%23555555&color=%2397CA00)<br>
Released in 2024 This project is under the **MIT license**<br>
<br>

[`voltar ao topo`](#-dogs)
