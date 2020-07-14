
// estas funciones son de ejemplo
// (export const pokeDetails = (object) => 'test';
// export const anotherExample = () => 'OMG';
// CREAR UN ARRAY CON FUNCIONES
// fx CREAR  NUEVA  VARIABLE  ARRAY DE LA DATA.POKEMON ( para  manejar como variable  en main.js)
const allPoke = (infoPokemon) => {
  const newArrayPoke = [];
  // cambio el i++ poraparecer con error eslint  i++ es  igual i +=1(i=i+1)
  for (let i = 0; i < infoPokemon.length; i += 1) {
    newArrayPoke.push(infoPokemon[i]);
  }
  return newArrayPoke;
};

// ORDENAR ALFABETICAMENTE  DE A a Z (array.sort(function(a, b){return b-a}); )
const orderAz = (infoPokemon) => {
  const newArrayPoke = [];
  for (let i = 0; i < infoPokemon.length; i += 1) {
    newArrayPoke.push(infoPokemon[i]);
  }
  newArrayPoke.sort((a, b) => {
    // comparamos  2 elementos  nombre si a es mayo a b retorna -1 y se coloca antes de b
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  });
  return newArrayPoke;
};
// ORDENAR ALFABETICAMENTE  DE Z a A (array.sort(function(a, b){return b-a}); )
const orderZa = (infoPokemon) => {
  const newArrayPoke = [];
  for (let i = 0; i < infoPokemon.length; i += 1) {
    newArrayPoke.push(infoPokemon[i]);
  }
  newArrayPoke.sort((a, b) => {
  // comparamos  2 elementos  nombre si a es mayo a b retorna -1 y se coloca antes de b
    if (a.name > b.name) { return -1; }
    if (a.name < b.name) { return 1; }
    return 0;
  });
  return newArrayPoke;
};
// ORDENAR POR NUMERO     (array.sort(function(a, b){return b-a}); )
const orderNum = (infoPokemon) => {
  const newArrayPoke = [];
  for (let i = 0; i < infoPokemon.length; i += 1) {
    newArrayPoke.push(infoPokemon[i]);
  }
  newArrayPoke.sort((a, b) => {
    // comparamos  2 elementos  nombre si a es mayo a b retorna -1 y se coloca antes de b
    if (a.num < b.num) { return -1; }
    if (a.num > b.num) { return 1; }
    return 0;
  });
  return newArrayPoke;
};

// crear  funcion para  filtro TIPO POKEMON

const pokeFilter = 
//LISTA LOS TIPOS DE POKEMON
let tipo_pok = [],gen_pok=[],name_pok=[];
data.pokemon.map(function(pokem){
  //console.log(numero)
  pokem.type.map(function(tipo){
       tipo_pok.push(tipo)
  })
  gen_pok.push(pokem.generation);
  name_pok.push(pokem.name);
});

export {
  allPoke,
  orderAz,
  orderZa,
  orderNum,
};
