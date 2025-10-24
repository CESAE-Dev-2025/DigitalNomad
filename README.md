<a id="readme-top"></a>

[![Unlicense License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/cesae-dev-2025/LivingAround">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Living Around</h3>

  <p align="center">Living around is not for everyone, it's for the adventurers! Start your Digital Nomad adventure now!
    <br />
    <a href="https://cesae-dev-2025.github.io/LivingAround/"><strong>Demo</strong></a>
    <br />
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre o Projecto</a>
      <ul>
        <li><a href="#built-with">Tecnologias utilizadas</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Como utilizar</a>
      <ul>
        <li><a href="#prerequisites">Pré-requisitos</a></li>
        <li><a href="#installation">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contato</a></li>
    <li><a href="#acknowledgments">Agradecimentos</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o Projeto


![Product Name Screen Shot][product-screenshot]

Esse projeto surgiu da necessidade de parilhar a paixão por viver a vida por aí, sem morada fixa, como um nômade digital.

Para faciliar a experiência de todos, foram listadas as melhores opções de carrinhas, moto homes e trailers para que o utilizador tenha opções de escolha consoante suas necessidades e possibilidades.

E fazemos da seguinte formma:
* Não precisas investir muito para teres uma experiência de nômade digital. Podes avaliar por um período e decidir se gostas mesmo
* Não estás limitado à apenas uma experiência. Temos acomodações diferentes, como características que atendem à todo o público
* Podes preocupar-se com o trabalho enquanto estás a desfrutar de paisagens fantásticas, onde quer que deseje ir

### Capturas de ecrã

<p style="display: flex; justify-content: space-between;">
  <img src="images/LivingAround_home.png" style="width: 45%;" alt="Home page">
  <img src="images/LivingAround_accomodations.png" style="width: 45%;" alt="Accomodations page">
</p>
<br>
<p style="display: flex; justify-content: space-between;">
  <img src="images/LivingAround_destinations.png" style="width: 45%;" alt="Destinations page">
  <img src="images/LivingAround_contacts.png" style="width: 45%;" alt="Contact page">
</p>

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>


### Tecnologias utilizadas

Este projeto foi desenvolvido a partir de um layout do Figma ([https://www.figma.com/design/WbAR89hJmTwruxhfrBf1dv/LandPage?node-id=30-100&t=iYOWNRjUzReJSp3T-0](https://www.figma.com/design/WbAR89hJmTwruxhfrBf1dv/LandPage?node-id=30-100&t=iYOWNRjUzReJSp3T-0)).

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
  <img src="https://img.shields.io/badge/GoogleMaps_API-blue?style=for-the-badge&logo=googlemaps&logoColor=white" alt="GoogleMaps API">
</p>

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>



<!-- GETTING STARTED -->
## Como utilizar

Para utilizar este projeto, basta clonar o repositório e consguir uma API do Google Maps ou substituí-la por outro serviço.

### Pré-requisitos

É preciso ter o Git instalado.

### Instalação

1. Consiga uma API Key em [https://console.cloud.google.com/](https://console.cloud.google.com/)
2. Clone o repositório
   ```sh
   git clone https://github.com/CESAE-Dev-2025/LivingAround.git
   ```
3. Entre com sua API em `script.js`, logo acima da definição da variável `map`
   ```js
   key: "ENTER YOUR API",
   ```
4. Modifique a URL do git remote para evitar `pushes` acidentais para o projeto base
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Adicionar API do Google Maps
- [ ] Adicionar mais localizações
- [ ] Reavaliar estrutura do site
- [ ] Utilizar um Framework que permita reaproveitar componentes
- [ ] Dar suporte à outros idiomas
    - [ ] Inglês

Veja os ['issues' abertos](https://github.com/cesae-dev-2025/LivingAround/issues) para obter uma lista completa e atualizadas das funcionalidades propostas e bugs conhecidos.

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

<!-- CONTACT -->
## Contacto

Leandro Gabriel - [LinkedIn][linkedin-url]

Link do Projeto: [https://github.com/CESAE-Dev-2025/LivingAround](https://github.com/CESAE-Dev-2025/LivingAround)

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Agradecimentos

Agradeço ao [CESAE](https://cesaedigital.pt/fldrSite/default.aspx) pela oportunidade de crescimento e à [Lais Reis](https://github.com/laisreis04) pelo desafio.

Agradeço também aos mantenedores dos projetos listados abaixo:

* [Choose an Open Source License](https://choosealicense.com)
* [Best README Template](https://github.com/othneildrew/Best-README-Template)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Bootstrap](https://getbootstrap.com)
* [Google Maps API](https://developers.google.com/maps/documentation/javascript/)

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## mcvmv
<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]: images/README_cover.png
[product-home]: images/LivingAround_home.png
[product-accomodations]: images/LivingAround_accomodations.png
[product-destinations]: images/LivingAround_destinations.png
[product-contact]: images/LivingAround_contacts.png

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://linkedin.com/in/leandro-assis-gabriel

[HTML5]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://developer.mozilla.org/pt-BR/docs/Web/HTML
[CSS3]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://developer.mozilla.org/pt-BR/docs/Web/HTML
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Javascript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[Javascript-url]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript 
