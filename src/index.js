//Materialize Init
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  M.AutoInit(elems);
});

//About Secction

const aboutSecc = document.getElementById("about")
const cvSecc = document.getElementById("cv")
const toolsSecc = document.getElementById("tools")
const laboSecc = document.getElementById("laboratoria")
const socialSecc = document.getElementById("social")

const infoPortfolio = [{
  image: 'img/1633468.jpeg',
  name: 'Hame Elizalde',
  description: 'Soy una apasionada de la tecnología, la educación y causas sociales, áreas en las que cuento con experiencia como voluntaria, colaboradora o incluso como coordinadora en diferentes proyectos.',
  formation: 'Front-End Developer</b> egresada de la séptima generación de Laboratoria, Bootcamp número uno en latinoamérica en el desarrollo de talento femenino en el sector tech.',
  jobSpect: 'Quiero desarrollar e implementar soluciones creativas, innovadoras y que impulsen el crecimiento de más mujeres en la tecnología, emprendimientos y asociaciones.',
  cvLink: 'https://drive.google.com/file/d/11vFqqiB3ax6gWIajIn7_7ILZtBmQwCHo/view?usp=sharing',
  softSkill: ['Proactiva','Autodidacta', 'Empatica','Creativa','Colaborativa','Adaptabilidad'],
  otherSkill: ['Planeación Estratégica', 'Marketing Digital', 'Comunicación', 'Manejo de Grupos', 'Agile', 'Logística', 'Voluntariado'],
 
  githubLink: 'https://github.com/AcheZeta/cdmx-2019-01-bc-core-data-lovers.git',
  t1: 'devicon-javascript-plain',
  t2: 'devicon-html5-plain',
  t3: 'devicon-css3-plain',
},
{
  git: '<svg class="devicon-git-plain" viewBox="0 0 128 128"> <path fill="#F34F29" d="M124.742,58.378L69.625,3.264c-3.172-3.174-8.32-3.174-11.497,0L46.685,14.71l14.518,14.518c3.375-1.139,7.243-0.375,9.932,2.314c2.703,2.706,3.462,6.607,2.293,9.993L87.42,55.529c3.385-1.167,7.292-0.413,9.994,2.295c3.78,3.777,3.78,9.9,0,13.679c-3.78,3.78-9.901,3.78-13.683,0c-2.842-2.844-3.545-7.019-2.105-10.521L68.578,47.933l-0.002,34.341c0.922,0.455,1.791,1.063,2.559,1.828c3.779,3.777,3.779,9.898,0,13.683c-3.779,3.777-9.904,3.777-13.679,0c-3.778-3.784-4.088-9.905-0.311-13.683C58.079,83.169,59,82.464,60,81.992V47.333c-1-0.472-1.92-1.172-2.856-2.111c-2.861-2.86-3.396-7.06-1.928-10.576L40.983,20.333L3.229,58.123c-3.175,3.177-3.155,8.325,0.02,11.5l55.126,55.114c3.173,3.174,8.325,3.174,11.503,0l54.86-54.858C127.913,66.703,127.916,61.552,124.742,58.378z" /></svg>',
  js: '<svg class="devicon-git-plain" viewBox="0 0 128 128"> <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path> <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path></svg>',
  html: '<svg class="devicon-git-plain" viewBox="0 0 128 128"> <path fill="#E44D26" d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z"> </path> </svg>',
vue: '<svg class="devicon-git-plain" viewBox="0 0 128 128"> <path d="m-2.3125e-8 8.9337 49.854 0.1586 14.167 24.47 14.432-24.47 49.547-0.1577-63.834 110.14zm126.98 0.6374-24.36 0.0207-38.476 66.052-38.453-66.052-24.749-0.0194 63.211 107.89zm-25.149-0.008-22.745 0.16758l-15.053 24.647-14.817-24.647-22.794-0.1679 37.731 64.476zM25.997 9.3929l23.002 0.0087M25.997 9.3929l23.002 0.0087" fill="none"></path> <path d="m25.997 9.3929 23.002 0.0087l15.036 24.958 14.983-24.956 22.982-0.0057-37.85 65.655z" fill="#35495e"></path> <path d="m0.91068 9.5686 25.066-0.1711 38.151 65.658 37.852-65.654 25.11 0.0263-62.966 108.06z" fill="#41b883"></path> </svg>',
node: 
'      <svg class="devicon-git-plain" viewBox="0 0 128 128">
          <path fill="#83CD29"
              d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z">
          </path>
      </svg>',
      <!-- CSS -->
      <svg class="devicon-git-plain" viewBox="0 0 128 128">
          <path fill="#1572B6"
              d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z">
          </path>
      </svg>
}
]

const printInfo = () => {
  aboutSecc.innerHTML = `<div class="col s12 m6 l4 center">
  <figure>
      <img alt="Hame" class="yo circle responsive-img" src="img/1633468.jpeg">
  </figure>
</div>
<!-- NAME -->
<div id="aboutme" class="col s12 m6 l8 center name scrollspy">
  <h1>Hame Elizalde</h1>
</div>
<!-- ABOUT ME -->
<div class="row">
  <div class="col s12 m12 l12">
      <span class="black-text">
          <p class="about">
              Soy una apasionada de la tecnología, la educación y causas sociales,
              áreas en las que cuento con experiencia como voluntaria, colaboradora o incluso como
              coordinadora en diferentes proyectos.
              <br><br>
              <b>Front-End Developer</b> egresada de la séptima generación de
              <b>Laboratoria</b>, Bootcamp número uno en latinoamérica en el desarrollo de
              talento femenino en el sector tech.
              <br><br>
              Quiero desarrollar e implementar soluciones creativas, innovadoras y que impulsen el
              crecimiento de más mujeres en la tecnología, emprendimientos y asociaciones.
          </p>
      </span>
  </div>
</div>`
  cvSecc.innerHTML = `
  <div class="col s12 m12 l12 center">
  <span class="black-text">
      <h5>Descarga mi CV</h5>
      <span class="black-text">
          <p class="about center">
              Busco seguir desarrollando mis habilidades como Front-End.
          </p>
      </span>
      <a href="https://drive.google.com/file/d/11vFqqiB3ax6gWIajIn7_7ILZtBmQwCHo/view?usp=sharing"
          target="_blank">
          <i class="material-icons medium pdf">picture_as_pdf</i>
          &nbsp &nbsp
      </a>
  </span>
</div>`

  toolsSecc.innerHTML = `<h5>Herramientas & SoftSkills</h5>
  <div class="collapsible-header headerskill scrollspy">
      <i class="material-icons">favorite</i>
      Soft Skills
  </div><br>

  <span>
      Proactiva</br>
      Autodidacta</br>
      Empatica</br>
      Creativa</br>
      Colaborativa</br>
      Adaptabilidad</br>
  </span>

  <div class="collapsible-header headerskill">
      <i class="material-icons">local_florist</i>
      Otras Habilidades
  </div><br>
  <span>
      Planeación Estratégica</br>
      Marketing Digital</br>
      Comunicación</br>
      Manejo de Grupos</br>
      Agile</br>
      Logística</br>
      Voluntariado</br>
  </span>
  <div class="collapsible-header headerskill center">
      <i class="material-icons">favorite</i>
      Herramientas Técnicas
  </div><br>

  <span>
      <svg class="devicon-git-plain" viewBox="0 0 128 128">
          <path fill="#F34F29"
              d="M124.742,58.378L69.625,3.264c-3.172-3.174-8.32-3.174-11.497,0L46.685,14.71l14.518,14.518c3.375-1.139,7.243-0.375,9.932,2.314c2.703,2.706,3.462,6.607,2.293,9.993L87.42,55.529c3.385-1.167,7.292-0.413,9.994,2.295c3.78,3.777,3.78,9.9,0,13.679c-3.78,3.78-9.901,3.78-13.683,0c-2.842-2.844-3.545-7.019-2.105-10.521L68.578,47.933l-0.002,34.341c0.922,0.455,1.791,1.063,2.559,1.828c3.779,3.777,3.779,9.898,0,13.683c-3.779,3.777-9.904,3.777-13.679,0c-3.778-3.784-4.088-9.905-0.311-13.683C58.079,83.169,59,82.464,60,81.992V47.333c-1-0.472-1.92-1.172-2.856-2.111c-2.861-2.86-3.396-7.06-1.928-10.576L40.983,20.333L3.229,58.123c-3.175,3.177-3.155,8.325,0.02,11.5l55.126,55.114c3.173,3.174,8.325,3.174,11.503,0l54.86-54.858C127.913,66.703,127.916,61.552,124.742,58.378z" />
      </svg>
      <!-- JS -->
      <svg class="devicon-git-plain" viewBox="0 0 128 128">
          <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path>
          <path fill="#323330"
              d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z">
          </path>
      </svg>
      <!-- Html -->
      <svg class="devicon-git-plain" viewBox="0 0 128 128">
          <path fill="#E44D26"
              d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z">
          </path>
      </svg>
      <!-- Vue -->
      <svg class="devicon-git-plain" viewBox="0 0 128 128">
          <path
              d="m-2.3125e-8 8.9337 49.854 0.1586 14.167 24.47 14.432-24.47 49.547-0.1577-63.834 110.14zm126.98 0.6374-24.36 0.0207-38.476 66.052-38.453-66.052-24.749-0.0194 63.211 107.89zm-25.149-0.008-22.745 0.16758l-15.053 24.647-14.817-24.647-22.794-0.1679 37.731 64.476zM25.997 9.3929l23.002 0.0087M25.997 9.3929l23.002 0.0087"
              fill="none"></path>
          <path d="m25.997 9.3929 23.002 0.0087l15.036 24.958 14.983-24.956 22.982-0.0057-37.85 65.655z"
              fill="#35495e"></path>
          <path d="m0.91068 9.5686 25.066-0.1711 38.151 65.658 37.852-65.654 25.11 0.0263-62.966 108.06z"
              fill="#41b883"></path>
      </svg>
      <!-- Node -->
      <svg class="devicon-git-plain" viewBox="0 0 128 128">
          <path fill="#83CD29"
              d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z">
          </path>
      </svg>
      <!-- CSS -->
      <svg class="devicon-git-plain" viewBox="0 0 128 128">
          <path fill="#1572B6"
              d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z">
          </path>
      </svg>
  </span>`
  laboSecc.innerHTML = `
  <div class="col s12 m12 l12 center">
  <span class="black-text">
      <h5>Conoce más de Laboratoria</h5>
      <h6>Talento que transforma</h6>

      <a href="https://www.laboratoria.la/" target="_blank">
          <img class="circle laboratoria"
              src="https://github.com/AcheZeta/portafolio-Hame/blob/master/src/img/icons/Laboratoria.jpg?raw=true"
              alt="Laboratoria">
      </a>
      <p class="center">
          Nuestra visión es lograr que América Latina tenga una economía digital competitiva,
          diversa e inclusiva, que genere oportunidades para todas las personas por igual.
      </p>
  </span>
</div>`
  socialSecc.innerHTML = `
<blockquote class="twitter-tweet" data-width="300" data-lang="es" data-link-color="#3F0F3F">
                <p lang="es" dir="ltr">¡Que emoción! La plática Montessori para ser Agile ya está disponible en
                    <a href="https://twitter.com/RevistaSG?ref_src=twsrc%5Etfw">@RevistaSG</a> ¡muchas gracias
                    <a href="https://twitter.com/eventloopmx?ref_src=twsrc%5Etfw">@eventloopmx</a>! <a
                        href="https://t.co/mnPYX2JnEh">https://t.co/mnPYX2JnEh</a></p>&mdash; Hame (@Ache_Zeta)
                <a href="https://twitter.com/Ache_Zeta/status/1125478880029048832?ref_src=twsrc%5Etfw">6 de mayo
                    de 2019</a>
            </blockquote>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
}
printInfo()

//Projects Cards
const projectsSecc = document.getElementById("projects");
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

  projectsSecc.insertAdjacentHTML("beforeend", card);
}

function showCards() {
  infoProjects.forEach(element => {
    printingCards(element);
  });
};

M.AutoInit();

showCards(infoProjects);

M.AutoInit();