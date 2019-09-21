document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  M.AutoInit(elems);
});

const projects = document.getElementById("projects");
const infoProjects = [{
    id: 'one',
    image: 'img/1.png',
    title: 'Punto Muerto',
    description: 'Una aplicación web enfocada en la concientización para la prevención de accidentes en la población adolescente.',
    demoLink: 'https://achezeta.github.io/cdmx-2019-01-bc-core-data-lovers/src/',
    githubLink: 'https://github.com/AcheZeta/cdmx-2019-01-bc-core-data-lovers.git',
    t1: 'devicon-javascript-plain',
    t2: 'devicon-html5-plain',
    t3: 'devicon-css3-plain',
  },
  {
    id: 'two',
    image: 'img/2.png',
    title: 'MoviePop',
    description: 'Desarrollada durante una hackathon de 3 días en un equipo de 4 personas, MoviePOP muestra las reseñas de peliculas usando la API de OMDB.',
    demoLink: 'https://achezeta.github.io/mex007-hackathon-interna/src/index.html',
    githubLink: 'https://github.com/AcheZeta/mex007-hackathon-interna',
    t1: 'devicon-javascript-plain',
    t2: 'devicon-html5-plain',
    t3: 'devicon-css3-plain',
  },
  {
    id: 'three',
    image: 'img/3.png',
    title: 'SproutThink',
    description: 'Red Social enfocada en usuarios interés en la ecología, sustentabilidad y energías renovables ya sea por profesión o hobby.',
    demoLink: 'https://achezeta.github.io/CDMX007-social-network/src/#home',
    githubLink: 'https://github.com/AcheZeta/CDMX007-social-network',
    t1: 'devicon-javascript-plain',
    t2: 'devicon-html5-plain',
    t3: 'devicon-css3-plain',
  },
  {
    id: 'four',
    image: 'img/4.png',
    title: 'Burger Queen',
    description: 'Una Progressive Web App que para realizar las ordenes de un restaurante usando VueJs',
    demoLink: 'https://burgerqueen-2058b.firebaseapp.com/#/',
    githubLink: 'https://github.com/AcheZeta/CDMX007-fe-burger-queen',
    t1: 'devicon-javascript-plain',
    t2: 'devicon-html5-plain',
    t3: 'devicon-css3-plain',
    t4: 'devicon-vuejs-plain',
  },
  {
    id: 'five',
    image: 'img/5.png',
    title: 'Pokeday',
    description: 'Web que mediante selección de una fecha asigna un Pokémon desde la API.',
    demoLink: 'https://achezeta.github.io/PokeDay/',
    githubLink: 'https://github.com/AcheZeta/PokeDay',
    t1: 'devicon-javascript-plain',
    t2: 'devicon-html5-plain',
    t3: 'devicon-css3-plain'
  },
  {
    id: 'six',
    image: 'img/6.png',
    title: 'MDLINKS',
    description: 'MdLinks es una librería que te ayudara a conocer los links dentro de tus archivos md usando Node.js',
    demoLink: 'https://www.npmjs.com/package/md-links-refact',
    githubLink: 'https://github.com/AcheZeta/mdLinks',
    t1: 'devicon-javascript-plain',
    t2: 'devicon-nodejs-plain',
  }

]

const printingCards = (element) => {
  let card =
    `<div id=${element.id} class="center col s12 m4 l4">
     <div class="card">
        <div class="card-image">
        <img src=${element.image}>
        </div>
        <div class="card-content code">
        <p><b>${element.title}</b></p>
        <p>${element.description}</p></br>
        <i class=${element.t1}></i><i class=${element.t2}></i><i class=${element.t3}></i><i class=${element.t4}></i>
        </div>
        <div class="link">
            <a class="demo-link code" href="${element.demoLink}"
                target="_blank"><b>DEMO<b></a>
               </br> 
                <a class="git-link code" href="${element.githubLink}"
                target="_blank">CÓDIGO</a>
        </div>
    </div>
</div> `
  projects.insertAdjacentHTML("beforeend", card);
}

function showCards() {
  infoProjects.forEach(element => {
    printingCards(element);
  });
};

showCards(infoProjects);

//

M.AutoInit();