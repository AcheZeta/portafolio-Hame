document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
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
    demoLink: 'https://elenore29.github.io/mex007-hackathon-interna/src/index.html',
    githubLink: 'https://github.com/AcheZeta/mex007-hackathon-interna',
    t1: 'devicon-javascript-plain',
    t2: 'devicon-html5-plain',
    t3: 'devicon-css3-plain',
  },
]

const printingCards = (element) => {
  let card =
    `
    <div id=${element.id} class="col s12 m6 l6">
    <div class="card">
        <div class="card-image">
        <img src=${element.image}>
        </div>
        <div class="card-content code">
        <p><b>${element.title}</b></p>
        <p>${element.description}</p></br>
        <i class=${element.t1}></i><i class=${element.t2}></i><i class=${element.t3}></i>
        </div>
        <div class="card-action">
            <a href="${element.demoLink}"
                target="_blank">DEMO</a>
            <a href="${element.githubLink}"
                target="_blank">Repositorio</a>
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