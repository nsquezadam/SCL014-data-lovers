import {} from './data.js';
// import data from './data/atletas/atletas.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

const pokemonNames = [];


for (let i = 0; i < data.pokemon.length; i++) {
  pokemonNames.push(data.pokemon[i].name);
}
// eslint-disable-next-line no-console
console.table(pokemonNames);
