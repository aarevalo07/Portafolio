const menuIconEl=document.querySelector('#menu-icon');
const menuEl=document.querySelector('#menu');
const headerEl = document.querySelector("header");

menuIconEl.addEventListener("click",()=>{
    menuIconEl.classList.toggle('bx-x');
    menuEl.classList.toggle('open');
})
window.onscroll = () =>{
    menuIconEl.classList.remove('bx-x');
    menuEl.classList.remove('open');
}

addEventListener("scroll",()=>{
   headerEl.classList.toggle("sticky",window.scrollY>140)
})

// API Repos Github
fetch('https://api.github.com/users/aarevalo07/repos')
  .then(response => response.json())
  .then(data => {
    const proyectosDiv = document.getElementById('projects-seen'); // El elemento donde mostrarás los proyectos

    data.forEach(repo => {
      const proyectoElemento = document.createElement('div');
      proyectoElemento.classList.add('project-tile'); // Añade clases para estilos CSS

      const nombre = document.createElement('h2');
      nombre.textContent = repo.name;

      const descripcion = document.createElement('p');
      descripcion.textContent = repo.description || 'Sin descripción';

      const enlace = document.createElement('a');
      enlace.href = repo.html_url;
      enlace.textContent = 'Ver en GitHub';
      enlace.target = '_blank'; // Abre en una nueva pestaña

      proyectoElemento.appendChild(nombre);
      proyectoElemento.appendChild(descripcion);
      proyectoElemento.appendChild(enlace);

      proyectosDiv.appendChild(proyectoElemento);
    });
  })
  .catch(error => console.error('Error al obtener los repositorios:', error));