import { allPoke, orderAz, orderZa } from './data.js';

// import data from './data/atletas/atletas.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';


// se  crea variable  del data pokemon se llama al array de la funcion del data.js
const pokepedia = allPoke(data.pokemon);
// se crea  variable del data  pero ordenado de A a Z
const orderAzPoke = orderAz(pokepedia);
// se crea  variable del data  pero ordenado de Z a A
const orderZaPoke = orderZa(pokepedia);
// variable  filtro pokemon

// eslint-disable-next-line no-console
// console.table(orderZaPoke);
// eslint-disable-next-line no-console
console.table(pokepedia);
// eslint-disable-next-line no-console
console.table(orderAzPoke);
// eslint-disable-next-line no-console
console.log(orderZaPoke);

// imprimir los nombres de los pokemones en html ok
// recorrer la data con for 5 ok
// obtener los nombres 6 ok
// trarme el id de mi contenedor de html 2 ok
// crear un boton para darle un evento 1 ok
// traerme el boton a js 3 ok
// darle la función 4 ok
// const allPoke = data.pokemon;

document.getElementById('allpoke').innerHTML = pokepedia.map(allpoke => `
  <div id ="card"><div class="imaconteiner"> <img id="ima"src="${allpoke.img}" width="130px" > </div>
  <h2 class="info"> ${allpoke.name}</h2> 
  <h3 class="info">nº pokedex: ${allpoke.num}</h3>
  <h3 class="info">Generacion: ${allpoke.generation.name}</h3>
  <h4 class="info">Peso: ${allpoke.size.weight}</h4>
  <h4 class="info">Altura: ${allpoke.size.height}</h4>
  <h4 class="info">Tipo: ${allpoke.type}</h4>
  <h4 class="info">Sobre: ${allpoke.about}</h4></div>`).join('');
