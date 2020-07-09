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
const button = document.getElementById('poke');
button.addEventListener('click', () => {
  document.getElementById('allpoke').innerHTML = data.pokemon.map(allpoke => `
  <div id ="card"><div class="imaconteiner"> <img id="ima"src="${allpoke.img}" width="130px" > </div>
  <h2 class="info"> ${allpoke.name}</h2> 
  <h3 class="info">nº pokedex: ${allpoke.num}</h3>
  <h3 class="info">Generacion: ${allpoke.generation.name}</h3>
  <h4 class="info">Peso: ${allpoke.size.weight}</h4>
  <h4 class="info">Altura: ${allpoke.size.height}</h4>
  <h4 class="info">Sobre: ${allpoke.about}</h4></div>`).join('');
});

// imprimir en html pokemos  typo grass
// filtrar  pokemons typo grass
// crear botton tipo grass
//  crear variable de  boton en   js
// crear nuevo array de   typo grass


const typeGrass = data.pokemon.filter(typeg => {
  return typeg.type === "grass";
  // eslint-disable-next-line no-console
});

// eslint-disable-next-line no-console
console.log(typeGrass);

// const btnGrass = document.getElementById('btnGrass');

// btnGrass.addEventListener('click',() =>{
//  document.getElementById('allpoke').innerHTML = data.pokemon.filter

//    `<div id ="card"><div class="imaconteiner"> <img id="ima"src="${typeg.img}" width="130px" > </div>
//    <h2> ${typeg.type} </h2>`}).join('');
// });

// BOTON MENU mostrar y ocultar ITEM MENU NAVEGADOR
/* const hide = (hide => {
    const hideBtn = document.getElementById('menubtn');
    hideBtn.addEventListener('click', () => {
    const itemMenu = document.getElementsByClassName('tab');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < itemMenu.length; i++) {
    itemMenu[i].classList.toggle('hide');
    }
  });
}); */

// eslint-disable-next-line no-console



// for (let i = 0; i < data.pokemon.name.length; i++) {
//   pokeName.filter(data.pokemon[i].generation);
// }
// crear  filtro opciones
// definir criterios de filtro
// asignarle  a cada  opcion un id
// llamar las  opciones con add event listener
// darle funcionalidad a las   opciones
// traer data de  cada opcion
