// estas funciones son de ejemplo
// (export const pokeDetails = (object) => 'test';
// export const anotherExample = () => 'OMG';

// CREAR  NUEVA  VARIABLE  ARRAY DE LA DATA.POKEMON
const allPoke = (infoPokemon) => {
  const newArrayPoke = [];
  // cambio el i++ poraparecer con erro eslint  i++ es  igual i +=1
  for (let i = 0; i < infoPokemon.length; i += 1) {
    newArrayPoke.push(infoPokemon[i]);
  }
  return newArrayPoke;
};
export default allPoke;
// ORDENAR ALFABETICAMENTE  DE A a Z (atoz)

// CREAR  FUNCIONES  PARA  FILTRAR  POR TIPO DE   POKEMON
// FILTRO  POR

/*
const typesPoke = (allPokemon,type) => {
  const newDataArray = []; // declara variable con array
  for (let i = 0; i < allPokemon.length; i += 1) { // loop que va recorriendo la data
    newDataArray.push(allPokemon[i]);
  }
  return newDataArray.filter(pokemon => pokemon.type.includes(type));

}; */

// crear funcion para filtro

/* *const AllPoke()
For (i = 0; data.pokemon.length; i++){
} */
/*
const pokeSearch = (nameP) => {
  for (let i = 0; i < data.pokemon.length; i++) {
    if (data.pokemon[i].name === 'pokeName') {
      // eslint-disable-next-line no-console
      console.log(data.pokemon[i].num);
  */
