import {} from './data.js';
// import data from './data/atletas/atletas.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// imprimir los nombres de los pokemones en html ok
// recorrer la data con for 5 ok
// obtener los nombres 6 ok
// trarme el id de mi contenedor de html 2 ok
// crear un boton para darle un evento 1 ok
// traerme el boton a js 3 ok
// darle la función 4 ok
const button = document.getElementById('gen1btn');
button.addEventListener('click', () => {
  document.getElementById('allpoke').innerHTML = data.pokemon.map(allpoke => `
  <div id ="card"><div class="ima"> <img src="${allpoke.img}" width="300px" > </div>
  <h2 class="info"> ${allpoke.name}</h2> 
  <h3 class="info">nº pokedex: ${allpoke.num}</h3>
  <h3 class="info">Generacion: ${allpoke.generation.name}</h3>
  <h4 class="info">Tamaño: ${allpoke.size.weight}</h4>
  <h4 class="info">Sobre: ${allpoke.about}</h4></div>`).join('');
});
// for (let i = 0; i < data.pokemon.name.length; i++) {
//   pokeName.filter(data.pokemon[i].generation);
// }
// crear  un selector con 2 opciones
// asignarle  a cada  opcion un id
// llamar las 2 opciones con add event listener
// darle funcionalidad a las  2 opciones
// opcion 1 generacion 1
// opcion 2 generacion 2
// traer data de  cada generacion

const searchButton = document.getElementById('gen1')
