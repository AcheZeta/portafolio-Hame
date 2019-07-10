document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  M.AutoInit(elems);
});

const projects = document.getElementById("projects");
const infoProjects = [{
    id: 'one',
    image: 'img/shotsnapp-1557174270.345.png',
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
    image: 'img/shotsnapp-1557175123.832.png',
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
    image: 'img/shotsnapp-1559328611.05.png',
    title: 'Burger Queen',
    description: 'Una Progressive Web App que para realizar las ordenes de un restaurante usando VueJs',
    demoLink: 'https://burgerqueen-2058b.firebaseapp.com/#/',
    githubLink: 'https://github.com/AcheZeta/CDMX007-fe-burger-queen',
    t1: 'devicon-javascript-plain',
    t2: 'devicon-html5-plain',
    t3: 'devicon-css3-plain',
    t4: 'devicon-vuejs-plain',
  }
]

const printingCards = (element) => {
  let card =
    `
    <div id=${element.id} class="col s12 m6 l4">
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