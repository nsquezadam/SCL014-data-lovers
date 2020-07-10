import allPoke from './data.js';

// import data from './data/atletas/atletas.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

// se  crea variable  del data pokemon se llama al array de la funcion del data.js
const pokepedia = allPoke(data.pokemon);
// Variable  de  pokepedia ordenada alfabeticamente

// eslint-disable-next-line no-console
console.table(pokepedia);


/* let propiedade = Object.keys(data.pokemon);
console.log(propiedade[1],data.pokemon[properties[3]]);
let pokeName = document.getElementById('pokeName'); */

/* for (let i = 0; i < data.pokemon.length; i++) {
  console.log(data.pokemon[i].name + " " + data.pokemon[i].type);
} */

/* for (let i = 0; i < data.pokemon.length; i++) {
  if (data.pokemon[i].generation.name === 'kanto') {
    // eslint-disable-next-line no-console
    console.log(data.pokemon[i].name);
  }
 } */


// imprimir los nombres de los pokemones en html ok
// recorrer la data con for 5 ok
// obtener los nombres 6 ok
// trarme el id de mi contenedor de html 2 ok
// crear un boton para darle un evento 1 ok
// traerme el boton a js 3 ok
// darle la función 4 ok
// const allPoke = data.pokemon;


const button = document.getElementById('poke');
button.addEventListener('click', () => {
  document.getElementById('allpoke').innerHTML = data.pokemon.map(allpoke => `
  <div id ="card"><div class="imaconteiner"> <img id="ima"src="${allpoke.img}" width="130px" > </div>
  <h2 class="info"> ${allpoke.name}</h2> 
  <h3 class="info">nº pokedex: ${allpoke.num}</h3>
  <h3 class="info">Generacion: ${allpoke.generation.name}</h3>
  <h4 class="info">Peso: ${allpoke.size.weight}</h4>
  <h4 class="info">Altura: ${allpoke.size.height}</h4>
  <h4 class="info">Tipo: ${allpoke.type}</h4>
  <h4 class="info">Sobre: ${allpoke.about}</h4></div>`).join('');
});
