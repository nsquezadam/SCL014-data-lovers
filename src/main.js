import * as data from './data.js';

// CARGA FILTROS AL INICIO DE LA PAGINA
data.allFilters();

// CARGA POKEMON AL INICIO DE LA PAGINA
data.pokeCard();

// BOTON FILTRO TIPO
document.getElementById('borrar').addEventListener('click', () => { data.deleteFilters(); });
document.getElementById('busca').addEventListener('click', () => { data.pokeSearch(); });
document.getElementById('filtro').addEventListener('click', () => { data.filterType(); });
document.getElementById('sort_name').addEventListener('click', () => { data.nameOrder(); });
document.getElementById('sort_num').addEventListener('click', () => { data.numOrder(); });


// imprimir los nombres de los pokemones en html ok
// recorrer la data con for 5 ok
// obtener los nombres 6 ok
// trarme el id de mi contenedor de html 2 ok
// crear un boton para darle un evento 1 ok
// traerme el boton a js 3 ok
// darle la función 4 ok
// const allPoke = data.pokemon;
/*
document.getElementByClass('allpoke').innerHTML = pokepedia.map(poke => `
 <div id ="card"><div class="imaconteiner"> <img id= "ima" src="${poke.img}" width="130px" > </div>
  <h2 class="info"> ${poke.name}</h2>
  <h3 class="info">nº pokedex: ${poke.num}</h3>
  <h3 class="info">Generacion: ${poke.generation.name}</h3>
  <h4 class="info">Peso: ${poke.size.weight}</h4>
  <h4 class="info">Altura: ${poke.size.height}</h4>
  <h4 class="info">Tipo: ${poke.type}</h4></div>`).join(''); */
