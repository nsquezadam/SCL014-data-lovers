
// eslint-disable-next-line import/named
import * as fn from '../src/data.js';

// import data from '../src/data/pokemon/pokemon';


// test funcion de  orden de datos  alfabeticamente y numericamente
describe('orderAz', () => {
  it('is a function', () => {
    expect(typeof fn.orderAz).toBe('function');
  });
  const dataOrderName = [{
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
  },
  {
    num: '002',
    name: 'ivysaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
  },
  {
    num: '003',
    name: 'venusaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
  },
  {
    num: '004',
    name: 'charmander',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
  },
  ];
  const dataOrderAz = [{
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
  },
  {
    num: '004',
    name: 'charmander',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
  },
  {
    num: '002',
    name: 'ivysaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
  },
  {
    num: '003',
    name: 'venusaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
  },
  ];

  it('return information names arranged alphabetically', () => {
    expect(fn.orderAz(dataOrderName)).toEqual(dataOrderAz);
  });
});


describe('orderNum', () => {
  it('is a function', () => {
    expect(typeof fn.orderNum).toBe('function');
  });
  const num1 = [{ num: 5 }, { num: 3 }, { num: 6 }, { num: 1 }, { num: 7 }, { num: 2 }, { num: 4 }];
  const num2 = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 5 }, { num: 6 }, { num: 7 }];
  it('return information  arranged number order', () => {
    expect(fn.orderNum(num1)).toEqual(num2);
  });
});


describe('pokeSearch', () => {
  it('should be function', () => {
    expect(typeof fn.pokeSearch).toBe('function');
  });
  test('this function should change the style.display acording the name in imput', () => {
    document.body.innerHTML = `
    <input id="myInput" type="text" name="myPokemon" placeholder="Search for name!" list="nameOfPoke" value="">
    <input type="checkbox" id="kanto" name="kanto" value="type"> KANTO (GENERATION I)<input type="checkbox" id="johto" name="johto" value="type"> JOHTO (GENERATION II)<input type="checkbox" id="bug" name="bug" value="type"> BUG<br><input type="checkbox" id="dark" name="dark" value="type"> DARK<br><input type="checkbox" id="dragon" name="dragon" value="type"> DRAGON<br><input type="checkbox" id="electric" name="electric" value="type"> ELECTRIC<br><input type="checkbox" id="fairy" name="fairy" value="type"> FAIRY<br><input type="checkbox" id="fighting" name="fighting" value="type"> FIGHTING<br><input type="checkbox" id="fire" name="fire" value="type"> FIRE<br><input type="checkbox" id="flying" name="flying" value="type"> FLYING<br><input type="checkbox" id="ghost" name="ghost" value="type"> GHOST<br><input type="checkbox" id="grass" name="grass" value="type"> GRASS<br><input type="checkbox" id="ground" name="ground" value="type"> GROUND<br><input type="checkbox" id="ice" name="ice" value="type"> ICE<br><input type="checkbox" id="normal" name="normal" value="type"> NORMAL<br><input type="checkbox" id="poison" name="poison" value="type"> POISON<br><input type="checkbox" id="psychic" name="psychic" value="type"> PSYCHIC<br><input type="checkbox" id="rock" name="rock" value="type"> ROCK<br><input type="checkbox" id="steel" name="steel" value="type"> STEEL<br><input type="checkbox" id="water" name="water" value="type"> WATER<br></div>
    <div class="card" id="p001"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//001.png" width="130px"> </div>
    <h2 class="info"> BULBASAUR</h2> 
    <h3 class="info">Nº: 001</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.9 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p002"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//002.png" width="130px"> </div>
    <h2 class="info"> IVYSAUR</h2> 
    <h3 class="info">Nº: 002</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 13.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p003"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//003.png" width="130px"> </div>
    <h2 class="info"> VENUSAUR</h2> 
    <h3 class="info">Nº: 003</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 100.0 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p004"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//004.png" width="130px"> </div>
    <h2 class="info"> CHARMANDER</h2> 
    <h3 class="info">Nº: 004</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 8.5 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p005"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//005.png" width="130px"> </div>
    <h2 class="info"> CHARMELEON</h2> 
    <h3 class="info">Nº: 005</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p006"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//006.png" width="130px"> </div>
    <h2 class="info"> CHARIZARD</h2> 
    <h3 class="info">Nº: 006</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 90.5 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: fire,flying</h4></div>
    <div class="card" id="p007"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//007.png" width="130px"> </div>
    <h2 class="info"> SQUIRTLE</h2> 
    <h3 class="info">Nº: 007</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 9.0 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p008"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//008.png" width="130px"> </div>
    <h2 class="info"> WARTORTLE</h2> 
    <h3 class="info">Nº: 008</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 22.5 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p009"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//009.png" width="130px"> </div>
    <h2 class="info"> BLASTOISE</h2> 
    <h3 class="info">Nº: 009</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 85.5 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p010"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//010.png" width="130px"> </div>
    <h2 class="info"> CATERPIE</h2> 
    <h3 class="info">Nº: 010</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 2.9 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: bug</h4></div>
    <div class="card" id="p011"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//011.png" width="130px"> </div>
    <h2 class="info"> METAPOD</h2> 
    <h3 class="info">Nº: 011</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 9.9 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: bug</h4></div>
    <div class="card" id="p012"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//012.png" width="130px"> </div>
    <h2 class="info"> BUTTERFREE</h2> 
    <h3 class="info">Nº: 012</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 32.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: bug,flying</h4></div>
    <div class="card" id="p013"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//013.png" width="130px"> </div>
    <h2 class="info"> WEEDLE</h2> 
    <h3 class="info">Nº: 013</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 3.2 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p014"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//014.png" width="130px"> </div>
    <h2 class="info"> KAKUNA</h2> 
    <h3 class="info">Nº: 014</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 10.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p015"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//015.png" width="130px"> </div>
    <h2 class="info"> BEEDRILL</h2> 
    <h3 class="info">Nº: 015</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 29.5 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p016"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//016.png" width="130px"> </div>
    <h2 class="info"> PIDGEY</h2> 
    <h3 class="info">Nº: 016</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 1.8 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p017"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//017.png" width="130px"> </div>
    <h2 class="info"> PIDGEOTTO</h2> 
    <h3 class="info">Nº: 017</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p018"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//018.png" width="130px"> </div>
    <h2 class="info"> PIDGEOT</h2> 
    <h3 class="info">Nº: 018</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 39.5 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p019"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//019.png" width="130px"> </div>
    <h2 class="info"> RATTATA</h2> 
    <h3 class="info">Nº: 019</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 3.5 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p020"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//020.png" width="130px"> </div>
    <h2 class="info"> RATICATE</h2> 
    <h3 class="info">Nº: 020</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 18.5 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p021"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//021.png" width="130px"> </div>
    <h2 class="info"> SPEAROW</h2> 
    <h3 class="info">Nº: 021</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 2.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p022"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//022.png" width="130px"> </div>
    <h2 class="info"> FEAROW</h2> 
    <h3 class="info">Nº: 022</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 38.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p023"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//023.png" width="130px"> </div>
    <h2 class="info"> EKANS</h2> 
    <h3 class="info">Nº: 023</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.9 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p024"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//024.png" width="130px"> </div>
    <h2 class="info"> ARBOK</h2> 
    <h3 class="info">Nº: 024</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 65.0 kg</h4>
    <h4 class="info">Height: 3.51 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p025"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//025.png" width="130px"> </div>
    <h2 class="info"> PIKACHU</h2> 
    <h3 class="info">Nº: 025</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.0 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p026"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//026.png" width="130px"> </div>
    <h2 class="info"> RAICHU</h2> 
    <h3 class="info">Nº: 026</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p027"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//027.png" width="130px"> </div>
    <h2 class="info"> SANDSHREW</h2> 
    <h3 class="info">Nº: 027</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 12.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p028"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//028.png" width="130px"> </div>
    <h2 class="info"> SANDSLASH</h2> 
    <h3 class="info">Nº: 028</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 29.5 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p029"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//029.png" width="130px"> </div>
    <h2 class="info"> NIDORAN ♀ (FEMALE)</h2> 
    <h3 class="info">Nº: 029</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 7.0 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p030"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//030.png" width="130px"> </div>
    <h2 class="info"> NIDORINA</h2> 
    <h3 class="info">Nº: 030</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 20.0 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p031"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//031.png" width="130px"> </div>
    <h2 class="info"> NIDOQUEEN</h2> 
    <h3 class="info">Nº: 031</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 60.0 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: poison,ground</h4></div>
    <div class="card" id="p032"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//032.png" width="130px"> </div>
    <h2 class="info"> NIDORAN ♂ (MALE)</h2> 
    <h3 class="info">Nº: 032</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 9.0 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p033"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//033.png" width="130px"> </div>
    <h2 class="info"> NIDORINO</h2> 
    <h3 class="info">Nº: 033</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.5 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p034"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//034.png" width="130px"> </div>
    <h2 class="info"> NIDOKING</h2> 
    <h3 class="info">Nº: 034</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 62.0 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: poison,ground</h4></div>
    <div class="card" id="p035"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//035.png" width="130px"> </div>
    <h2 class="info"> CLEFAIRY</h2> 
    <h3 class="info">Nº: 035</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 7.5 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p036"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//036.png" width="130px"> </div>
    <h2 class="info"> CLEFABLE</h2> 
    <h3 class="info">Nº: 036</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 40.0 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p037"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//037.png" width="130px"> </div>
    <h2 class="info"> VULPIX</h2> 
    <h3 class="info">Nº: 037</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 9.9 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p038"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//038.png" width="130px"> </div>
    <h2 class="info"> NINETALES</h2> 
    <h3 class="info">Nº: 038</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.9 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p039"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//039.png" width="130px"> </div>
    <h2 class="info"> JIGGLYPUFF</h2> 
    <h3 class="info">Nº: 039</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 5.5 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p040"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//040.png" width="130px"> </div>
    <h2 class="info"> WIGGLYTUFF</h2> 
    <h3 class="info">Nº: 040</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 12.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p041"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//041.png" width="130px"> </div>
    <h2 class="info"> ZUBAT</h2> 
    <h3 class="info">Nº: 041</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 7.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: poison,flying</h4></div>
    <div class="card" id="p042"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//042.png" width="130px"> </div>
    <h2 class="info"> GOLBAT</h2> 
    <h3 class="info">Nº: 042</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 55.0 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: poison,flying</h4></div>
    <div class="card" id="p043"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//043.png" width="130px"> </div>
    <h2 class="info"> ODDISH</h2> 
    <h3 class="info">Nº: 043</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 5.4 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p044"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//044.png" width="130px"> </div>
    <h2 class="info"> GLOOM</h2> 
    <h3 class="info">Nº: 044</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 8.6 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p045"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//045.png" width="130px"> </div>
    <h2 class="info"> VILEPLUME</h2> 
    <h3 class="info">Nº: 045</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 18.6 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p046"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//046.png" width="130px"> </div>
    <h2 class="info"> PARAS</h2> 
    <h3 class="info">Nº: 046</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 5.4 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: bug,grass</h4></div>
    <div class="card" id="p047"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//047.png" width="130px"> </div>
    <h2 class="info"> PARASECT</h2> 
    <h3 class="info">Nº: 047</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 29.5 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: bug,grass</h4></div>
    <div class="card" id="p048"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//048.png" width="130px"> </div>
    <h2 class="info"> VENONAT</h2> 
    <h3 class="info">Nº: 048</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p049"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//049.png" width="130px"> </div>
    <h2 class="info"> VENOMOTH</h2> 
    <h3 class="info">Nº: 049</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 12.5 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p050"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//050.png" width="130px"> </div>
    <h2 class="info"> DIGLETT</h2> 
    <h3 class="info">Nº: 050</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 0.8 kg</h4>
    <h4 class="info">Height: 0.20 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p051"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//051.png" width="130px"> </div>
    <h2 class="info"> DUGTRIO</h2> 
    <h3 class="info">Nº: 051</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 33.3 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p052"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//052.png" width="130px"> </div>
    <h2 class="info"> MEOWTH</h2> 
    <h3 class="info">Nº: 052</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 4.2 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p053"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//053.png" width="130px"> </div>
    <h2 class="info"> PERSIAN</h2> 
    <h3 class="info">Nº: 053</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 32.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p054"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//054.png" width="130px"> </div>
    <h2 class="info"> PSYDUCK</h2> 
    <h3 class="info">Nº: 054</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.6 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p055"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//055.png" width="130px"> </div>
    <h2 class="info"> GOLDUCK</h2> 
    <h3 class="info">Nº: 055</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 76.6 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p056"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//056.png" width="130px"> </div>
    <h2 class="info"> MANKEY</h2> 
    <h3 class="info">Nº: 056</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 28.0 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p057"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//057.png" width="130px"> </div>
    <h2 class="info"> PRIMEAPE</h2> 
    <h3 class="info">Nº: 057</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 32.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p058"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//058.png" width="130px"> </div>
    <h2 class="info"> GROWLITHE</h2> 
    <h3 class="info">Nº: 058</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.0 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p059"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//059.png" width="130px"> </div>
    <h2 class="info"> ARCANINE</h2> 
    <h3 class="info">Nº: 059</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 155.0 kg</h4>
    <h4 class="info">Height: 1.91 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p060"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//060.png" width="130px"> </div>
    <h2 class="info"> POLIWAG</h2> 
    <h3 class="info">Nº: 060</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 12.4 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p061"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//061.png" width="130px"> </div>
    <h2 class="info"> POLIWHIRL</h2> 
    <h3 class="info">Nº: 061</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 20.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p062"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//062.png" width="130px"> </div>
    <h2 class="info"> POLIWRATH</h2> 
    <h3 class="info">Nº: 062</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 54.0 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: water,fighting</h4></div>
    <div class="card" id="p063"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//063.png" width="130px"> </div>
    <h2 class="info"> ABRA</h2> 
    <h3 class="info">Nº: 063</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.5 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p064"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//064.png" width="130px"> </div>
    <h2 class="info"> KADABRA</h2> 
    <h3 class="info">Nº: 064</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 56.5 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p065"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//065.png" width="130px"> </div>
    <h2 class="info"> ALAKAZAM</h2> 
    <h3 class="info">Nº: 065</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 48.0 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p066"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//066.png" width="130px"> </div>
    <h2 class="info"> MACHOP</h2> 
    <h3 class="info">Nº: 066</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p067"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//067.png" width="130px"> </div>
    <h2 class="info"> MACHOKE</h2> 
    <h3 class="info">Nº: 067</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 70.5 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p068"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//068.png" width="130px"> </div>
    <h2 class="info"> MACHAMP</h2> 
    <h3 class="info">Nº: 068</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 130.0 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p069"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//069.png" width="130px"> </div>
    <h2 class="info"> BELLSPROUT</h2> 
    <h3 class="info">Nº: 069</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 4.0 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p070"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//070.png" width="130px"> </div>
    <h2 class="info"> WEEPINBELL</h2> 
    <h3 class="info">Nº: 070</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.4 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p071"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//071.png" width="130px"> </div>
    <h2 class="info"> VICTREEBEL</h2> 
    <h3 class="info">Nº: 071</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 15.5 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p072"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//072.png" width="130px"> </div>
    <h2 class="info"> TENTACOOL</h2> 
    <h3 class="info">Nº: 072</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 45.5 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: water,poison</h4></div>
    <div class="card" id="p073"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//073.png" width="130px"> </div>
    <h2 class="info"> TENTACRUEL</h2> 
    <h3 class="info">Nº: 073</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 55.0 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: water,poison</h4></div>
    <div class="card" id="p074"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//074.png" width="130px"> </div>
    <h2 class="info"> GEODUDE</h2> 
    <h3 class="info">Nº: 074</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 20.0 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: rock,ground</h4></div>
    <div class="card" id="p075"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//075.png" width="130px"> </div>
    <h2 class="info"> GRAVELER</h2> 
    <h3 class="info">Nº: 075</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 105.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: rock,ground</h4></div>
    <div class="card" id="p076"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//076.png" width="130px"> </div>
    <h2 class="info"> GOLEM</h2> 
    <h3 class="info">Nº: 076</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 300.0 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: rock,ground</h4></div>
    <div class="card" id="p077"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//077.png" width="130px"> </div>
    <h2 class="info"> PONYTA</h2> 
    <h3 class="info">Nº: 077</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p078"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//078.png" width="130px"> </div>
    <h2 class="info"> RAPIDASH</h2> 
    <h3 class="info">Nº: 078</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 95.0 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p079"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//079.png" width="130px"> </div>
    <h2 class="info"> SLOWPOKE</h2> 
    <h3 class="info">Nº: 079</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 36.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: water,psychic</h4></div>
    <div class="card" id="p080"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//080.png" width="130px"> </div>
    <h2 class="info"> SLOWBRO</h2> 
    <h3 class="info">Nº: 080</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 78.5 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: water,psychic</h4></div>
    <div class="card" id="p081"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//081.png" width="130px"> </div>
    <h2 class="info"> MAGNEMITE</h2> 
    <h3 class="info">Nº: 081</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p082"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//082.png" width="130px"> </div>
    <h2 class="info"> MAGNETON</h2> 
    <h3 class="info">Nº: 082</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 60.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p083"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//083.png" width="130px"> </div>
    <h2 class="info"> FARFETCH'D</h2> 
    <h3 class="info">Nº: 083</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 15.0 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p084"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//084.png" width="130px"> </div>
    <h2 class="info"> DODUO</h2> 
    <h3 class="info">Nº: 084</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 39.2 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p085"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//085.png" width="130px"> </div>
    <h2 class="info"> DODRIO</h2> 
    <h3 class="info">Nº: 085</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 85.2 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p086"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//086.png" width="130px"> </div>
    <h2 class="info"> SEEL</h2> 
    <h3 class="info">Nº: 086</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 90.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p087"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//087.png" width="130px"> </div>
    <h2 class="info"> DEWGONG</h2> 
    <h3 class="info">Nº: 087</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 120.0 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: water,ice</h4></div>
    <div class="card" id="p088"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//088.png" width="130px"> </div>
    <h2 class="info"> GRIMER</h2> 
    <h3 class="info">Nº: 088</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p089"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//089.png" width="130px"> </div>
    <h2 class="info"> MUK</h2> 
    <h3 class="info">Nº: 089</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p090"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//090.png" width="130px"> </div>
    <h2 class="info"> SHELLDER</h2> 
    <h3 class="info">Nº: 090</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 4.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p091"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//091.png" width="130px"> </div>
    <h2 class="info"> CLOYSTER</h2> 
    <h3 class="info">Nº: 091</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 132.5 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: water,ice</h4></div>
    <div class="card" id="p092"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//092.png" width="130px"> </div>
    <h2 class="info"> GASTLY</h2> 
    <h3 class="info">Nº: 092</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 0.1 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: ghost,poison</h4></div>
    <div class="card" id="p093"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//093.png" width="130px"> </div>
    <h2 class="info"> HAUNTER</h2> 
    <h3 class="info">Nº: 093</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 0.1 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: ghost,poison</h4></div>
    <div class="card" id="p094"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//094.png" width="130px"> </div>
    <h2 class="info"> GENGAR</h2> 
    <h3 class="info">Nº: 094</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 40.5 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: ghost,poison</h4></div>
    <div class="card" id="p095"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//095.png" width="130px"> </div>
    <h2 class="info"> ONIX</h2> 
    <h3 class="info">Nº: 095</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 210.0 kg</h4>
    <h4 class="info">Height: 8.79 m</h4>
    <h4 class="info">Type: rock,ground</h4></div>
    <div class="card" id="p096"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//096.png" width="130px"> </div>
    <h2 class="info"> DROWZEE</h2> 
    <h3 class="info">Nº: 096</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 32.4 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p097"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//097.png" width="130px"> </div>
    <h2 class="info"> HYPNO</h2> 
    <h3 class="info">Nº: 097</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 75.6 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p098"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//098.png" width="130px"> </div>
    <h2 class="info"> KRABBY</h2> 
    <h3 class="info">Nº: 098</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p099"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//099.png" width="130px"> </div>
    <h2 class="info"> KINGLER</h2> 
    <h3 class="info">Nº: 099</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 60.0 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p100"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//100.png" width="130px"> </div>
    <h2 class="info"> VOLTORB</h2> 
    <h3 class="info">Nº: 100</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 10.4 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p101"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//101.png" width="130px"> </div>
    <h2 class="info"> ELECTRODE</h2> 
    <h3 class="info">Nº: 101</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 66.6 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p102"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//102.png" width="130px"> </div>
    <h2 class="info"> EXEGGCUTE</h2> 
    <h3 class="info">Nº: 102</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 2.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: grass,psychic</h4></div>
    <div class="card" id="p103"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//103.png" width="130px"> </div>
    <h2 class="info"> EXEGGUTOR</h2> 
    <h3 class="info">Nº: 103</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 120.0 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: grass,psychic</h4></div>
    <div class="card" id="p104"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//104.png" width="130px"> </div>
    <h2 class="info"> CUBONE</h2> 
    <h3 class="info">Nº: 104</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p105"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//105.png" width="130px"> </div>
    <h2 class="info"> MAROWAK</h2> 
    <h3 class="info">Nº: 105</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 45.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p106"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//106.png" width="130px"> </div>
    <h2 class="info"> HITMONLEE</h2> 
    <h3 class="info">Nº: 106</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 49.8 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p107"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//107.png" width="130px"> </div>
    <h2 class="info"> HITMONCHAN</h2> 
    <h3 class="info">Nº: 107</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 50.2 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p108"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//108.png" width="130px"> </div>
    <h2 class="info"> LICKITUNG</h2> 
    <h3 class="info">Nº: 108</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 65.5 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p109"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//109.png" width="130px"> </div>
    <h2 class="info"> KOFFING</h2> 
    <h3 class="info">Nº: 109</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 1.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p110"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//110.png" width="130px"> </div>
    <h2 class="info"> WEEZING</h2> 
    <h3 class="info">Nº: 110</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 9.5 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p111"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//111.png" width="130px"> </div>
    <h2 class="info"> RHYHORN</h2> 
    <h3 class="info">Nº: 111</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 115.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: ground,rock</h4></div>
    <div class="card" id="p112"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//112.png" width="130px"> </div>
    <h2 class="info"> RHYDON</h2> 
    <h3 class="info">Nº: 112</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 120.0 kg</h4>
    <h4 class="info">Height: 1.91 m</h4>
    <h4 class="info">Type: ground,rock</h4></div>
    <div class="card" id="p113"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//113.png" width="130px"> </div>
    <h2 class="info"> CHANSEY</h2> 
    <h3 class="info">Nº: 113</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 34.6 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p114"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//114.png" width="130px"> </div>
    <h2 class="info"> TANGELA</h2> 
    <h3 class="info">Nº: 114</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 35.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p115"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//115.png" width="130px"> </div>
    <h2 class="info"> KANGASKHAN</h2> 
    <h3 class="info">Nº: 115</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 80.0 kg</h4>
    <h4 class="info">Height: 2.21 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p116"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//116.png" width="130px"> </div>
    <h2 class="info"> HORSEA</h2> 
    <h3 class="info">Nº: 116</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 8.0 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p117"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//117.png" width="130px"> </div>
    <h2 class="info"> SEADRA</h2> 
    <h3 class="info">Nº: 117</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 25.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p118"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//118.png" width="130px"> </div>
    <h2 class="info"> GOLDEEN</h2> 
    <h3 class="info">Nº: 118</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 15.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p119"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//119.png" width="130px"> </div>
    <h2 class="info"> SEAKING</h2> 
    <h3 class="info">Nº: 119</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 39.0 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p120"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//020.png" width="130px"> </div>
    <h2 class="info"> STARYU</h2> 
    <h3 class="info">Nº: 120</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 34.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p121"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//121.png" width="130px"> </div>
    <h2 class="info"> STARMIE</h2> 
    <h3 class="info">Nº: 121</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 80.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: water,psychic</h4></div>
    <div class="card" id="p122"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//122.png" width="130px"> </div>
    <h2 class="info"> MR. MIME</h2> 
    <h3 class="info">Nº: 122</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 54.5 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p123"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//123.png" width="130px"> </div>
    <h2 class="info"> SCYTHER</h2> 
    <h3 class="info">Nº: 123</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 56.0 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: bug,flying</h4></div>
    <div class="card" id="p124"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//124.png" width="130px"> </div>
    <h2 class="info"> JYNX</h2> 
    <h3 class="info">Nº: 124</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 40.6 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: ice,psychic</h4></div>
    <div class="card" id="p125"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//125.png" width="130px"> </div>
    <h2 class="info"> ELECTABUZZ</h2> 
    <h3 class="info">Nº: 125</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p126"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//126.png" width="130px"> </div>
    <h2 class="info"> MAGMAR</h2> 
    <h3 class="info">Nº: 126</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 44.5 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p127"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//127.png" width="130px"> </div>
    <h2 class="info"> PINSIR</h2> 
    <h3 class="info">Nº: 127</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 55.0 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: bug</h4></div>
    <div class="card" id="p128"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//128.png" width="130px"> </div>
    <h2 class="info"> TAUROS</h2> 
    <h3 class="info">Nº: 128</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 88.4 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p129"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//129.png" width="130px"> </div>
    <h2 class="info"> MAGIKARP</h2> 
    <h3 class="info">Nº: 129</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 10.0 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p130"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//130.png" width="130px"> </div>
    <h2 class="info"> GYARADOS</h2> 
    <h3 class="info">Nº: 130</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 235.0 kg</h4>
    <h4 class="info">Height: 6.50 m</h4>
    <h4 class="info">Type: water,flying</h4></div>
    <div class="card" id="p131"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//131.png" width="130px"> </div>
    <h2 class="info"> LAPRAS</h2> 
    <h3 class="info">Nº: 131</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 220.0 kg</h4>
    <h4 class="info">Height: 2.49 m</h4>
    <h4 class="info">Type: water,ice</h4></div>
    <div class="card" id="p132"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//132.png" width="130px"> </div>
    <h2 class="info"> DITTO</h2> 
    <h3 class="info">Nº: 132</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 4.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p133"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//133.png" width="130px"> </div>
    <h2 class="info"> EEVEE</h2> 
    <h3 class="info">Nº: 133</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.5 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p134"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//134.png" width="130px"> </div>
    <h2 class="info"> VAPOREON</h2> 
    <h3 class="info">Nº: 134</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 29.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p135"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//135.png" width="130px"> </div>
    <h2 class="info"> JOLTEON</h2> 
    <h3 class="info">Nº: 135</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 24.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p136"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//136.png" width="130px"> </div>
    <h2 class="info"> FLAREON</h2> 
    <h3 class="info">Nº: 136</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 25.0 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p137"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//137.png" width="130px"> </div>
    <h2 class="info"> PORYGON</h2> 
    <h3 class="info">Nº: 137</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 36.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p138"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//138.png" width="130px"> </div>
    <h2 class="info"> OMANYTE</h2> 
    <h3 class="info">Nº: 138</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 7.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: rock,water</h4></div>
    <div class="card" id="p139"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//139.png" width="130px"> </div>
    <h2 class="info"> OMASTAR</h2> 
    <h3 class="info">Nº: 139</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 35.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: rock,water</h4></div>
    <div class="card" id="p140"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//140.png" width="130px"> </div>
    <h2 class="info"> KABUTO</h2> 
    <h3 class="info">Nº: 140</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 11.5 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: rock,water</h4></div>
    <div class="card" id="p141"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//141.png" width="130px"> </div>
    <h2 class="info"> KABUTOPS</h2> 
    <h3 class="info">Nº: 141</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 40.5 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: rock,water</h4></div>
    <div class="card" id="p142"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//142.png" width="130px"> </div>
    <h2 class="info"> AERODACTYL</h2> 
    <h3 class="info">Nº: 142</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 59.0 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: rock,flying</h4></div>
    <div class="card" id="p143"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//143.png" width="130px"> </div>
    <h2 class="info"> SNORLAX</h2> 
    <h3 class="info">Nº: 143</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 460.0 kg</h4>
    <h4 class="info">Height: 2.11 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p144"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//144.png" width="130px"> </div>
    <h2 class="info"> ARTICUNO</h2> 
    <h3 class="info">Nº: 144</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 55.4 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: ice,flying</h4></div>
    <div class="card" id="p145"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//145.png" width="130px"> </div>
    <h2 class="info"> ZAPDOS</h2> 
    <h3 class="info">Nº: 145</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 52.6 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: electric,flying</h4></div>
    <div class="card" id="p146"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//146.png" width="130px"> </div>
    <h2 class="info"> MOLTRES</h2> 
    <h3 class="info">Nº: 146</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 60.0 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: fire,flying</h4></div>
    <div class="card" id="p147"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//147.png" width="130px"> </div>
    <h2 class="info"> DRATINI</h2> 
    <h3 class="info">Nº: 147</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 3.3 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: dragon</h4></div>
    <div class="card" id="p148"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//148.png" width="130px"> </div>
    <h2 class="info"> DRAGONAIR</h2> 
    <h3 class="info">Nº: 148</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 16.5 kg</h4>
    <h4 class="info">Height: 3.99 m</h4>
    <h4 class="info">Type: dragon</h4></div>
    <div class="card" id="p149"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//149.png" width="130px"> </div>
    <h2 class="info"> DRAGONITE</h2> 
    <h3 class="info">Nº: 149</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 210.0 kg</h4>
    <h4 class="info">Height: 2.21 m</h4>
    <h4 class="info">Type: dragon,flying</h4></div>
    <div class="card" id="p150"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//150.png" width="130px"> </div>
    <h2 class="info"> MEWTWO</h2> 
    <h3 class="info">Nº: 150</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 122.0 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p151"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//151.png" width="130px"> </div>
    <h2 class="info"> MEW</h2> 
    <h3 class="info">Nº: 151</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 4.0 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p152"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//152.png" width="130px"> </div>
    <h2 class="info"> CHIKORITA</h2> 
    <h3 class="info">Nº: 152</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 6.4 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p153"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//153.png" width="130px"> </div>
    <h2 class="info"> BAYLEEF</h2> 
    <h3 class="info">Nº: 153</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 15.8 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p154"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//154.png" width="130px"> </div>
    <h2 class="info"> MEGANIUM</h2> 
    <h3 class="info">Nº: 154</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 100.5 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p155"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//155.png" width="130px"> </div>
    <h2 class="info"> CYNDAQUIL</h2> 
    <h3 class="info">Nº: 155</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 7.9 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p156"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//156.png" width="130px"> </div>
    <h2 class="info"> QUILAVA</h2> 
    <h3 class="info">Nº: 156</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 19.0 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p157"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//157.png" width="130px"> </div>
    <h2 class="info"> TYPHLOSION</h2> 
    <h3 class="info">Nº: 157</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 79.5 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p158"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//158.png" width="130px"> </div>
    <h2 class="info"> TOTODILE</h2> 
    <h3 class="info">Nº: 158</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 9.5 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p159"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//159.png" width="130px"> </div>
    <h2 class="info"> CROCONAW</h2> 
    <h3 class="info">Nº: 159</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 25.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p160"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//160.png" width="130px"> </div>
    <h2 class="info"> FERALIGATR</h2> 
    <h3 class="info">Nº: 160</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 88.8 kg</h4>
    <h4 class="info">Height: 2.31 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p161"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//161.png" width="130px"> </div>
    <h2 class="info"> SENTRET</h2> 
    <h3 class="info">Nº: 161</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 6.0 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p162"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//162.png" width="130px"> </div>
    <h2 class="info"> FURRET</h2> 
    <h3 class="info">Nº: 162</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 32.5 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p163"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//163.png" width="130px"> </div>
    <h2 class="info"> HOOTHOOT</h2> 
    <h3 class="info">Nº: 163</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 21.2 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p164"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//164.png" width="130px"> </div>
    <h2 class="info"> NOCTOWL</h2> 
    <h3 class="info">Nº: 164</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 40.8 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p165"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//165.png" width="130px"> </div>
    <h2 class="info"> LEDYBA</h2> 
    <h3 class="info">Nº: 165</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 10.8 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: bug,flying</h4></div>
    <div class="card" id="p166"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//166.png" width="130px"> </div>
    <h2 class="info"> LEDIAN</h2> 
    <h3 class="info">Nº: 166</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 35.6 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: bug,flying</h4></div>
    <div class="card" id="p167"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//167.png" width="130px"> </div>
    <h2 class="info"> SPINARAK</h2> 
    <h3 class="info">Nº: 167</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 8.5 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p168"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//168.png" width="130px"> </div>
    <h2 class="info"> ARIADOS</h2> 
    <h3 class="info">Nº: 168</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 33.5 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p169"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//169.png" width="130px"> </div>
    <h2 class="info"> CROBAT</h2> 
    <h3 class="info">Nº: 169</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 75.0 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: poison,flying</h4></div>
    <div class="card" id="p170"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//170.png" width="130px"> </div>
    <h2 class="info"> CHINCHOU</h2> 
    <h3 class="info">Nº: 170</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 12.0 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: water,electric</h4></div>
    <div class="card" id="p171"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//171.png" width="130px"> </div>
    <h2 class="info"> LANTURN</h2> 
    <h3 class="info">Nº: 171</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 22.5 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: water,electric</h4></div>
    <div class="card" id="p172"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//172.png" width="130px"> </div>
    <h2 class="info"> PICHU</h2> 
    <h3 class="info">Nº: 172</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 2.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p173"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//173.png" width="130px"> </div>
    <h2 class="info"> CLEFFA</h2> 
    <h3 class="info">Nº: 173</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 3.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: fairy</h4></div>
    <div class="card" id="p174"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//174.png" width="130px"> </div>
    <h2 class="info"> IGGLYBUFF</h2> 
    <h3 class="info">Nº: 174</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 1.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: normal,fairy</h4></div>
    <div class="card" id="p175"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//175.png" width="130px"> </div>
    <h2 class="info"> TOGEPI</h2> 
    <h3 class="info">Nº: 175</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 1.5 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: fairy</h4></div>
    <div class="card" id="p176"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//176.png" width="130px"> </div>
    <h2 class="info"> TOGETIC</h2> 
    <h3 class="info">Nº: 176</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 3.2 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: fairy,flying</h4></div>
    <div class="card" id="p177"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//177.png" width="130px"> </div>
    <h2 class="info"> NATU</h2> 
    <h3 class="info">Nº: 177</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 2.0 kg</h4>
    <h4 class="info">Height: 0.21 m</h4>
    <h4 class="info">Type: psychic,flying</h4></div>
    <div class="card" id="p178"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//178.png" width="130px"> </div>
    <h2 class="info"> XATU</h2> 
    <h3 class="info">Nº: 178</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 15.0 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: psychic,flying</h4></div>
    <div class="card" id="p179"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//179.png" width="130px"> </div>
    <h2 class="info"> MAREEP</h2> 
    <h3 class="info">Nº: 179</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 7.8 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p180"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//180.png" width="130px"> </div>
    <h2 class="info"> FLAAFFY</h2> 
    <h3 class="info">Nº: 180</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 13.3 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p181"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//181.png" width="130px"> </div>
    <h2 class="info"> AMPHAROS</h2> 
    <h3 class="info">Nº: 181</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 61.5 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p182"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//182.png" width="130px"> </div>
    <h2 class="info"> BELLOSSOM</h2> 
    <h3 class="info">Nº: 182</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 5.8 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p183"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//183.png" width="130px"> </div>
    <h2 class="info"> MARILL</h2> 
    <h3 class="info">Nº: 183</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 8.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: water,fairy</h4></div>
    <div class="card" id="p184"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//184.png" width="130px"> </div>
    <h2 class="info"> AZUMARILL</h2> 
    <h3 class="info">Nº: 184</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 28.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: water,fairy</h4></div>
    <div class="card" id="p185"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//185.png" width="130px"> </div>
    <h2 class="info"> SUDOWOODO</h2> 
    <h3 class="info">Nº: 185</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 38.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: rock</h4></div>
    <div class="card" id="p186"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//186.png" width="130px"> </div>
    <h2 class="info"> POLITOED</h2> 
    <h3 class="info">Nº: 186</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 33.9 kg</h4>
    <h4 class="info">Height: 10.90 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p187"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//187.png" width="130px"> </div>
    <h2 class="info"> HOPPIP</h2> 
    <h3 class="info">Nº: 187</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 0.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: grass,flying</h4></div>
    <div class="card" id="p188"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//188.png" width="130px"> </div>
    <h2 class="info"> SKIPLOOM</h2> 
    <h3 class="info">Nº: 188</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 1.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: grass,flying</h4></div>
    <div class="card" id="p189"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//189.png" width="130px"> </div>
    <h2 class="info"> JUMPLUFF</h2> 
    <h3 class="info">Nº: 189</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 3.0 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: grass,flying</h4></div>
    <div class="card" id="p190"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//190.png" width="130px"> </div>
    <h2 class="info"> AIPOM</h2> 
    <h3 class="info">Nº: 190</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 11.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p191"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//191.png" width="130px"> </div>
    <h2 class="info"> SUNKERN</h2> 
    <h3 class="info">Nº: 191</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 1.8 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p192"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//192.png" width="130px"> </div>
    <h2 class="info"> SUNFLORA</h2> 
    <h3 class="info">Nº: 192</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 8.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p193"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//193.png" width="130px"> </div>
    <h2 class="info"> YANMA</h2> 
    <h3 class="info">Nº: 193</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 38.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: bug,flying</h4></div>
    <div class="card" id="p194"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//194.png" width="130px"> </div>
    <h2 class="info"> WOOPER</h2> 
    <h3 class="info">Nº: 194</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 8.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: water,ground</h4></div>
    <div class="card" id="p195"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//195.png" width="130px"> </div>
    <h2 class="info"> QUAGSIRE</h2> 
    <h3 class="info">Nº: 195</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 75.0 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: water,ground</h4></div>
    <div class="card" id="p196"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//196.png" width="130px"> </div>
    <h2 class="info"> ESPEON</h2> 
    <h3 class="info">Nº: 196</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 26.5 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p197"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//197.png" width="130px"> </div>
    <h2 class="info"> UMBREON</h2> 
    <h3 class="info">Nº: 197</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 27.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: dark</h4></div>
    <div class="card" id="p198"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//198.png" width="130px"> </div>
    <h2 class="info"> MURKROW</h2> 
    <h3 class="info">Nº: 198</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 2.1 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: dark,flying</h4></div>
    <div class="card" id="p199"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//199.png" width="130px"> </div>
    <h2 class="info"> SLOWKING</h2> 
    <h3 class="info">Nº: 199</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 79.5 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: water,psychic</h4></div>
    <div class="card" id="p200"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//200.png" width="130px"> </div>
    <h2 class="info"> MISDREAVUS</h2> 
    <h3 class="info">Nº: 200</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 1.0 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: ghost</h4></div>
    <div class="card" id="p201"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//201.png" width="130px"> </div>
    <h2 class="info"> UNOWN</h2> 
    <h3 class="info">Nº: 201</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 5.0 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p202"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//202.png" width="130px"> </div>
    <h2 class="info"> WOBBUFFET</h2> 
    <h3 class="info">Nº: 202</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 28.5 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p203"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//203.png" width="130px"> </div>
    <h2 class="info"> GIRAFARIG</h2> 
    <h3 class="info">Nº: 203</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 41.5 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: normal,psychic</h4></div>
    <div class="card" id="p204"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//204.png" width="130px"> </div>
    <h2 class="info"> PINECO</h2> 
    <h3 class="info">Nº: 204</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 7.2 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: bug</h4></div>
    <div class="card" id="p205"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//205.png" width="130px"> </div>
    <h2 class="info"> FORRETRESS</h2> 
    <h3 class="info">Nº: 205</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 125.8 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: bug,steel</h4></div>
    <div class="card" id="p206"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//206.png" width="130px"> </div>
    <h2 class="info"> DUNSPARCE</h2> 
    <h3 class="info">Nº: 206</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 14.0 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p207"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//207.png" width="130px"> </div>
    <h2 class="info"> GLIGAR</h2> 
    <h3 class="info">Nº: 207</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 64.8 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: ground,flying</h4></div>
    <div class="card" id="p208"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//208.png" width="130px"> </div>
    <h2 class="info"> STEELIX</h2> 
    <h3 class="info">Nº: 208</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 400.0 kg</h4>
    <h4 class="info">Height: 9.19 m</h4>
    <h4 class="info">Type: steel,ground</h4></div>
    <div class="card" id="p209"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//209.png" width="130px"> </div>
    <h2 class="info"> SNUBBULL</h2> 
    <h3 class="info">Nº: 209</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 7.8 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: fairy</h4></div>
    <div class="card" id="p210"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//210.png" width="130px"> </div>
    <h2 class="info"> GRANBULL</h2> 
    <h3 class="info">Nº: 210</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 48.7 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: fairy</h4></div>
    <div class="card" id="p211"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//211.png" width="130px"> </div>
    <h2 class="info"> QWILFISH</h2> 
    <h3 class="info">Nº: 211</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 3.9 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: water,poison</h4></div>
    <div class="card" id="p212"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//212.png" width="130px"> </div>
    <h2 class="info"> SCIZOR</h2> 
    <h3 class="info">Nº: 212</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 125.0 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: bug,steel</h4></div>
    <div class="card" id="p213"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//213.png" width="130px"> </div>
    <h2 class="info"> SHUCKLE</h2> 
    <h3 class="info">Nº: 213</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 20.5 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: bug,rock</h4></div>
    <div class="card" id="p214"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//214.png" width="130px"> </div>
    <h2 class="info"> HERACROSS</h2> 
    <h3 class="info">Nº: 214</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 54.0 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: bug,fighting</h4></div>
    <div class="card" id="p215"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//215.png" width="130px"> </div>
    <h2 class="info"> SNEASEL</h2> 
    <h3 class="info">Nº: 215</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 28.0 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: dark,ice</h4></div>
    <div class="card" id="p216"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//216.png" width="130px"> </div>
    <h2 class="info"> TEDDIURSA</h2> 
    <h3 class="info">Nº: 216</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 8.8 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p217"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//217.png" width="130px"> </div>
    <h2 class="info"> URSARING</h2> 
    <h3 class="info">Nº: 217</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 125.8 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p218"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//218.png" width="130px"> </div>
    <h2 class="info"> SLUGMA</h2> 
    <h3 class="info">Nº: 218</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 35.0 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p219"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//219.png" width="130px"> </div>
    <h2 class="info"> MAGCARGO</h2> 
    <h3 class="info">Nº: 219</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 55.0 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: fire,rock</h4></div>
    <div class="card" id="p220"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//220.png" width="130px"> </div>
    <h2 class="info"> SWINUB</h2> 
    <h3 class="info">Nº: 220</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 6.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: ice,ground</h4></div>
    <div class="card" id="p221"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//221.png" width="130px"> </div>
    <h2 class="info"> PILOSWINE</h2> 
    <h3 class="info">Nº: 221</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 55.8 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: ice,ground</h4></div>
    <div class="card" id="p222"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//222.png" width="130px"> </div>
    <h2 class="info"> CORSOLA</h2> 
    <h3 class="info">Nº: 222</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 5.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: water,rock</h4></div>
    <div class="card" id="p223"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//223.png" width="130px"> </div>
    <h2 class="info"> REMORAID</h2> 
    <h3 class="info">Nº: 223</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 12.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p224"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//224.png" width="130px"> </div>
    <h2 class="info"> OCTILLERY</h2> 
    <h3 class="info">Nº: 224</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 28.5 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p225"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//225.png" width="130px"> </div>
    <h2 class="info"> DELIBIRD</h2> 
    <h3 class="info">Nº: 225</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 16.0 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: ice,flying</h4></div>
    <div class="card" id="p226"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//226.png" width="130px"> </div>
    <h2 class="info"> MANTINE</h2> 
    <h3 class="info">Nº: 226</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 220.0 kg</h4>
    <h4 class="info">Height: 2.11 m</h4>
    <h4 class="info">Type: water,flying</h4></div>
    <div class="card" id="p227"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//227.png" width="130px"> </div>
    <h2 class="info"> SKARMORY</h2> 
    <h3 class="info">Nº: 227</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 50.5 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: steel,flying</h4></div>
    <div class="card" id="p228"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//228.png" width="130px"> </div>
    <h2 class="info"> HOUNDOUR</h2> 
    <h3 class="info">Nº: 228</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 10.8 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: dark,fire</h4></div>
    <div class="card" id="p229"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//229.png" width="130px"> </div>
    <h2 class="info"> HOUNDOOM</h2> 
    <h3 class="info">Nº: 229</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 35.0 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: dark,fire</h4></div>
    <div class="card" id="p230"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//230.png" width="130px"> </div>
    <h2 class="info"> KINGDRA</h2> 
    <h3 class="info">Nº: 230</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 152.0 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: water,dragon</h4></div>
    <div class="card" id="p231"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//231.png" width="130px"> </div>
    <h2 class="info"> PHANPY</h2> 
    <h3 class="info">Nº: 231</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 33.5 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p232"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//232.png" width="130px"> </div>
    <h2 class="info"> DONPHAN</h2> 
    <h3 class="info">Nº: 232</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 120.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p233"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//233.png" width="130px"> </div>
    <h2 class="info"> PORYGON2</h2> 
    <h3 class="info">Nº: 233</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 32.5 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p234"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//234.png" width="130px"> </div>
    <h2 class="info"> STANTLER</h2> 
    <h3 class="info">Nº: 234</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 71.2 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p235"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//235.png" width="130px"> </div>
    <h2 class="info"> SMEARGLE</h2> 
    <h3 class="info">Nº: 235</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 58.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p236"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//236.png" width="130px"> </div>
    <h2 class="info"> TYROGUE</h2> 
    <h3 class="info">Nº: 236</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 21.0 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p237"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//237.png" width="130px"> </div>
    <h2 class="info"> HITMONTOP</h2> 
    <h3 class="info">Nº: 237</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 48.0 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p238"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//238.png" width="130px"> </div>
    <h2 class="info"> SMOOCHUM</h2> 
    <h3 class="info">Nº: 238</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 6.0 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: ice,psychic</h4></div>
    <div class="card" id="p239"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//239.png" width="130px"> </div>
    <h2 class="info"> ELEKID</h2> 
    <h3 class="info">Nº: 239</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 23.5 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p240"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//240.png" width="130px"> </div>
    <h2 class="info"> MAGBY</h2> 
    <h3 class="info">Nº: 240</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 21.4 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p241"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//241.png" width="130px"> </div>
    <h2 class="info"> MILTANK</h2> 
    <h3 class="info">Nº: 241</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 75.5 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p242"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//242.png" width="130px"> </div>
    <h2 class="info"> BLISSEY</h2> 
    <h3 class="info">Nº: 242</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 46.8 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p243"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//243.png" width="130px"> </div>
    <h2 class="info"> RAIKOU</h2> 
    <h3 class="info">Nº: 243</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 178.0 kg</h4>
    <h4 class="info">Height: 1.91 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p244"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//244.png" width="130px"> </div>
    <h2 class="info"> ENTEI</h2> 
    <h3 class="info">Nº: 244</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 198.0 kg</h4>
    <h4 class="info">Height: 2.11 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p245"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//245.png" width="130px"> </div>
    <h2 class="info"> SUICUNE</h2> 
    <h3 class="info">Nº: 245</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 187.0 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p246"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//246.png" width="130px"> </div>
    <h2 class="info"> LARVITAR</h2> 
    <h3 class="info">Nº: 246</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 72.0 kg</h4>
    <h4 class="info">Height: 0.60 m</h4>
    <h4 class="info">Type: rock,ground</h4></div>
    <div class="card" id="p247"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//247.png" width="130px"> </div>
    <h2 class="info"> PUPITAR</h2> 
    <h3 class="info">Nº: 247</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 152.0 kg</h4>
    <h4 class="info">Height: 1.20 m</h4>
    <h4 class="info">Type: rock,ground</h4></div>
    <div class="card" id="p248"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//248.png" width="130px"> </div>
    <h2 class="info"> TYRANITAR</h2> 
    <h3 class="info">Nº: 248</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 202.0 kg</h4>
    <h4 class="info">Height: 2.00 m</h4>
    <h4 class="info">Type: rock,dark</h4></div>
    <div class="card" id="p249"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//249.png" width="130px"> </div>
    <h2 class="info"> LUGIA</h2> 
    <h3 class="info">Nº: 249</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 216.0 kg</h4>
    <h4 class="info">Height: 5.21 m</h4>
    <h4 class="info">Type: psychic,flying</h4></div>
    <div class="card" id="p250"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//250.png" width="130px"> </div>
    <h2 class="info"> HO-OH</h2> 
    <h3 class="info">Nº: 250</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 199.0 kg</h4>
    <h4 class="info">Height: 3.80 m</h4>
    <h4 class="info">Type: fire,flying</h4></div>
    <div class="card" id="p251"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//251.png" width="130px"> </div>
    <h2 class="info"> CELEBI</h2> 
    <h3 class="info">Nº: 251</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 5.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: psychic,grass</h4></div></div>
    `;

    document.getElementById('myInput').value = 'bulbasaur';
    fn.pokeSearch();
    expect(document.getElementById('p001').style.display).toBe('block');
  });
});


describe('filterType', () => {
  it('should be function', () => {
    expect(typeof fn.filterType).toBe('function');
  });
  test('this function should change the style.display acording the name in imput', () => {
    document.body.innerHTML = `
    <input id="myInput" type="text" name="myPokemon" placeholder="Search for name!" list="nameOfPoke" value="">
    <input type="checkbox" id="kanto" name="kanto" value="type"> KANTO (GENERATION I)<input type="checkbox" id="johto" name="johto" value="type"> JOHTO (GENERATION II)<input type="checkbox" id="bug" name="bug" value="type"> BUG<br><input type="checkbox" id="dark" name="dark" value="type"> DARK<br><input type="checkbox" id="dragon" name="dragon" value="type"> DRAGON<br><input type="checkbox" id="electric" name="electric" value="type"> ELECTRIC<br><input type="checkbox" id="fairy" name="fairy" value="type"> FAIRY<br><input type="checkbox" id="fighting" name="fighting" value="type"> FIGHTING<br><input type="checkbox" id="fire" name="fire" value="type"> FIRE<br><input type="checkbox" id="flying" name="flying" value="type"> FLYING<br><input type="checkbox" id="ghost" name="ghost" value="type"> GHOST<br><input type="checkbox" id="grass" name="grass" value="type"> GRASS<br><input type="checkbox" id="ground" name="ground" value="type"> GROUND<br><input type="checkbox" id="ice" name="ice" value="type"> ICE<br><input type="checkbox" id="normal" name="normal" value="type"> NORMAL<br><input type="checkbox" id="poison" name="poison" value="type"> POISON<br><input type="checkbox" id="psychic" name="psychic" value="type"> PSYCHIC<br><input type="checkbox" id="rock" name="rock" value="type"> ROCK<br><input type="checkbox" id="steel" name="steel" value="type"> STEEL<br><input type="checkbox" id="water" name="water" value="type"> WATER<br></div>
    <div class="card" id="p001"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//001.png" width="130px"> </div>
    <h2 class="info"> BULBASAUR</h2> 
    <h3 class="info">Nº: 001</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.9 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p002"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//002.png" width="130px"> </div>
    <h2 class="info"> IVYSAUR</h2> 
    <h3 class="info">Nº: 002</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 13.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p003"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//003.png" width="130px"> </div>
    <h2 class="info"> VENUSAUR</h2> 
    <h3 class="info">Nº: 003</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 100.0 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p004"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//004.png" width="130px"> </div>
    <h2 class="info"> CHARMANDER</h2> 
    <h3 class="info">Nº: 004</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 8.5 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p005"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//005.png" width="130px"> </div>
    <h2 class="info"> CHARMELEON</h2> 
    <h3 class="info">Nº: 005</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p006"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//006.png" width="130px"> </div>
    <h2 class="info"> CHARIZARD</h2> 
    <h3 class="info">Nº: 006</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 90.5 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: fire,flying</h4></div>
    <div class="card" id="p007"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//007.png" width="130px"> </div>
    <h2 class="info"> SQUIRTLE</h2> 
    <h3 class="info">Nº: 007</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 9.0 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p008"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//008.png" width="130px"> </div>
    <h2 class="info"> WARTORTLE</h2> 
    <h3 class="info">Nº: 008</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 22.5 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p009"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//009.png" width="130px"> </div>
    <h2 class="info"> BLASTOISE</h2> 
    <h3 class="info">Nº: 009</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 85.5 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p010"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//010.png" width="130px"> </div>
    <h2 class="info"> CATERPIE</h2> 
    <h3 class="info">Nº: 010</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 2.9 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: bug</h4></div>
    <div class="card" id="p011"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//011.png" width="130px"> </div>
    <h2 class="info"> METAPOD</h2> 
    <h3 class="info">Nº: 011</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 9.9 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: bug</h4></div>
    <div class="card" id="p012"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//012.png" width="130px"> </div>
    <h2 class="info"> BUTTERFREE</h2> 
    <h3 class="info">Nº: 012</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 32.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: bug,flying</h4></div>
    <div class="card" id="p013"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//013.png" width="130px"> </div>
    <h2 class="info"> WEEDLE</h2> 
    <h3 class="info">Nº: 013</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 3.2 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p014"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//014.png" width="130px"> </div>
    <h2 class="info"> KAKUNA</h2> 
    <h3 class="info">Nº: 014</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 10.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p015"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//015.png" width="130px"> </div>
    <h2 class="info"> BEEDRILL</h2> 
    <h3 class="info">Nº: 015</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 29.5 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p016"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//016.png" width="130px"> </div>
    <h2 class="info"> PIDGEY</h2> 
    <h3 class="info">Nº: 016</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 1.8 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p017"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//017.png" width="130px"> </div>
    <h2 class="info"> PIDGEOTTO</h2> 
    <h3 class="info">Nº: 017</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p018"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//018.png" width="130px"> </div>
    <h2 class="info"> PIDGEOT</h2> 
    <h3 class="info">Nº: 018</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 39.5 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p019"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//019.png" width="130px"> </div>
    <h2 class="info"> RATTATA</h2> 
    <h3 class="info">Nº: 019</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 3.5 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p020"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//020.png" width="130px"> </div>
    <h2 class="info"> RATICATE</h2> 
    <h3 class="info">Nº: 020</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 18.5 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p021"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//021.png" width="130px"> </div>
    <h2 class="info"> SPEAROW</h2> 
    <h3 class="info">Nº: 021</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 2.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p022"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//022.png" width="130px"> </div>
    <h2 class="info"> FEAROW</h2> 
    <h3 class="info">Nº: 022</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 38.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p023"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//023.png" width="130px"> </div>
    <h2 class="info"> EKANS</h2> 
    <h3 class="info">Nº: 023</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.9 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p024"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//024.png" width="130px"> </div>
    <h2 class="info"> ARBOK</h2> 
    <h3 class="info">Nº: 024</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 65.0 kg</h4>
    <h4 class="info">Height: 3.51 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p025"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//025.png" width="130px"> </div>
    <h2 class="info"> PIKACHU</h2> 
    <h3 class="info">Nº: 025</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.0 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p026"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//026.png" width="130px"> </div>
    <h2 class="info"> RAICHU</h2> 
    <h3 class="info">Nº: 026</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p027"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//027.png" width="130px"> </div>
    <h2 class="info"> SANDSHREW</h2> 
    <h3 class="info">Nº: 027</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 12.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p028"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//028.png" width="130px"> </div>
    <h2 class="info"> SANDSLASH</h2> 
    <h3 class="info">Nº: 028</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 29.5 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p029"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//029.png" width="130px"> </div>
    <h2 class="info"> NIDORAN ♀ (FEMALE)</h2> 
    <h3 class="info">Nº: 029</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 7.0 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p030"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//030.png" width="130px"> </div>
    <h2 class="info"> NIDORINA</h2> 
    <h3 class="info">Nº: 030</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 20.0 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p031"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//031.png" width="130px"> </div>
    <h2 class="info"> NIDOQUEEN</h2> 
    <h3 class="info">Nº: 031</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 60.0 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: poison,ground</h4></div>
    <div class="card" id="p032"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//032.png" width="130px"> </div>
    <h2 class="info"> NIDORAN ♂ (MALE)</h2> 
    <h3 class="info">Nº: 032</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 9.0 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p033"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//033.png" width="130px"> </div>
    <h2 class="info"> NIDORINO</h2> 
    <h3 class="info">Nº: 033</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.5 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p034"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//034.png" width="130px"> </div>
    <h2 class="info"> NIDOKING</h2> 
    <h3 class="info">Nº: 034</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 62.0 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: poison,ground</h4></div>
    <div class="card" id="p035"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//035.png" width="130px"> </div>
    <h2 class="info"> CLEFAIRY</h2> 
    <h3 class="info">Nº: 035</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 7.5 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p036"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//036.png" width="130px"> </div>
    <h2 class="info"> CLEFABLE</h2> 
    <h3 class="info">Nº: 036</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 40.0 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p037"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//037.png" width="130px"> </div>
    <h2 class="info"> VULPIX</h2> 
    <h3 class="info">Nº: 037</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 9.9 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p038"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//038.png" width="130px"> </div>
    <h2 class="info"> NINETALES</h2> 
    <h3 class="info">Nº: 038</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.9 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p039"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//039.png" width="130px"> </div>
    <h2 class="info"> JIGGLYPUFF</h2> 
    <h3 class="info">Nº: 039</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 5.5 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p040"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//040.png" width="130px"> </div>
    <h2 class="info"> WIGGLYTUFF</h2> 
    <h3 class="info">Nº: 040</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 12.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p041"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//041.png" width="130px"> </div>
    <h2 class="info"> ZUBAT</h2> 
    <h3 class="info">Nº: 041</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 7.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: poison,flying</h4></div>
    <div class="card" id="p042"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//042.png" width="130px"> </div>
    <h2 class="info"> GOLBAT</h2> 
    <h3 class="info">Nº: 042</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 55.0 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: poison,flying</h4></div>
    <div class="card" id="p043"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//043.png" width="130px"> </div>
    <h2 class="info"> ODDISH</h2> 
    <h3 class="info">Nº: 043</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 5.4 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p044"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//044.png" width="130px"> </div>
    <h2 class="info"> GLOOM</h2> 
    <h3 class="info">Nº: 044</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 8.6 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p045"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//045.png" width="130px"> </div>
    <h2 class="info"> VILEPLUME</h2> 
    <h3 class="info">Nº: 045</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 18.6 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p046"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//046.png" width="130px"> </div>
    <h2 class="info"> PARAS</h2> 
    <h3 class="info">Nº: 046</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 5.4 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: bug,grass</h4></div>
    <div class="card" id="p047"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//047.png" width="130px"> </div>
    <h2 class="info"> PARASECT</h2> 
    <h3 class="info">Nº: 047</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 29.5 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: bug,grass</h4></div>
    <div class="card" id="p048"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//048.png" width="130px"> </div>
    <h2 class="info"> VENONAT</h2> 
    <h3 class="info">Nº: 048</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p049"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//049.png" width="130px"> </div>
    <h2 class="info"> VENOMOTH</h2> 
    <h3 class="info">Nº: 049</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 12.5 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p050"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//050.png" width="130px"> </div>
    <h2 class="info"> DIGLETT</h2> 
    <h3 class="info">Nº: 050</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 0.8 kg</h4>
    <h4 class="info">Height: 0.20 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p051"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//051.png" width="130px"> </div>
    <h2 class="info"> DUGTRIO</h2> 
    <h3 class="info">Nº: 051</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 33.3 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p052"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//052.png" width="130px"> </div>
    <h2 class="info"> MEOWTH</h2> 
    <h3 class="info">Nº: 052</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 4.2 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p053"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//053.png" width="130px"> </div>
    <h2 class="info"> PERSIAN</h2> 
    <h3 class="info">Nº: 053</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 32.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p054"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//054.png" width="130px"> </div>
    <h2 class="info"> PSYDUCK</h2> 
    <h3 class="info">Nº: 054</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.6 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p055"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//055.png" width="130px"> </div>
    <h2 class="info"> GOLDUCK</h2> 
    <h3 class="info">Nº: 055</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 76.6 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p056"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//056.png" width="130px"> </div>
    <h2 class="info"> MANKEY</h2> 
    <h3 class="info">Nº: 056</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 28.0 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p057"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//057.png" width="130px"> </div>
    <h2 class="info"> PRIMEAPE</h2> 
    <h3 class="info">Nº: 057</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 32.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p058"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//058.png" width="130px"> </div>
    <h2 class="info"> GROWLITHE</h2> 
    <h3 class="info">Nº: 058</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.0 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p059"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//059.png" width="130px"> </div>
    <h2 class="info"> ARCANINE</h2> 
    <h3 class="info">Nº: 059</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 155.0 kg</h4>
    <h4 class="info">Height: 1.91 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p060"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//060.png" width="130px"> </div>
    <h2 class="info"> POLIWAG</h2> 
    <h3 class="info">Nº: 060</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 12.4 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p061"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//061.png" width="130px"> </div>
    <h2 class="info"> POLIWHIRL</h2> 
    <h3 class="info">Nº: 061</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 20.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p062"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//062.png" width="130px"> </div>
    <h2 class="info"> POLIWRATH</h2> 
    <h3 class="info">Nº: 062</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 54.0 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: water,fighting</h4></div>
    <div class="card" id="p063"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//063.png" width="130px"> </div>
    <h2 class="info"> ABRA</h2> 
    <h3 class="info">Nº: 063</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.5 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p064"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//064.png" width="130px"> </div>
    <h2 class="info"> KADABRA</h2> 
    <h3 class="info">Nº: 064</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 56.5 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p065"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//065.png" width="130px"> </div>
    <h2 class="info"> ALAKAZAM</h2> 
    <h3 class="info">Nº: 065</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 48.0 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p066"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//066.png" width="130px"> </div>
    <h2 class="info"> MACHOP</h2> 
    <h3 class="info">Nº: 066</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p067"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//067.png" width="130px"> </div>
    <h2 class="info"> MACHOKE</h2> 
    <h3 class="info">Nº: 067</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 70.5 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p068"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//068.png" width="130px"> </div>
    <h2 class="info"> MACHAMP</h2> 
    <h3 class="info">Nº: 068</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 130.0 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p069"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//069.png" width="130px"> </div>
    <h2 class="info"> BELLSPROUT</h2> 
    <h3 class="info">Nº: 069</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 4.0 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p070"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//070.png" width="130px"> </div>
    <h2 class="info"> WEEPINBELL</h2> 
    <h3 class="info">Nº: 070</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.4 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p071"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//071.png" width="130px"> </div>
    <h2 class="info"> VICTREEBEL</h2> 
    <h3 class="info">Nº: 071</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 15.5 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p072"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//072.png" width="130px"> </div>
    <h2 class="info"> TENTACOOL</h2> 
    <h3 class="info">Nº: 072</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 45.5 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: water,poison</h4></div>
    <div class="card" id="p073"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//073.png" width="130px"> </div>
    <h2 class="info"> TENTACRUEL</h2> 
    <h3 class="info">Nº: 073</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 55.0 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: water,poison</h4></div>
    <div class="card" id="p074"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//074.png" width="130px"> </div>
    <h2 class="info"> GEODUDE</h2> 
    <h3 class="info">Nº: 074</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 20.0 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: rock,ground</h4></div>
    <div class="card" id="p075"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//075.png" width="130px"> </div>
    <h2 class="info"> GRAVELER</h2> 
    <h3 class="info">Nº: 075</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 105.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: rock,ground</h4></div>
    <div class="card" id="p076"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//076.png" width="130px"> </div>
    <h2 class="info"> GOLEM</h2> 
    <h3 class="info">Nº: 076</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 300.0 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: rock,ground</h4></div>
    <div class="card" id="p077"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//077.png" width="130px"> </div>
    <h2 class="info"> PONYTA</h2> 
    <h3 class="info">Nº: 077</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p078"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//078.png" width="130px"> </div>
    <h2 class="info"> RAPIDASH</h2> 
    <h3 class="info">Nº: 078</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 95.0 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p079"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//079.png" width="130px"> </div>
    <h2 class="info"> SLOWPOKE</h2> 
    <h3 class="info">Nº: 079</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 36.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: water,psychic</h4></div>
    <div class="card" id="p080"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//080.png" width="130px"> </div>
    <h2 class="info"> SLOWBRO</h2> 
    <h3 class="info">Nº: 080</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 78.5 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: water,psychic</h4></div>
    <div class="card" id="p081"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//081.png" width="130px"> </div>
    <h2 class="info"> MAGNEMITE</h2> 
    <h3 class="info">Nº: 081</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p082"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//082.png" width="130px"> </div>
    <h2 class="info"> MAGNETON</h2> 
    <h3 class="info">Nº: 082</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 60.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p083"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//083.png" width="130px"> </div>
    <h2 class="info"> FARFETCH'D</h2> 
    <h3 class="info">Nº: 083</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 15.0 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p084"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//084.png" width="130px"> </div>
    <h2 class="info"> DODUO</h2> 
    <h3 class="info">Nº: 084</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 39.2 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p085"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//085.png" width="130px"> </div>
    <h2 class="info"> DODRIO</h2> 
    <h3 class="info">Nº: 085</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 85.2 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p086"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//086.png" width="130px"> </div>
    <h2 class="info"> SEEL</h2> 
    <h3 class="info">Nº: 086</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 90.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p087"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//087.png" width="130px"> </div>
    <h2 class="info"> DEWGONG</h2> 
    <h3 class="info">Nº: 087</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 120.0 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: water,ice</h4></div>
    <div class="card" id="p088"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//088.png" width="130px"> </div>
    <h2 class="info"> GRIMER</h2> 
    <h3 class="info">Nº: 088</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p089"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//089.png" width="130px"> </div>
    <h2 class="info"> MUK</h2> 
    <h3 class="info">Nº: 089</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p090"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//090.png" width="130px"> </div>
    <h2 class="info"> SHELLDER</h2> 
    <h3 class="info">Nº: 090</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 4.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p091"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//091.png" width="130px"> </div>
    <h2 class="info"> CLOYSTER</h2> 
    <h3 class="info">Nº: 091</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 132.5 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: water,ice</h4></div>
    <div class="card" id="p092"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//092.png" width="130px"> </div>
    <h2 class="info"> GASTLY</h2> 
    <h3 class="info">Nº: 092</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 0.1 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: ghost,poison</h4></div>
    <div class="card" id="p093"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//093.png" width="130px"> </div>
    <h2 class="info"> HAUNTER</h2> 
    <h3 class="info">Nº: 093</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 0.1 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: ghost,poison</h4></div>
    <div class="card" id="p094"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//094.png" width="130px"> </div>
    <h2 class="info"> GENGAR</h2> 
    <h3 class="info">Nº: 094</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 40.5 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: ghost,poison</h4></div>
    <div class="card" id="p095"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//095.png" width="130px"> </div>
    <h2 class="info"> ONIX</h2> 
    <h3 class="info">Nº: 095</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 210.0 kg</h4>
    <h4 class="info">Height: 8.79 m</h4>
    <h4 class="info">Type: rock,ground</h4></div>
    <div class="card" id="p096"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//096.png" width="130px"> </div>
    <h2 class="info"> DROWZEE</h2> 
    <h3 class="info">Nº: 096</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 32.4 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p097"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//097.png" width="130px"> </div>
    <h2 class="info"> HYPNO</h2> 
    <h3 class="info">Nº: 097</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 75.6 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p098"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//098.png" width="130px"> </div>
    <h2 class="info"> KRABBY</h2> 
    <h3 class="info">Nº: 098</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p099"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//099.png" width="130px"> </div>
    <h2 class="info"> KINGLER</h2> 
    <h3 class="info">Nº: 099</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 60.0 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p100"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//100.png" width="130px"> </div>
    <h2 class="info"> VOLTORB</h2> 
    <h3 class="info">Nº: 100</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 10.4 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p101"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//101.png" width="130px"> </div>
    <h2 class="info"> ELECTRODE</h2> 
    <h3 class="info">Nº: 101</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 66.6 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p102"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//102.png" width="130px"> </div>
    <h2 class="info"> EXEGGCUTE</h2> 
    <h3 class="info">Nº: 102</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 2.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: grass,psychic</h4></div>
    <div class="card" id="p103"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//103.png" width="130px"> </div>
    <h2 class="info"> EXEGGUTOR</h2> 
    <h3 class="info">Nº: 103</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 120.0 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: grass,psychic</h4></div>
    <div class="card" id="p104"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//104.png" width="130px"> </div>
    <h2 class="info"> CUBONE</h2> 
    <h3 class="info">Nº: 104</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p105"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//105.png" width="130px"> </div>
    <h2 class="info"> MAROWAK</h2> 
    <h3 class="info">Nº: 105</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 45.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p106"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//106.png" width="130px"> </div>
    <h2 class="info"> HITMONLEE</h2> 
    <h3 class="info">Nº: 106</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 49.8 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p107"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//107.png" width="130px"> </div>
    <h2 class="info"> HITMONCHAN</h2> 
    <h3 class="info">Nº: 107</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 50.2 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p108"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//108.png" width="130px"> </div>
    <h2 class="info"> LICKITUNG</h2> 
    <h3 class="info">Nº: 108</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 65.5 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p109"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//109.png" width="130px"> </div>
    <h2 class="info"> KOFFING</h2> 
    <h3 class="info">Nº: 109</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 1.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p110"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//110.png" width="130px"> </div>
    <h2 class="info"> WEEZING</h2> 
    <h3 class="info">Nº: 110</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 9.5 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p111"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//111.png" width="130px"> </div>
    <h2 class="info"> RHYHORN</h2> 
    <h3 class="info">Nº: 111</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 115.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: ground,rock</h4></div>
    <div class="card" id="p112"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//112.png" width="130px"> </div>
    <h2 class="info"> RHYDON</h2> 
    <h3 class="info">Nº: 112</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 120.0 kg</h4>
    <h4 class="info">Height: 1.91 m</h4>
    <h4 class="info">Type: ground,rock</h4></div>
    <div class="card" id="p113"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//113.png" width="130px"> </div>
    <h2 class="info"> CHANSEY</h2> 
    <h3 class="info">Nº: 113</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 34.6 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p114"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//114.png" width="130px"> </div>
    <h2 class="info"> TANGELA</h2> 
    <h3 class="info">Nº: 114</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 35.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p115"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//115.png" width="130px"> </div>
    <h2 class="info"> KANGASKHAN</h2> 
    <h3 class="info">Nº: 115</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 80.0 kg</h4>
    <h4 class="info">Height: 2.21 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p116"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//116.png" width="130px"> </div>
    <h2 class="info"> HORSEA</h2> 
    <h3 class="info">Nº: 116</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 8.0 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p117"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//117.png" width="130px"> </div>
    <h2 class="info"> SEADRA</h2> 
    <h3 class="info">Nº: 117</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 25.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p118"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//118.png" width="130px"> </div>
    <h2 class="info"> GOLDEEN</h2> 
    <h3 class="info">Nº: 118</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 15.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p119"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//119.png" width="130px"> </div>
    <h2 class="info"> SEAKING</h2> 
    <h3 class="info">Nº: 119</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 39.0 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p120"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//020.png" width="130px"> </div>
    <h2 class="info"> STARYU</h2> 
    <h3 class="info">Nº: 120</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 34.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p121"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//121.png" width="130px"> </div>
    <h2 class="info"> STARMIE</h2> 
    <h3 class="info">Nº: 121</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 80.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: water,psychic</h4></div>
    <div class="card" id="p122"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//122.png" width="130px"> </div>
    <h2 class="info"> MR. MIME</h2> 
    <h3 class="info">Nº: 122</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 54.5 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p123"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//123.png" width="130px"> </div>
    <h2 class="info"> SCYTHER</h2> 
    <h3 class="info">Nº: 123</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 56.0 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: bug,flying</h4></div>
    <div class="card" id="p124"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//124.png" width="130px"> </div>
    <h2 class="info"> JYNX</h2> 
    <h3 class="info">Nº: 124</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 40.6 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: ice,psychic</h4></div>
    <div class="card" id="p125"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//125.png" width="130px"> </div>
    <h2 class="info"> ELECTABUZZ</h2> 
    <h3 class="info">Nº: 125</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p126"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//126.png" width="130px"> </div>
    <h2 class="info"> MAGMAR</h2> 
    <h3 class="info">Nº: 126</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 44.5 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p127"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//127.png" width="130px"> </div>
    <h2 class="info"> PINSIR</h2> 
    <h3 class="info">Nº: 127</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 55.0 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: bug</h4></div>
    <div class="card" id="p128"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//128.png" width="130px"> </div>
    <h2 class="info"> TAUROS</h2> 
    <h3 class="info">Nº: 128</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 88.4 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p129"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//129.png" width="130px"> </div>
    <h2 class="info"> MAGIKARP</h2> 
    <h3 class="info">Nº: 129</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 10.0 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p130"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//130.png" width="130px"> </div>
    <h2 class="info"> GYARADOS</h2> 
    <h3 class="info">Nº: 130</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 235.0 kg</h4>
    <h4 class="info">Height: 6.50 m</h4>
    <h4 class="info">Type: water,flying</h4></div>
    <div class="card" id="p131"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//131.png" width="130px"> </div>
    <h2 class="info"> LAPRAS</h2> 
    <h3 class="info">Nº: 131</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 220.0 kg</h4>
    <h4 class="info">Height: 2.49 m</h4>
    <h4 class="info">Type: water,ice</h4></div>
    <div class="card" id="p132"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//132.png" width="130px"> </div>
    <h2 class="info"> DITTO</h2> 
    <h3 class="info">Nº: 132</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 4.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p133"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//133.png" width="130px"> </div>
    <h2 class="info"> EEVEE</h2> 
    <h3 class="info">Nº: 133</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.5 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p134"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//134.png" width="130px"> </div>
    <h2 class="info"> VAPOREON</h2> 
    <h3 class="info">Nº: 134</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 29.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p135"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//135.png" width="130px"> </div>
    <h2 class="info"> JOLTEON</h2> 
    <h3 class="info">Nº: 135</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 24.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p136"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//136.png" width="130px"> </div>
    <h2 class="info"> FLAREON</h2> 
    <h3 class="info">Nº: 136</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 25.0 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p137"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//137.png" width="130px"> </div>
    <h2 class="info"> PORYGON</h2> 
    <h3 class="info">Nº: 137</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 36.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p138"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//138.png" width="130px"> </div>
    <h2 class="info"> OMANYTE</h2> 
    <h3 class="info">Nº: 138</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 7.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: rock,water</h4></div>
    <div class="card" id="p139"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//139.png" width="130px"> </div>
    <h2 class="info"> OMASTAR</h2> 
    <h3 class="info">Nº: 139</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 35.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: rock,water</h4></div>
    <div class="card" id="p140"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//140.png" width="130px"> </div>
    <h2 class="info"> KABUTO</h2> 
    <h3 class="info">Nº: 140</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 11.5 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: rock,water</h4></div>
    <div class="card" id="p141"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//141.png" width="130px"> </div>
    <h2 class="info"> KABUTOPS</h2> 
    <h3 class="info">Nº: 141</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 40.5 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: rock,water</h4></div>
    <div class="card" id="p142"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//142.png" width="130px"> </div>
    <h2 class="info"> AERODACTYL</h2> 
    <h3 class="info">Nº: 142</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 59.0 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: rock,flying</h4></div>
    <div class="card" id="p143"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//143.png" width="130px"> </div>
    <h2 class="info"> SNORLAX</h2> 
    <h3 class="info">Nº: 143</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 460.0 kg</h4>
    <h4 class="info">Height: 2.11 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p144"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//144.png" width="130px"> </div>
    <h2 class="info"> ARTICUNO</h2> 
    <h3 class="info">Nº: 144</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 55.4 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: ice,flying</h4></div>
    <div class="card" id="p145"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//145.png" width="130px"> </div>
    <h2 class="info"> ZAPDOS</h2> 
    <h3 class="info">Nº: 145</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 52.6 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: electric,flying</h4></div>
    <div class="card" id="p146"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//146.png" width="130px"> </div>
    <h2 class="info"> MOLTRES</h2> 
    <h3 class="info">Nº: 146</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 60.0 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: fire,flying</h4></div>
    <div class="card" id="p147"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//147.png" width="130px"> </div>
    <h2 class="info"> DRATINI</h2> 
    <h3 class="info">Nº: 147</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 3.3 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: dragon</h4></div>
    <div class="card" id="p148"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//148.png" width="130px"> </div>
    <h2 class="info"> DRAGONAIR</h2> 
    <h3 class="info">Nº: 148</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 16.5 kg</h4>
    <h4 class="info">Height: 3.99 m</h4>
    <h4 class="info">Type: dragon</h4></div>
    <div class="card" id="p149"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//149.png" width="130px"> </div>
    <h2 class="info"> DRAGONITE</h2> 
    <h3 class="info">Nº: 149</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 210.0 kg</h4>
    <h4 class="info">Height: 2.21 m</h4>
    <h4 class="info">Type: dragon,flying</h4></div>
    <div class="card" id="p150"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//150.png" width="130px"> </div>
    <h2 class="info"> MEWTWO</h2> 
    <h3 class="info">Nº: 150</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 122.0 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p151"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//151.png" width="130px"> </div>
    <h2 class="info"> MEW</h2> 
    <h3 class="info">Nº: 151</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 4.0 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p152"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//152.png" width="130px"> </div>
    <h2 class="info"> CHIKORITA</h2> 
    <h3 class="info">Nº: 152</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 6.4 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p153"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//153.png" width="130px"> </div>
    <h2 class="info"> BAYLEEF</h2> 
    <h3 class="info">Nº: 153</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 15.8 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p154"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//154.png" width="130px"> </div>
    <h2 class="info"> MEGANIUM</h2> 
    <h3 class="info">Nº: 154</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 100.5 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p155"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//155.png" width="130px"> </div>
    <h2 class="info"> CYNDAQUIL</h2> 
    <h3 class="info">Nº: 155</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 7.9 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p156"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//156.png" width="130px"> </div>
    <h2 class="info"> QUILAVA</h2> 
    <h3 class="info">Nº: 156</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 19.0 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p157"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//157.png" width="130px"> </div>
    <h2 class="info"> TYPHLOSION</h2> 
    <h3 class="info">Nº: 157</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 79.5 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p158"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//158.png" width="130px"> </div>
    <h2 class="info"> TOTODILE</h2> 
    <h3 class="info">Nº: 158</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 9.5 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p159"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//159.png" width="130px"> </div>
    <h2 class="info"> CROCONAW</h2> 
    <h3 class="info">Nº: 159</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 25.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p160"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//160.png" width="130px"> </div>
    <h2 class="info"> FERALIGATR</h2> 
    <h3 class="info">Nº: 160</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 88.8 kg</h4>
    <h4 class="info">Height: 2.31 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p161"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//161.png" width="130px"> </div>
    <h2 class="info"> SENTRET</h2> 
    <h3 class="info">Nº: 161</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 6.0 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p162"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//162.png" width="130px"> </div>
    <h2 class="info"> FURRET</h2> 
    <h3 class="info">Nº: 162</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 32.5 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p163"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//163.png" width="130px"> </div>
    <h2 class="info"> HOOTHOOT</h2> 
    <h3 class="info">Nº: 163</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 21.2 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p164"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//164.png" width="130px"> </div>
    <h2 class="info"> NOCTOWL</h2> 
    <h3 class="info">Nº: 164</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 40.8 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p165"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//165.png" width="130px"> </div>
    <h2 class="info"> LEDYBA</h2> 
    <h3 class="info">Nº: 165</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 10.8 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: bug,flying</h4></div>
    <div class="card" id="p166"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//166.png" width="130px"> </div>
    <h2 class="info"> LEDIAN</h2> 
    <h3 class="info">Nº: 166</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 35.6 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: bug,flying</h4></div>
    <div class="card" id="p167"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//167.png" width="130px"> </div>
    <h2 class="info"> SPINARAK</h2> 
    <h3 class="info">Nº: 167</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 8.5 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p168"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//168.png" width="130px"> </div>
    <h2 class="info"> ARIADOS</h2> 
    <h3 class="info">Nº: 168</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 33.5 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p169"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//169.png" width="130px"> </div>
    <h2 class="info"> CROBAT</h2> 
    <h3 class="info">Nº: 169</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 75.0 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: poison,flying</h4></div>
    <div class="card" id="p170"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//170.png" width="130px"> </div>
    <h2 class="info"> CHINCHOU</h2> 
    <h3 class="info">Nº: 170</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 12.0 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: water,electric</h4></div>
    <div class="card" id="p171"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//171.png" width="130px"> </div>
    <h2 class="info"> LANTURN</h2> 
    <h3 class="info">Nº: 171</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 22.5 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: water,electric</h4></div>
    <div class="card" id="p172"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//172.png" width="130px"> </div>
    <h2 class="info"> PICHU</h2> 
    <h3 class="info">Nº: 172</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 2.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p173"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//173.png" width="130px"> </div>
    <h2 class="info"> CLEFFA</h2> 
    <h3 class="info">Nº: 173</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 3.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: fairy</h4></div>
    <div class="card" id="p174"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//174.png" width="130px"> </div>
    <h2 class="info"> IGGLYBUFF</h2> 
    <h3 class="info">Nº: 174</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 1.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: normal,fairy</h4></div>
    <div class="card" id="p175"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//175.png" width="130px"> </div>
    <h2 class="info"> TOGEPI</h2> 
    <h3 class="info">Nº: 175</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 1.5 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: fairy</h4></div>
    <div class="card" id="p176"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//176.png" width="130px"> </div>
    <h2 class="info"> TOGETIC</h2> 
    <h3 class="info">Nº: 176</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 3.2 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: fairy,flying</h4></div>
    <div class="card" id="p177"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//177.png" width="130px"> </div>
    <h2 class="info"> NATU</h2> 
    <h3 class="info">Nº: 177</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 2.0 kg</h4>
    <h4 class="info">Height: 0.21 m</h4>
    <h4 class="info">Type: psychic,flying</h4></div>
    <div class="card" id="p178"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//178.png" width="130px"> </div>
    <h2 class="info"> XATU</h2> 
    <h3 class="info">Nº: 178</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 15.0 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: psychic,flying</h4></div>
    <div class="card" id="p179"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//179.png" width="130px"> </div>
    <h2 class="info"> MAREEP</h2> 
    <h3 class="info">Nº: 179</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 7.8 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p180"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//180.png" width="130px"> </div>
    <h2 class="info"> FLAAFFY</h2> 
    <h3 class="info">Nº: 180</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 13.3 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p181"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//181.png" width="130px"> </div>
    <h2 class="info"> AMPHAROS</h2> 
    <h3 class="info">Nº: 181</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 61.5 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p182"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//182.png" width="130px"> </div>
    <h2 class="info"> BELLOSSOM</h2> 
    <h3 class="info">Nº: 182</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 5.8 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p183"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//183.png" width="130px"> </div>
    <h2 class="info"> MARILL</h2> 
    <h3 class="info">Nº: 183</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 8.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: water,fairy</h4></div>
    <div class="card" id="p184"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//184.png" width="130px"> </div>
    <h2 class="info"> AZUMARILL</h2> 
    <h3 class="info">Nº: 184</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 28.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: water,fairy</h4></div>
    <div class="card" id="p185"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//185.png" width="130px"> </div>
    <h2 class="info"> SUDOWOODO</h2> 
    <h3 class="info">Nº: 185</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 38.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: rock</h4></div>
    <div class="card" id="p186"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//186.png" width="130px"> </div>
    <h2 class="info"> POLITOED</h2> 
    <h3 class="info">Nº: 186</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 33.9 kg</h4>
    <h4 class="info">Height: 10.90 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p187"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//187.png" width="130px"> </div>
    <h2 class="info"> HOPPIP</h2> 
    <h3 class="info">Nº: 187</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 0.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: grass,flying</h4></div>
    <div class="card" id="p188"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//188.png" width="130px"> </div>
    <h2 class="info"> SKIPLOOM</h2> 
    <h3 class="info">Nº: 188</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 1.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: grass,flying</h4></div>
    <div class="card" id="p189"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//189.png" width="130px"> </div>
    <h2 class="info"> JUMPLUFF</h2> 
    <h3 class="info">Nº: 189</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 3.0 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: grass,flying</h4></div>
    <div class="card" id="p190"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//190.png" width="130px"> </div>
    <h2 class="info"> AIPOM</h2> 
    <h3 class="info">Nº: 190</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 11.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p191"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//191.png" width="130px"> </div>
    <h2 class="info"> SUNKERN</h2> 
    <h3 class="info">Nº: 191</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 1.8 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p192"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//192.png" width="130px"> </div>
    <h2 class="info"> SUNFLORA</h2> 
    <h3 class="info">Nº: 192</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 8.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p193"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//193.png" width="130px"> </div>
    <h2 class="info"> YANMA</h2> 
    <h3 class="info">Nº: 193</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 38.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: bug,flying</h4></div>
    <div class="card" id="p194"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//194.png" width="130px"> </div>
    <h2 class="info"> WOOPER</h2> 
    <h3 class="info">Nº: 194</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 8.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: water,ground</h4></div>
    <div class="card" id="p195"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//195.png" width="130px"> </div>
    <h2 class="info"> QUAGSIRE</h2> 
    <h3 class="info">Nº: 195</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 75.0 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: water,ground</h4></div>
    <div class="card" id="p196"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//196.png" width="130px"> </div>
    <h2 class="info"> ESPEON</h2> 
    <h3 class="info">Nº: 196</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 26.5 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p197"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//197.png" width="130px"> </div>
    <h2 class="info"> UMBREON</h2> 
    <h3 class="info">Nº: 197</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 27.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: dark</h4></div>
    <div class="card" id="p198"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//198.png" width="130px"> </div>
    <h2 class="info"> MURKROW</h2> 
    <h3 class="info">Nº: 198</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 2.1 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: dark,flying</h4></div>
    <div class="card" id="p199"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//199.png" width="130px"> </div>
    <h2 class="info"> SLOWKING</h2> 
    <h3 class="info">Nº: 199</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 79.5 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: water,psychic</h4></div>
    <div class="card" id="p200"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//200.png" width="130px"> </div>
    <h2 class="info"> MISDREAVUS</h2> 
    <h3 class="info">Nº: 200</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 1.0 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: ghost</h4></div>
    <div class="card" id="p201"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//201.png" width="130px"> </div>
    <h2 class="info"> UNOWN</h2> 
    <h3 class="info">Nº: 201</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 5.0 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p202"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//202.png" width="130px"> </div>
    <h2 class="info"> WOBBUFFET</h2> 
    <h3 class="info">Nº: 202</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 28.5 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p203"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//203.png" width="130px"> </div>
    <h2 class="info"> GIRAFARIG</h2> 
    <h3 class="info">Nº: 203</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 41.5 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: normal,psychic</h4></div>
    <div class="card" id="p204"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//204.png" width="130px"> </div>
    <h2 class="info"> PINECO</h2> 
    <h3 class="info">Nº: 204</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 7.2 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: bug</h4></div>
    <div class="card" id="p205"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//205.png" width="130px"> </div>
    <h2 class="info"> FORRETRESS</h2> 
    <h3 class="info">Nº: 205</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 125.8 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: bug,steel</h4></div>
    <div class="card" id="p206"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//206.png" width="130px"> </div>
    <h2 class="info"> DUNSPARCE</h2> 
    <h3 class="info">Nº: 206</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 14.0 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p207"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//207.png" width="130px"> </div>
    <h2 class="info"> GLIGAR</h2> 
    <h3 class="info">Nº: 207</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 64.8 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: ground,flying</h4></div>
    <div class="card" id="p208"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//208.png" width="130px"> </div>
    <h2 class="info"> STEELIX</h2> 
    <h3 class="info">Nº: 208</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 400.0 kg</h4>
    <h4 class="info">Height: 9.19 m</h4>
    <h4 class="info">Type: steel,ground</h4></div>
    <div class="card" id="p209"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//209.png" width="130px"> </div>
    <h2 class="info"> SNUBBULL</h2> 
    <h3 class="info">Nº: 209</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 7.8 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: fairy</h4></div>
    <div class="card" id="p210"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//210.png" width="130px"> </div>
    <h2 class="info"> GRANBULL</h2> 
    <h3 class="info">Nº: 210</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 48.7 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: fairy</h4></div>
    <div class="card" id="p211"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//211.png" width="130px"> </div>
    <h2 class="info"> QWILFISH</h2> 
    <h3 class="info">Nº: 211</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 3.9 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: water,poison</h4></div>
    <div class="card" id="p212"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//212.png" width="130px"> </div>
    <h2 class="info"> SCIZOR</h2> 
    <h3 class="info">Nº: 212</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 125.0 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: bug,steel</h4></div>
    <div class="card" id="p213"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//213.png" width="130px"> </div>
    <h2 class="info"> SHUCKLE</h2> 
    <h3 class="info">Nº: 213</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 20.5 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: bug,rock</h4></div>
    <div class="card" id="p214"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//214.png" width="130px"> </div>
    <h2 class="info"> HERACROSS</h2> 
    <h3 class="info">Nº: 214</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 54.0 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: bug,fighting</h4></div>
    <div class="card" id="p215"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//215.png" width="130px"> </div>
    <h2 class="info"> SNEASEL</h2> 
    <h3 class="info">Nº: 215</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 28.0 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: dark,ice</h4></div>
    <div class="card" id="p216"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//216.png" width="130px"> </div>
    <h2 class="info"> TEDDIURSA</h2> 
    <h3 class="info">Nº: 216</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 8.8 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p217"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//217.png" width="130px"> </div>
    <h2 class="info"> URSARING</h2> 
    <h3 class="info">Nº: 217</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 125.8 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p218"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//218.png" width="130px"> </div>
    <h2 class="info"> SLUGMA</h2> 
    <h3 class="info">Nº: 218</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 35.0 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p219"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//219.png" width="130px"> </div>
    <h2 class="info"> MAGCARGO</h2> 
    <h3 class="info">Nº: 219</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 55.0 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: fire,rock</h4></div>
    <div class="card" id="p220"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//220.png" width="130px"> </div>
    <h2 class="info"> SWINUB</h2> 
    <h3 class="info">Nº: 220</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 6.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: ice,ground</h4></div>
    <div class="card" id="p221"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//221.png" width="130px"> </div>
    <h2 class="info"> PILOSWINE</h2> 
    <h3 class="info">Nº: 221</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 55.8 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: ice,ground</h4></div>
    <div class="card" id="p222"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//222.png" width="130px"> </div>
    <h2 class="info"> CORSOLA</h2> 
    <h3 class="info">Nº: 222</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 5.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: water,rock</h4></div>
    <div class="card" id="p223"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//223.png" width="130px"> </div>
    <h2 class="info"> REMORAID</h2> 
    <h3 class="info">Nº: 223</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 12.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p224"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//224.png" width="130px"> </div>
    <h2 class="info"> OCTILLERY</h2> 
    <h3 class="info">Nº: 224</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 28.5 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p225"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//225.png" width="130px"> </div>
    <h2 class="info"> DELIBIRD</h2> 
    <h3 class="info">Nº: 225</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 16.0 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: ice,flying</h4></div>
    <div class="card" id="p226"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//226.png" width="130px"> </div>
    <h2 class="info"> MANTINE</h2> 
    <h3 class="info">Nº: 226</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 220.0 kg</h4>
    <h4 class="info">Height: 2.11 m</h4>
    <h4 class="info">Type: water,flying</h4></div>
    <div class="card" id="p227"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//227.png" width="130px"> </div>
    <h2 class="info"> SKARMORY</h2> 
    <h3 class="info">Nº: 227</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 50.5 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: steel,flying</h4></div>
    <div class="card" id="p228"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//228.png" width="130px"> </div>
    <h2 class="info"> HOUNDOUR</h2> 
    <h3 class="info">Nº: 228</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 10.8 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: dark,fire</h4></div>
    <div class="card" id="p229"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//229.png" width="130px"> </div>
    <h2 class="info"> HOUNDOOM</h2> 
    <h3 class="info">Nº: 229</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 35.0 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: dark,fire</h4></div>
    <div class="card" id="p230"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//230.png" width="130px"> </div>
    <h2 class="info"> KINGDRA</h2> 
    <h3 class="info">Nº: 230</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 152.0 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: water,dragon</h4></div>
    <div class="card" id="p231"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//231.png" width="130px"> </div>
    <h2 class="info"> PHANPY</h2> 
    <h3 class="info">Nº: 231</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 33.5 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p232"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//232.png" width="130px"> </div>
    <h2 class="info"> DONPHAN</h2> 
    <h3 class="info">Nº: 232</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 120.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p233"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//233.png" width="130px"> </div>
    <h2 class="info"> PORYGON2</h2> 
    <h3 class="info">Nº: 233</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 32.5 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p234"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//234.png" width="130px"> </div>
    <h2 class="info"> STANTLER</h2> 
    <h3 class="info">Nº: 234</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 71.2 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p235"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//235.png" width="130px"> </div>
    <h2 class="info"> SMEARGLE</h2> 
    <h3 class="info">Nº: 235</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 58.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p236"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//236.png" width="130px"> </div>
    <h2 class="info"> TYROGUE</h2> 
    <h3 class="info">Nº: 236</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 21.0 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p237"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//237.png" width="130px"> </div>
    <h2 class="info"> HITMONTOP</h2> 
    <h3 class="info">Nº: 237</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 48.0 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p238"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//238.png" width="130px"> </div>
    <h2 class="info"> SMOOCHUM</h2> 
    <h3 class="info">Nº: 238</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 6.0 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: ice,psychic</h4></div>
    <div class="card" id="p239"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//239.png" width="130px"> </div>
    <h2 class="info"> ELEKID</h2> 
    <h3 class="info">Nº: 239</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 23.5 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p240"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//240.png" width="130px"> </div>
    <h2 class="info"> MAGBY</h2> 
    <h3 class="info">Nº: 240</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 21.4 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p241"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//241.png" width="130px"> </div>
    <h2 class="info"> MILTANK</h2> 
    <h3 class="info">Nº: 241</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 75.5 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p242"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//242.png" width="130px"> </div>
    <h2 class="info"> BLISSEY</h2> 
    <h3 class="info">Nº: 242</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 46.8 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p243"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//243.png" width="130px"> </div>
    <h2 class="info"> RAIKOU</h2> 
    <h3 class="info">Nº: 243</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 178.0 kg</h4>
    <h4 class="info">Height: 1.91 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p244"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//244.png" width="130px"> </div>
    <h2 class="info"> ENTEI</h2> 
    <h3 class="info">Nº: 244</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 198.0 kg</h4>
    <h4 class="info">Height: 2.11 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p245"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//245.png" width="130px"> </div>
    <h2 class="info"> SUICUNE</h2> 
    <h3 class="info">Nº: 245</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 187.0 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p246"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//246.png" width="130px"> </div>
    <h2 class="info"> LARVITAR</h2> 
    <h3 class="info">Nº: 246</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 72.0 kg</h4>
    <h4 class="info">Height: 0.60 m</h4>
    <h4 class="info">Type: rock,ground</h4></div>
    <div class="card" id="p247"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//247.png" width="130px"> </div>
    <h2 class="info"> PUPITAR</h2> 
    <h3 class="info">Nº: 247</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 152.0 kg</h4>
    <h4 class="info">Height: 1.20 m</h4>
    <h4 class="info">Type: rock,ground</h4></div>
    <div class="card" id="p248"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//248.png" width="130px"> </div>
    <h2 class="info"> TYRANITAR</h2> 
    <h3 class="info">Nº: 248</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 202.0 kg</h4>
    <h4 class="info">Height: 2.00 m</h4>
    <h4 class="info">Type: rock,dark</h4></div>
    <div class="card" id="p249"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//249.png" width="130px"> </div>
    <h2 class="info"> LUGIA</h2> 
    <h3 class="info">Nº: 249</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 216.0 kg</h4>
    <h4 class="info">Height: 5.21 m</h4>
    <h4 class="info">Type: psychic,flying</h4></div>
    <div class="card" id="p250"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//250.png" width="130px"> </div>
    <h2 class="info"> HO-OH</h2> 
    <h3 class="info">Nº: 250</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 199.0 kg</h4>
    <h4 class="info">Height: 3.80 m</h4>
    <h4 class="info">Type: fire,flying</h4></div>
    <div class="card" id="p251"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//251.png" width="130px"> </div>
    <h2 class="info"> CELEBI</h2> 
    <h3 class="info">Nº: 251</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 5.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: psychic,grass</h4></div></div>
    `;

    document.getElementById('kanto').checked = true;
    fn.filterType();
    expect(document.getElementById('p001').style.display).toBe('block');
  });
});


describe('deleteFilters', () => {
  it('should be function', () => {
    expect(typeof fn.deleteFilters).toBe('function');
  });
  test('this function should change the style.display acording the name in imput', () => {
    document.body.innerHTML = `
    <input id="myInput" type="text" name="myPokemon" placeholder="Search for name!" list="nameOfPoke" value="">
    <input type="checkbox" id="kanto" name="kanto" value="type"> KANTO (GENERATION I)<input type="checkbox" id="johto" name="johto" value="type"> JOHTO (GENERATION II)<input type="checkbox" id="bug" name="bug" value="type"> BUG<br><input type="checkbox" id="dark" name="dark" value="type"> DARK<br><input type="checkbox" id="dragon" name="dragon" value="type"> DRAGON<br><input type="checkbox" id="electric" name="electric" value="type"> ELECTRIC<br><input type="checkbox" id="fairy" name="fairy" value="type"> FAIRY<br><input type="checkbox" id="fighting" name="fighting" value="type"> FIGHTING<br><input type="checkbox" id="fire" name="fire" value="type"> FIRE<br><input type="checkbox" id="flying" name="flying" value="type"> FLYING<br><input type="checkbox" id="ghost" name="ghost" value="type"> GHOST<br><input type="checkbox" id="grass" name="grass" value="type"> GRASS<br><input type="checkbox" id="ground" name="ground" value="type"> GROUND<br><input type="checkbox" id="ice" name="ice" value="type"> ICE<br><input type="checkbox" id="normal" name="normal" value="type"> NORMAL<br><input type="checkbox" id="poison" name="poison" value="type"> POISON<br><input type="checkbox" id="psychic" name="psychic" value="type"> PSYCHIC<br><input type="checkbox" id="rock" name="rock" value="type"> ROCK<br><input type="checkbox" id="steel" name="steel" value="type"> STEEL<br><input type="checkbox" id="water" name="water" value="type"> WATER<br></div>
    <div class="card" id="p001"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//001.png" width="130px"> </div>
    <h2 class="info"> BULBASAUR</h2> 
    <h3 class="info">Nº: 001</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.9 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p002"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//002.png" width="130px"> </div>
    <h2 class="info"> IVYSAUR</h2> 
    <h3 class="info">Nº: 002</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 13.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p003"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//003.png" width="130px"> </div>
    <h2 class="info"> VENUSAUR</h2> 
    <h3 class="info">Nº: 003</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 100.0 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p004"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//004.png" width="130px"> </div>
    <h2 class="info"> CHARMANDER</h2> 
    <h3 class="info">Nº: 004</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 8.5 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p005"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//005.png" width="130px"> </div>
    <h2 class="info"> CHARMELEON</h2> 
    <h3 class="info">Nº: 005</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p006"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//006.png" width="130px"> </div>
    <h2 class="info"> CHARIZARD</h2> 
    <h3 class="info">Nº: 006</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 90.5 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: fire,flying</h4></div>
    <div class="card" id="p007"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//007.png" width="130px"> </div>
    <h2 class="info"> SQUIRTLE</h2> 
    <h3 class="info">Nº: 007</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 9.0 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p008"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//008.png" width="130px"> </div>
    <h2 class="info"> WARTORTLE</h2> 
    <h3 class="info">Nº: 008</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 22.5 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p009"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//009.png" width="130px"> </div>
    <h2 class="info"> BLASTOISE</h2> 
    <h3 class="info">Nº: 009</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 85.5 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p010"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//010.png" width="130px"> </div>
    <h2 class="info"> CATERPIE</h2> 
    <h3 class="info">Nº: 010</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 2.9 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: bug</h4></div>
    <div class="card" id="p011"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//011.png" width="130px"> </div>
    <h2 class="info"> METAPOD</h2> 
    <h3 class="info">Nº: 011</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 9.9 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: bug</h4></div>
    <div class="card" id="p012"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//012.png" width="130px"> </div>
    <h2 class="info"> BUTTERFREE</h2> 
    <h3 class="info">Nº: 012</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 32.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: bug,flying</h4></div>
    <div class="card" id="p013"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//013.png" width="130px"> </div>
    <h2 class="info"> WEEDLE</h2> 
    <h3 class="info">Nº: 013</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 3.2 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p014"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//014.png" width="130px"> </div>
    <h2 class="info"> KAKUNA</h2> 
    <h3 class="info">Nº: 014</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 10.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p015"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//015.png" width="130px"> </div>
    <h2 class="info"> BEEDRILL</h2> 
    <h3 class="info">Nº: 015</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 29.5 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p016"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//016.png" width="130px"> </div>
    <h2 class="info"> PIDGEY</h2> 
    <h3 class="info">Nº: 016</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 1.8 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p017"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//017.png" width="130px"> </div>
    <h2 class="info"> PIDGEOTTO</h2> 
    <h3 class="info">Nº: 017</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p018"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//018.png" width="130px"> </div>
    <h2 class="info"> PIDGEOT</h2> 
    <h3 class="info">Nº: 018</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 39.5 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p019"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//019.png" width="130px"> </div>
    <h2 class="info"> RATTATA</h2> 
    <h3 class="info">Nº: 019</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 3.5 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p020"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//020.png" width="130px"> </div>
    <h2 class="info"> RATICATE</h2> 
    <h3 class="info">Nº: 020</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 18.5 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p021"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//021.png" width="130px"> </div>
    <h2 class="info"> SPEAROW</h2> 
    <h3 class="info">Nº: 021</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 2.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p022"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//022.png" width="130px"> </div>
    <h2 class="info"> FEAROW</h2> 
    <h3 class="info">Nº: 022</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 38.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p023"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//023.png" width="130px"> </div>
    <h2 class="info"> EKANS</h2> 
    <h3 class="info">Nº: 023</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.9 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p024"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//024.png" width="130px"> </div>
    <h2 class="info"> ARBOK</h2> 
    <h3 class="info">Nº: 024</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 65.0 kg</h4>
    <h4 class="info">Height: 3.51 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p025"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//025.png" width="130px"> </div>
    <h2 class="info"> PIKACHU</h2> 
    <h3 class="info">Nº: 025</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.0 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p026"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//026.png" width="130px"> </div>
    <h2 class="info"> RAICHU</h2> 
    <h3 class="info">Nº: 026</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p027"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//027.png" width="130px"> </div>
    <h2 class="info"> SANDSHREW</h2> 
    <h3 class="info">Nº: 027</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 12.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p028"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//028.png" width="130px"> </div>
    <h2 class="info"> SANDSLASH</h2> 
    <h3 class="info">Nº: 028</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 29.5 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p029"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//029.png" width="130px"> </div>
    <h2 class="info"> NIDORAN ♀ (FEMALE)</h2> 
    <h3 class="info">Nº: 029</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 7.0 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p030"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//030.png" width="130px"> </div>
    <h2 class="info"> NIDORINA</h2> 
    <h3 class="info">Nº: 030</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 20.0 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p031"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//031.png" width="130px"> </div>
    <h2 class="info"> NIDOQUEEN</h2> 
    <h3 class="info">Nº: 031</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 60.0 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: poison,ground</h4></div>
    <div class="card" id="p032"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//032.png" width="130px"> </div>
    <h2 class="info"> NIDORAN ♂ (MALE)</h2> 
    <h3 class="info">Nº: 032</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 9.0 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p033"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//033.png" width="130px"> </div>
    <h2 class="info"> NIDORINO</h2> 
    <h3 class="info">Nº: 033</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.5 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p034"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//034.png" width="130px"> </div>
    <h2 class="info"> NIDOKING</h2> 
    <h3 class="info">Nº: 034</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 62.0 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: poison,ground</h4></div>
    <div class="card" id="p035"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//035.png" width="130px"> </div>
    <h2 class="info"> CLEFAIRY</h2> 
    <h3 class="info">Nº: 035</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 7.5 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p036"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//036.png" width="130px"> </div>
    <h2 class="info"> CLEFABLE</h2> 
    <h3 class="info">Nº: 036</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 40.0 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p037"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//037.png" width="130px"> </div>
    <h2 class="info"> VULPIX</h2> 
    <h3 class="info">Nº: 037</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 9.9 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p038"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//038.png" width="130px"> </div>
    <h2 class="info"> NINETALES</h2> 
    <h3 class="info">Nº: 038</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.9 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p039"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//039.png" width="130px"> </div>
    <h2 class="info"> JIGGLYPUFF</h2> 
    <h3 class="info">Nº: 039</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 5.5 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p040"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//040.png" width="130px"> </div>
    <h2 class="info"> WIGGLYTUFF</h2> 
    <h3 class="info">Nº: 040</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 12.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p041"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//041.png" width="130px"> </div>
    <h2 class="info"> ZUBAT</h2> 
    <h3 class="info">Nº: 041</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 7.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: poison,flying</h4></div>
    <div class="card" id="p042"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//042.png" width="130px"> </div>
    <h2 class="info"> GOLBAT</h2> 
    <h3 class="info">Nº: 042</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 55.0 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: poison,flying</h4></div>
    <div class="card" id="p043"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//043.png" width="130px"> </div>
    <h2 class="info"> ODDISH</h2> 
    <h3 class="info">Nº: 043</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 5.4 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p044"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//044.png" width="130px"> </div>
    <h2 class="info"> GLOOM</h2> 
    <h3 class="info">Nº: 044</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 8.6 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p045"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//045.png" width="130px"> </div>
    <h2 class="info"> VILEPLUME</h2> 
    <h3 class="info">Nº: 045</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 18.6 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p046"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//046.png" width="130px"> </div>
    <h2 class="info"> PARAS</h2> 
    <h3 class="info">Nº: 046</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 5.4 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: bug,grass</h4></div>
    <div class="card" id="p047"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//047.png" width="130px"> </div>
    <h2 class="info"> PARASECT</h2> 
    <h3 class="info">Nº: 047</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 29.5 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: bug,grass</h4></div>
    <div class="card" id="p048"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//048.png" width="130px"> </div>
    <h2 class="info"> VENONAT</h2> 
    <h3 class="info">Nº: 048</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p049"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//049.png" width="130px"> </div>
    <h2 class="info"> VENOMOTH</h2> 
    <h3 class="info">Nº: 049</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 12.5 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p050"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//050.png" width="130px"> </div>
    <h2 class="info"> DIGLETT</h2> 
    <h3 class="info">Nº: 050</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 0.8 kg</h4>
    <h4 class="info">Height: 0.20 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p051"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//051.png" width="130px"> </div>
    <h2 class="info"> DUGTRIO</h2> 
    <h3 class="info">Nº: 051</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 33.3 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p052"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//052.png" width="130px"> </div>
    <h2 class="info"> MEOWTH</h2> 
    <h3 class="info">Nº: 052</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 4.2 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p053"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//053.png" width="130px"> </div>
    <h2 class="info"> PERSIAN</h2> 
    <h3 class="info">Nº: 053</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 32.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p054"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//054.png" width="130px"> </div>
    <h2 class="info"> PSYDUCK</h2> 
    <h3 class="info">Nº: 054</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.6 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p055"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//055.png" width="130px"> </div>
    <h2 class="info"> GOLDUCK</h2> 
    <h3 class="info">Nº: 055</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 76.6 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p056"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//056.png" width="130px"> </div>
    <h2 class="info"> MANKEY</h2> 
    <h3 class="info">Nº: 056</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 28.0 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p057"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//057.png" width="130px"> </div>
    <h2 class="info"> PRIMEAPE</h2> 
    <h3 class="info">Nº: 057</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 32.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p058"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//058.png" width="130px"> </div>
    <h2 class="info"> GROWLITHE</h2> 
    <h3 class="info">Nº: 058</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.0 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p059"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//059.png" width="130px"> </div>
    <h2 class="info"> ARCANINE</h2> 
    <h3 class="info">Nº: 059</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 155.0 kg</h4>
    <h4 class="info">Height: 1.91 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p060"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//060.png" width="130px"> </div>
    <h2 class="info"> POLIWAG</h2> 
    <h3 class="info">Nº: 060</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 12.4 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p061"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//061.png" width="130px"> </div>
    <h2 class="info"> POLIWHIRL</h2> 
    <h3 class="info">Nº: 061</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 20.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p062"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//062.png" width="130px"> </div>
    <h2 class="info"> POLIWRATH</h2> 
    <h3 class="info">Nº: 062</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 54.0 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: water,fighting</h4></div>
    <div class="card" id="p063"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//063.png" width="130px"> </div>
    <h2 class="info"> ABRA</h2> 
    <h3 class="info">Nº: 063</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.5 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p064"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//064.png" width="130px"> </div>
    <h2 class="info"> KADABRA</h2> 
    <h3 class="info">Nº: 064</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 56.5 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p065"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//065.png" width="130px"> </div>
    <h2 class="info"> ALAKAZAM</h2> 
    <h3 class="info">Nº: 065</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 48.0 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p066"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//066.png" width="130px"> </div>
    <h2 class="info"> MACHOP</h2> 
    <h3 class="info">Nº: 066</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 19.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p067"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//067.png" width="130px"> </div>
    <h2 class="info"> MACHOKE</h2> 
    <h3 class="info">Nº: 067</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 70.5 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p068"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//068.png" width="130px"> </div>
    <h2 class="info"> MACHAMP</h2> 
    <h3 class="info">Nº: 068</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 130.0 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p069"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//069.png" width="130px"> </div>
    <h2 class="info"> BELLSPROUT</h2> 
    <h3 class="info">Nº: 069</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 4.0 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p070"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//070.png" width="130px"> </div>
    <h2 class="info"> WEEPINBELL</h2> 
    <h3 class="info">Nº: 070</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.4 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p071"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//071.png" width="130px"> </div>
    <h2 class="info"> VICTREEBEL</h2> 
    <h3 class="info">Nº: 071</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 15.5 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: grass,poison</h4></div>
    <div class="card" id="p072"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//072.png" width="130px"> </div>
    <h2 class="info"> TENTACOOL</h2> 
    <h3 class="info">Nº: 072</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 45.5 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: water,poison</h4></div>
    <div class="card" id="p073"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//073.png" width="130px"> </div>
    <h2 class="info"> TENTACRUEL</h2> 
    <h3 class="info">Nº: 073</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 55.0 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: water,poison</h4></div>
    <div class="card" id="p074"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//074.png" width="130px"> </div>
    <h2 class="info"> GEODUDE</h2> 
    <h3 class="info">Nº: 074</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 20.0 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: rock,ground</h4></div>
    <div class="card" id="p075"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//075.png" width="130px"> </div>
    <h2 class="info"> GRAVELER</h2> 
    <h3 class="info">Nº: 075</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 105.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: rock,ground</h4></div>
    <div class="card" id="p076"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//076.png" width="130px"> </div>
    <h2 class="info"> GOLEM</h2> 
    <h3 class="info">Nº: 076</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 300.0 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: rock,ground</h4></div>
    <div class="card" id="p077"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//077.png" width="130px"> </div>
    <h2 class="info"> PONYTA</h2> 
    <h3 class="info">Nº: 077</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p078"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//078.png" width="130px"> </div>
    <h2 class="info"> RAPIDASH</h2> 
    <h3 class="info">Nº: 078</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 95.0 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p079"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//079.png" width="130px"> </div>
    <h2 class="info"> SLOWPOKE</h2> 
    <h3 class="info">Nº: 079</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 36.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: water,psychic</h4></div>
    <div class="card" id="p080"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//080.png" width="130px"> </div>
    <h2 class="info"> SLOWBRO</h2> 
    <h3 class="info">Nº: 080</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 78.5 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: water,psychic</h4></div>
    <div class="card" id="p081"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//081.png" width="130px"> </div>
    <h2 class="info"> MAGNEMITE</h2> 
    <h3 class="info">Nº: 081</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p082"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//082.png" width="130px"> </div>
    <h2 class="info"> MAGNETON</h2> 
    <h3 class="info">Nº: 082</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 60.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p083"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//083.png" width="130px"> </div>
    <h2 class="info"> FARFETCH'D</h2> 
    <h3 class="info">Nº: 083</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 15.0 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p084"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//084.png" width="130px"> </div>
    <h2 class="info"> DODUO</h2> 
    <h3 class="info">Nº: 084</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 39.2 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p085"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//085.png" width="130px"> </div>
    <h2 class="info"> DODRIO</h2> 
    <h3 class="info">Nº: 085</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 85.2 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p086"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//086.png" width="130px"> </div>
    <h2 class="info"> SEEL</h2> 
    <h3 class="info">Nº: 086</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 90.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p087"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//087.png" width="130px"> </div>
    <h2 class="info"> DEWGONG</h2> 
    <h3 class="info">Nº: 087</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 120.0 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: water,ice</h4></div>
    <div class="card" id="p088"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//088.png" width="130px"> </div>
    <h2 class="info"> GRIMER</h2> 
    <h3 class="info">Nº: 088</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p089"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//089.png" width="130px"> </div>
    <h2 class="info"> MUK</h2> 
    <h3 class="info">Nº: 089</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p090"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//090.png" width="130px"> </div>
    <h2 class="info"> SHELLDER</h2> 
    <h3 class="info">Nº: 090</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 4.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p091"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//091.png" width="130px"> </div>
    <h2 class="info"> CLOYSTER</h2> 
    <h3 class="info">Nº: 091</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 132.5 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: water,ice</h4></div>
    <div class="card" id="p092"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//092.png" width="130px"> </div>
    <h2 class="info"> GASTLY</h2> 
    <h3 class="info">Nº: 092</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 0.1 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: ghost,poison</h4></div>
    <div class="card" id="p093"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//093.png" width="130px"> </div>
    <h2 class="info"> HAUNTER</h2> 
    <h3 class="info">Nº: 093</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 0.1 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: ghost,poison</h4></div>
    <div class="card" id="p094"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//094.png" width="130px"> </div>
    <h2 class="info"> GENGAR</h2> 
    <h3 class="info">Nº: 094</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 40.5 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: ghost,poison</h4></div>
    <div class="card" id="p095"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//095.png" width="130px"> </div>
    <h2 class="info"> ONIX</h2> 
    <h3 class="info">Nº: 095</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 210.0 kg</h4>
    <h4 class="info">Height: 8.79 m</h4>
    <h4 class="info">Type: rock,ground</h4></div>
    <div class="card" id="p096"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//096.png" width="130px"> </div>
    <h2 class="info"> DROWZEE</h2> 
    <h3 class="info">Nº: 096</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 32.4 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p097"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//097.png" width="130px"> </div>
    <h2 class="info"> HYPNO</h2> 
    <h3 class="info">Nº: 097</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 75.6 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p098"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//098.png" width="130px"> </div>
    <h2 class="info"> KRABBY</h2> 
    <h3 class="info">Nº: 098</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p099"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//099.png" width="130px"> </div>
    <h2 class="info"> KINGLER</h2> 
    <h3 class="info">Nº: 099</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 60.0 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p100"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//100.png" width="130px"> </div>
    <h2 class="info"> VOLTORB</h2> 
    <h3 class="info">Nº: 100</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 10.4 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p101"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//101.png" width="130px"> </div>
    <h2 class="info"> ELECTRODE</h2> 
    <h3 class="info">Nº: 101</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 66.6 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p102"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//102.png" width="130px"> </div>
    <h2 class="info"> EXEGGCUTE</h2> 
    <h3 class="info">Nº: 102</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 2.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: grass,psychic</h4></div>
    <div class="card" id="p103"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//103.png" width="130px"> </div>
    <h2 class="info"> EXEGGUTOR</h2> 
    <h3 class="info">Nº: 103</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 120.0 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: grass,psychic</h4></div>
    <div class="card" id="p104"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//104.png" width="130px"> </div>
    <h2 class="info"> CUBONE</h2> 
    <h3 class="info">Nº: 104</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p105"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//105.png" width="130px"> </div>
    <h2 class="info"> MAROWAK</h2> 
    <h3 class="info">Nº: 105</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 45.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p106"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//106.png" width="130px"> </div>
    <h2 class="info"> HITMONLEE</h2> 
    <h3 class="info">Nº: 106</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 49.8 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p107"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//107.png" width="130px"> </div>
    <h2 class="info"> HITMONCHAN</h2> 
    <h3 class="info">Nº: 107</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 50.2 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p108"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//108.png" width="130px"> </div>
    <h2 class="info"> LICKITUNG</h2> 
    <h3 class="info">Nº: 108</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 65.5 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p109"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//109.png" width="130px"> </div>
    <h2 class="info"> KOFFING</h2> 
    <h3 class="info">Nº: 109</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 1.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p110"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//110.png" width="130px"> </div>
    <h2 class="info"> WEEZING</h2> 
    <h3 class="info">Nº: 110</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 9.5 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: poison</h4></div>
    <div class="card" id="p111"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//111.png" width="130px"> </div>
    <h2 class="info"> RHYHORN</h2> 
    <h3 class="info">Nº: 111</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 115.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: ground,rock</h4></div>
    <div class="card" id="p112"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//112.png" width="130px"> </div>
    <h2 class="info"> RHYDON</h2> 
    <h3 class="info">Nº: 112</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 120.0 kg</h4>
    <h4 class="info">Height: 1.91 m</h4>
    <h4 class="info">Type: ground,rock</h4></div>
    <div class="card" id="p113"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//113.png" width="130px"> </div>
    <h2 class="info"> CHANSEY</h2> 
    <h3 class="info">Nº: 113</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 34.6 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p114"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//114.png" width="130px"> </div>
    <h2 class="info"> TANGELA</h2> 
    <h3 class="info">Nº: 114</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 35.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p115"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//115.png" width="130px"> </div>
    <h2 class="info"> KANGASKHAN</h2> 
    <h3 class="info">Nº: 115</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 80.0 kg</h4>
    <h4 class="info">Height: 2.21 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p116"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//116.png" width="130px"> </div>
    <h2 class="info"> HORSEA</h2> 
    <h3 class="info">Nº: 116</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 8.0 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p117"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//117.png" width="130px"> </div>
    <h2 class="info"> SEADRA</h2> 
    <h3 class="info">Nº: 117</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 25.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p118"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//118.png" width="130px"> </div>
    <h2 class="info"> GOLDEEN</h2> 
    <h3 class="info">Nº: 118</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 15.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p119"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//119.png" width="130px"> </div>
    <h2 class="info"> SEAKING</h2> 
    <h3 class="info">Nº: 119</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 39.0 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p120"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//020.png" width="130px"> </div>
    <h2 class="info"> STARYU</h2> 
    <h3 class="info">Nº: 120</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 34.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p121"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//121.png" width="130px"> </div>
    <h2 class="info"> STARMIE</h2> 
    <h3 class="info">Nº: 121</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 80.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: water,psychic</h4></div>
    <div class="card" id="p122"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//122.png" width="130px"> </div>
    <h2 class="info"> MR. MIME</h2> 
    <h3 class="info">Nº: 122</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 54.5 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p123"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//123.png" width="130px"> </div>
    <h2 class="info"> SCYTHER</h2> 
    <h3 class="info">Nº: 123</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 56.0 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: bug,flying</h4></div>
    <div class="card" id="p124"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//124.png" width="130px"> </div>
    <h2 class="info"> JYNX</h2> 
    <h3 class="info">Nº: 124</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 40.6 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: ice,psychic</h4></div>
    <div class="card" id="p125"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//125.png" width="130px"> </div>
    <h2 class="info"> ELECTABUZZ</h2> 
    <h3 class="info">Nº: 125</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 30.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p126"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//126.png" width="130px"> </div>
    <h2 class="info"> MAGMAR</h2> 
    <h3 class="info">Nº: 126</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 44.5 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p127"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//127.png" width="130px"> </div>
    <h2 class="info"> PINSIR</h2> 
    <h3 class="info">Nº: 127</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 55.0 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: bug</h4></div>
    <div class="card" id="p128"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//128.png" width="130px"> </div>
    <h2 class="info"> TAUROS</h2> 
    <h3 class="info">Nº: 128</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 88.4 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p129"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//129.png" width="130px"> </div>
    <h2 class="info"> MAGIKARP</h2> 
    <h3 class="info">Nº: 129</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 10.0 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p130"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//130.png" width="130px"> </div>
    <h2 class="info"> GYARADOS</h2> 
    <h3 class="info">Nº: 130</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 235.0 kg</h4>
    <h4 class="info">Height: 6.50 m</h4>
    <h4 class="info">Type: water,flying</h4></div>
    <div class="card" id="p131"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//131.png" width="130px"> </div>
    <h2 class="info"> LAPRAS</h2> 
    <h3 class="info">Nº: 131</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 220.0 kg</h4>
    <h4 class="info">Height: 2.49 m</h4>
    <h4 class="info">Type: water,ice</h4></div>
    <div class="card" id="p132"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//132.png" width="130px"> </div>
    <h2 class="info"> DITTO</h2> 
    <h3 class="info">Nº: 132</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 4.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p133"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//133.png" width="130px"> </div>
    <h2 class="info"> EEVEE</h2> 
    <h3 class="info">Nº: 133</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 6.5 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p134"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//134.png" width="130px"> </div>
    <h2 class="info"> VAPOREON</h2> 
    <h3 class="info">Nº: 134</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 29.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p135"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//135.png" width="130px"> </div>
    <h2 class="info"> JOLTEON</h2> 
    <h3 class="info">Nº: 135</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 24.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p136"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//136.png" width="130px"> </div>
    <h2 class="info"> FLAREON</h2> 
    <h3 class="info">Nº: 136</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 25.0 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p137"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//137.png" width="130px"> </div>
    <h2 class="info"> PORYGON</h2> 
    <h3 class="info">Nº: 137</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 36.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p138"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//138.png" width="130px"> </div>
    <h2 class="info"> OMANYTE</h2> 
    <h3 class="info">Nº: 138</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 7.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: rock,water</h4></div>
    <div class="card" id="p139"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//139.png" width="130px"> </div>
    <h2 class="info"> OMASTAR</h2> 
    <h3 class="info">Nº: 139</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 35.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: rock,water</h4></div>
    <div class="card" id="p140"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//140.png" width="130px"> </div>
    <h2 class="info"> KABUTO</h2> 
    <h3 class="info">Nº: 140</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 11.5 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: rock,water</h4></div>
    <div class="card" id="p141"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//141.png" width="130px"> </div>
    <h2 class="info"> KABUTOPS</h2> 
    <h3 class="info">Nº: 141</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 40.5 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: rock,water</h4></div>
    <div class="card" id="p142"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//142.png" width="130px"> </div>
    <h2 class="info"> AERODACTYL</h2> 
    <h3 class="info">Nº: 142</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 59.0 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: rock,flying</h4></div>
    <div class="card" id="p143"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//143.png" width="130px"> </div>
    <h2 class="info"> SNORLAX</h2> 
    <h3 class="info">Nº: 143</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 460.0 kg</h4>
    <h4 class="info">Height: 2.11 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p144"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//144.png" width="130px"> </div>
    <h2 class="info"> ARTICUNO</h2> 
    <h3 class="info">Nº: 144</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 55.4 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: ice,flying</h4></div>
    <div class="card" id="p145"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//145.png" width="130px"> </div>
    <h2 class="info"> ZAPDOS</h2> 
    <h3 class="info">Nº: 145</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 52.6 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: electric,flying</h4></div>
    <div class="card" id="p146"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//146.png" width="130px"> </div>
    <h2 class="info"> MOLTRES</h2> 
    <h3 class="info">Nº: 146</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 60.0 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: fire,flying</h4></div>
    <div class="card" id="p147"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//147.png" width="130px"> </div>
    <h2 class="info"> DRATINI</h2> 
    <h3 class="info">Nº: 147</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 3.3 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: dragon</h4></div>
    <div class="card" id="p148"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//148.png" width="130px"> </div>
    <h2 class="info"> DRAGONAIR</h2> 
    <h3 class="info">Nº: 148</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 16.5 kg</h4>
    <h4 class="info">Height: 3.99 m</h4>
    <h4 class="info">Type: dragon</h4></div>
    <div class="card" id="p149"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//149.png" width="130px"> </div>
    <h2 class="info"> DRAGONITE</h2> 
    <h3 class="info">Nº: 149</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 210.0 kg</h4>
    <h4 class="info">Height: 2.21 m</h4>
    <h4 class="info">Type: dragon,flying</h4></div>
    <div class="card" id="p150"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//150.png" width="130px"> </div>
    <h2 class="info"> MEWTWO</h2> 
    <h3 class="info">Nº: 150</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 122.0 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p151"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//151.png" width="130px"> </div>
    <h2 class="info"> MEW</h2> 
    <h3 class="info">Nº: 151</h3>
    <h3 class="info">Generation: kanto</h3>
    <h4 class="info">Weight: 4.0 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p152"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//152.png" width="130px"> </div>
    <h2 class="info"> CHIKORITA</h2> 
    <h3 class="info">Nº: 152</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 6.4 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p153"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//153.png" width="130px"> </div>
    <h2 class="info"> BAYLEEF</h2> 
    <h3 class="info">Nº: 153</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 15.8 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p154"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//154.png" width="130px"> </div>
    <h2 class="info"> MEGANIUM</h2> 
    <h3 class="info">Nº: 154</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 100.5 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p155"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//155.png" width="130px"> </div>
    <h2 class="info"> CYNDAQUIL</h2> 
    <h3 class="info">Nº: 155</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 7.9 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p156"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//156.png" width="130px"> </div>
    <h2 class="info"> QUILAVA</h2> 
    <h3 class="info">Nº: 156</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 19.0 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p157"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//157.png" width="130px"> </div>
    <h2 class="info"> TYPHLOSION</h2> 
    <h3 class="info">Nº: 157</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 79.5 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p158"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//158.png" width="130px"> </div>
    <h2 class="info"> TOTODILE</h2> 
    <h3 class="info">Nº: 158</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 9.5 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p159"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//159.png" width="130px"> </div>
    <h2 class="info"> CROCONAW</h2> 
    <h3 class="info">Nº: 159</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 25.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p160"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//160.png" width="130px"> </div>
    <h2 class="info"> FERALIGATR</h2> 
    <h3 class="info">Nº: 160</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 88.8 kg</h4>
    <h4 class="info">Height: 2.31 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p161"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//161.png" width="130px"> </div>
    <h2 class="info"> SENTRET</h2> 
    <h3 class="info">Nº: 161</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 6.0 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p162"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//162.png" width="130px"> </div>
    <h2 class="info"> FURRET</h2> 
    <h3 class="info">Nº: 162</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 32.5 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p163"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//163.png" width="130px"> </div>
    <h2 class="info"> HOOTHOOT</h2> 
    <h3 class="info">Nº: 163</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 21.2 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p164"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//164.png" width="130px"> </div>
    <h2 class="info"> NOCTOWL</h2> 
    <h3 class="info">Nº: 164</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 40.8 kg</h4>
    <h4 class="info">Height: 1.60 m</h4>
    <h4 class="info">Type: normal,flying</h4></div>
    <div class="card" id="p165"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//165.png" width="130px"> </div>
    <h2 class="info"> LEDYBA</h2> 
    <h3 class="info">Nº: 165</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 10.8 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: bug,flying</h4></div>
    <div class="card" id="p166"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//166.png" width="130px"> </div>
    <h2 class="info"> LEDIAN</h2> 
    <h3 class="info">Nº: 166</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 35.6 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: bug,flying</h4></div>
    <div class="card" id="p167"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//167.png" width="130px"> </div>
    <h2 class="info"> SPINARAK</h2> 
    <h3 class="info">Nº: 167</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 8.5 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p168"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//168.png" width="130px"> </div>
    <h2 class="info"> ARIADOS</h2> 
    <h3 class="info">Nº: 168</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 33.5 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: bug,poison</h4></div>
    <div class="card" id="p169"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//169.png" width="130px"> </div>
    <h2 class="info"> CROBAT</h2> 
    <h3 class="info">Nº: 169</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 75.0 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: poison,flying</h4></div>
    <div class="card" id="p170"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//170.png" width="130px"> </div>
    <h2 class="info"> CHINCHOU</h2> 
    <h3 class="info">Nº: 170</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 12.0 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: water,electric</h4></div>
    <div class="card" id="p171"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//171.png" width="130px"> </div>
    <h2 class="info"> LANTURN</h2> 
    <h3 class="info">Nº: 171</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 22.5 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: water,electric</h4></div>
    <div class="card" id="p172"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//172.png" width="130px"> </div>
    <h2 class="info"> PICHU</h2> 
    <h3 class="info">Nº: 172</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 2.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p173"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//173.png" width="130px"> </div>
    <h2 class="info"> CLEFFA</h2> 
    <h3 class="info">Nº: 173</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 3.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: fairy</h4></div>
    <div class="card" id="p174"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//174.png" width="130px"> </div>
    <h2 class="info"> IGGLYBUFF</h2> 
    <h3 class="info">Nº: 174</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 1.0 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: normal,fairy</h4></div>
    <div class="card" id="p175"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//175.png" width="130px"> </div>
    <h2 class="info"> TOGEPI</h2> 
    <h3 class="info">Nº: 175</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 1.5 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: fairy</h4></div>
    <div class="card" id="p176"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//176.png" width="130px"> </div>
    <h2 class="info"> TOGETIC</h2> 
    <h3 class="info">Nº: 176</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 3.2 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: fairy,flying</h4></div>
    <div class="card" id="p177"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//177.png" width="130px"> </div>
    <h2 class="info"> NATU</h2> 
    <h3 class="info">Nº: 177</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 2.0 kg</h4>
    <h4 class="info">Height: 0.21 m</h4>
    <h4 class="info">Type: psychic,flying</h4></div>
    <div class="card" id="p178"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//178.png" width="130px"> </div>
    <h2 class="info"> XATU</h2> 
    <h3 class="info">Nº: 178</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 15.0 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: psychic,flying</h4></div>
    <div class="card" id="p179"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//179.png" width="130px"> </div>
    <h2 class="info"> MAREEP</h2> 
    <h3 class="info">Nº: 179</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 7.8 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p180"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//180.png" width="130px"> </div>
    <h2 class="info"> FLAAFFY</h2> 
    <h3 class="info">Nº: 180</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 13.3 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p181"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//181.png" width="130px"> </div>
    <h2 class="info"> AMPHAROS</h2> 
    <h3 class="info">Nº: 181</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 61.5 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p182"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//182.png" width="130px"> </div>
    <h2 class="info"> BELLOSSOM</h2> 
    <h3 class="info">Nº: 182</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 5.8 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p183"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//183.png" width="130px"> </div>
    <h2 class="info"> MARILL</h2> 
    <h3 class="info">Nº: 183</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 8.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: water,fairy</h4></div>
    <div class="card" id="p184"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//184.png" width="130px"> </div>
    <h2 class="info"> AZUMARILL</h2> 
    <h3 class="info">Nº: 184</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 28.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: water,fairy</h4></div>
    <div class="card" id="p185"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//185.png" width="130px"> </div>
    <h2 class="info"> SUDOWOODO</h2> 
    <h3 class="info">Nº: 185</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 38.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: rock</h4></div>
    <div class="card" id="p186"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//186.png" width="130px"> </div>
    <h2 class="info"> POLITOED</h2> 
    <h3 class="info">Nº: 186</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 33.9 kg</h4>
    <h4 class="info">Height: 10.90 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p187"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//187.png" width="130px"> </div>
    <h2 class="info"> HOPPIP</h2> 
    <h3 class="info">Nº: 187</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 0.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: grass,flying</h4></div>
    <div class="card" id="p188"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//188.png" width="130px"> </div>
    <h2 class="info"> SKIPLOOM</h2> 
    <h3 class="info">Nº: 188</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 1.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: grass,flying</h4></div>
    <div class="card" id="p189"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//189.png" width="130px"> </div>
    <h2 class="info"> JUMPLUFF</h2> 
    <h3 class="info">Nº: 189</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 3.0 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: grass,flying</h4></div>
    <div class="card" id="p190"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//190.png" width="130px"> </div>
    <h2 class="info"> AIPOM</h2> 
    <h3 class="info">Nº: 190</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 11.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p191"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//191.png" width="130px"> </div>
    <h2 class="info"> SUNKERN</h2> 
    <h3 class="info">Nº: 191</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 1.8 kg</h4>
    <h4 class="info">Height: 0.30 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p192"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//192.png" width="130px"> </div>
    <h2 class="info"> SUNFLORA</h2> 
    <h3 class="info">Nº: 192</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 8.5 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: grass</h4></div>
    <div class="card" id="p193"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//193.png" width="130px"> </div>
    <h2 class="info"> YANMA</h2> 
    <h3 class="info">Nº: 193</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 38.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: bug,flying</h4></div>
    <div class="card" id="p194"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//194.png" width="130px"> </div>
    <h2 class="info"> WOOPER</h2> 
    <h3 class="info">Nº: 194</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 8.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: water,ground</h4></div>
    <div class="card" id="p195"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//195.png" width="130px"> </div>
    <h2 class="info"> QUAGSIRE</h2> 
    <h3 class="info">Nº: 195</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 75.0 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: water,ground</h4></div>
    <div class="card" id="p196"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//196.png" width="130px"> </div>
    <h2 class="info"> ESPEON</h2> 
    <h3 class="info">Nº: 196</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 26.5 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p197"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//197.png" width="130px"> </div>
    <h2 class="info"> UMBREON</h2> 
    <h3 class="info">Nº: 197</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 27.0 kg</h4>
    <h4 class="info">Height: 0.99 m</h4>
    <h4 class="info">Type: dark</h4></div>
    <div class="card" id="p198"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//198.png" width="130px"> </div>
    <h2 class="info"> MURKROW</h2> 
    <h3 class="info">Nº: 198</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 2.1 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: dark,flying</h4></div>
    <div class="card" id="p199"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//199.png" width="130px"> </div>
    <h2 class="info"> SLOWKING</h2> 
    <h3 class="info">Nº: 199</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 79.5 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: water,psychic</h4></div>
    <div class="card" id="p200"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//200.png" width="130px"> </div>
    <h2 class="info"> MISDREAVUS</h2> 
    <h3 class="info">Nº: 200</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 1.0 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: ghost</h4></div>
    <div class="card" id="p201"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//201.png" width="130px"> </div>
    <h2 class="info"> UNOWN</h2> 
    <h3 class="info">Nº: 201</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 5.0 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p202"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//202.png" width="130px"> </div>
    <h2 class="info"> WOBBUFFET</h2> 
    <h3 class="info">Nº: 202</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 28.5 kg</h4>
    <h4 class="info">Height: 1.30 m</h4>
    <h4 class="info">Type: psychic</h4></div>
    <div class="card" id="p203"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//203.png" width="130px"> </div>
    <h2 class="info"> GIRAFARIG</h2> 
    <h3 class="info">Nº: 203</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 41.5 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: normal,psychic</h4></div>
    <div class="card" id="p204"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//204.png" width="130px"> </div>
    <h2 class="info"> PINECO</h2> 
    <h3 class="info">Nº: 204</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 7.2 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: bug</h4></div>
    <div class="card" id="p205"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//205.png" width="130px"> </div>
    <h2 class="info"> FORRETRESS</h2> 
    <h3 class="info">Nº: 205</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 125.8 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: bug,steel</h4></div>
    <div class="card" id="p206"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//206.png" width="130px"> </div>
    <h2 class="info"> DUNSPARCE</h2> 
    <h3 class="info">Nº: 206</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 14.0 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p207"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//207.png" width="130px"> </div>
    <h2 class="info"> GLIGAR</h2> 
    <h3 class="info">Nº: 207</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 64.8 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: ground,flying</h4></div>
    <div class="card" id="p208"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//208.png" width="130px"> </div>
    <h2 class="info"> STEELIX</h2> 
    <h3 class="info">Nº: 208</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 400.0 kg</h4>
    <h4 class="info">Height: 9.19 m</h4>
    <h4 class="info">Type: steel,ground</h4></div>
    <div class="card" id="p209"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//209.png" width="130px"> </div>
    <h2 class="info"> SNUBBULL</h2> 
    <h3 class="info">Nº: 209</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 7.8 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: fairy</h4></div>
    <div class="card" id="p210"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//210.png" width="130px"> </div>
    <h2 class="info"> GRANBULL</h2> 
    <h3 class="info">Nº: 210</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 48.7 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: fairy</h4></div>
    <div class="card" id="p211"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//211.png" width="130px"> </div>
    <h2 class="info"> QWILFISH</h2> 
    <h3 class="info">Nº: 211</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 3.9 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: water,poison</h4></div>
    <div class="card" id="p212"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//212.png" width="130px"> </div>
    <h2 class="info"> SCIZOR</h2> 
    <h3 class="info">Nº: 212</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 125.0 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: bug,steel</h4></div>
    <div class="card" id="p213"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//213.png" width="130px"> </div>
    <h2 class="info"> SHUCKLE</h2> 
    <h3 class="info">Nº: 213</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 20.5 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: bug,rock</h4></div>
    <div class="card" id="p214"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//214.png" width="130px"> </div>
    <h2 class="info"> HERACROSS</h2> 
    <h3 class="info">Nº: 214</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 54.0 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: bug,fighting</h4></div>
    <div class="card" id="p215"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//215.png" width="130px"> </div>
    <h2 class="info"> SNEASEL</h2> 
    <h3 class="info">Nº: 215</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 28.0 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: dark,ice</h4></div>
    <div class="card" id="p216"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//216.png" width="130px"> </div>
    <h2 class="info"> TEDDIURSA</h2> 
    <h3 class="info">Nº: 216</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 8.8 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p217"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//217.png" width="130px"> </div>
    <h2 class="info"> URSARING</h2> 
    <h3 class="info">Nº: 217</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 125.8 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p218"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//218.png" width="130px"> </div>
    <h2 class="info"> SLUGMA</h2> 
    <h3 class="info">Nº: 218</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 35.0 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p219"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//219.png" width="130px"> </div>
    <h2 class="info"> MAGCARGO</h2> 
    <h3 class="info">Nº: 219</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 55.0 kg</h4>
    <h4 class="info">Height: 0.79 m</h4>
    <h4 class="info">Type: fire,rock</h4></div>
    <div class="card" id="p220"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//220.png" width="130px"> </div>
    <h2 class="info"> SWINUB</h2> 
    <h3 class="info">Nº: 220</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 6.5 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: ice,ground</h4></div>
    <div class="card" id="p221"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//221.png" width="130px"> </div>
    <h2 class="info"> PILOSWINE</h2> 
    <h3 class="info">Nº: 221</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 55.8 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: ice,ground</h4></div>
    <div class="card" id="p222"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//222.png" width="130px"> </div>
    <h2 class="info"> CORSOLA</h2> 
    <h3 class="info">Nº: 222</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 5.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: water,rock</h4></div>
    <div class="card" id="p223"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//223.png" width="130px"> </div>
    <h2 class="info"> REMORAID</h2> 
    <h3 class="info">Nº: 223</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 12.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p224"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//224.png" width="130px"> </div>
    <h2 class="info"> OCTILLERY</h2> 
    <h3 class="info">Nº: 224</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 28.5 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p225"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//225.png" width="130px"> </div>
    <h2 class="info"> DELIBIRD</h2> 
    <h3 class="info">Nº: 225</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 16.0 kg</h4>
    <h4 class="info">Height: 0.89 m</h4>
    <h4 class="info">Type: ice,flying</h4></div>
    <div class="card" id="p226"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//226.png" width="130px"> </div>
    <h2 class="info"> MANTINE</h2> 
    <h3 class="info">Nº: 226</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 220.0 kg</h4>
    <h4 class="info">Height: 2.11 m</h4>
    <h4 class="info">Type: water,flying</h4></div>
    <div class="card" id="p227"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//227.png" width="130px"> </div>
    <h2 class="info"> SKARMORY</h2> 
    <h3 class="info">Nº: 227</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 50.5 kg</h4>
    <h4 class="info">Height: 1.70 m</h4>
    <h4 class="info">Type: steel,flying</h4></div>
    <div class="card" id="p228"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//228.png" width="130px"> </div>
    <h2 class="info"> HOUNDOUR</h2> 
    <h3 class="info">Nº: 228</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 10.8 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: dark,fire</h4></div>
    <div class="card" id="p229"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//229.png" width="130px"> </div>
    <h2 class="info"> HOUNDOOM</h2> 
    <h3 class="info">Nº: 229</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 35.0 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: dark,fire</h4></div>
    <div class="card" id="p230"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//230.png" width="130px"> </div>
    <h2 class="info"> KINGDRA</h2> 
    <h3 class="info">Nº: 230</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 152.0 kg</h4>
    <h4 class="info">Height: 1.80 m</h4>
    <h4 class="info">Type: water,dragon</h4></div>
    <div class="card" id="p231"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//231.png" width="130px"> </div>
    <h2 class="info"> PHANPY</h2> 
    <h3 class="info">Nº: 231</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 33.5 kg</h4>
    <h4 class="info">Height: 0.51 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p232"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//232.png" width="130px"> </div>
    <h2 class="info"> DONPHAN</h2> 
    <h3 class="info">Nº: 232</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 120.0 kg</h4>
    <h4 class="info">Height: 1.09 m</h4>
    <h4 class="info">Type: ground</h4></div>
    <div class="card" id="p233"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//233.png" width="130px"> </div>
    <h2 class="info"> PORYGON2</h2> 
    <h3 class="info">Nº: 233</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 32.5 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p234"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//234.png" width="130px"> </div>
    <h2 class="info"> STANTLER</h2> 
    <h3 class="info">Nº: 234</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 71.2 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p235"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//235.png" width="130px"> </div>
    <h2 class="info"> SMEARGLE</h2> 
    <h3 class="info">Nº: 235</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 58.0 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p236"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//236.png" width="130px"> </div>
    <h2 class="info"> TYROGUE</h2> 
    <h3 class="info">Nº: 236</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 21.0 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p237"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//237.png" width="130px"> </div>
    <h2 class="info"> HITMONTOP</h2> 
    <h3 class="info">Nº: 237</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 48.0 kg</h4>
    <h4 class="info">Height: 1.40 m</h4>
    <h4 class="info">Type: fighting</h4></div>
    <div class="card" id="p238"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//238.png" width="130px"> </div>
    <h2 class="info"> SMOOCHUM</h2> 
    <h3 class="info">Nº: 238</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 6.0 kg</h4>
    <h4 class="info">Height: 0.41 m</h4>
    <h4 class="info">Type: ice,psychic</h4></div>
    <div class="card" id="p239"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//239.png" width="130px"> </div>
    <h2 class="info"> ELEKID</h2> 
    <h3 class="info">Nº: 239</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 23.5 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p240"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//240.png" width="130px"> </div>
    <h2 class="info"> MAGBY</h2> 
    <h3 class="info">Nº: 240</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 21.4 kg</h4>
    <h4 class="info">Height: 0.71 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p241"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//241.png" width="130px"> </div>
    <h2 class="info"> MILTANK</h2> 
    <h3 class="info">Nº: 241</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 75.5 kg</h4>
    <h4 class="info">Height: 1.19 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p242"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//242.png" width="130px"> </div>
    <h2 class="info"> BLISSEY</h2> 
    <h3 class="info">Nº: 242</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 46.8 kg</h4>
    <h4 class="info">Height: 1.50 m</h4>
    <h4 class="info">Type: normal</h4></div>
    <div class="card" id="p243"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//243.png" width="130px"> </div>
    <h2 class="info"> RAIKOU</h2> 
    <h3 class="info">Nº: 243</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 178.0 kg</h4>
    <h4 class="info">Height: 1.91 m</h4>
    <h4 class="info">Type: electric</h4></div>
    <div class="card" id="p244"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//244.png" width="130px"> </div>
    <h2 class="info"> ENTEI</h2> 
    <h3 class="info">Nº: 244</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 198.0 kg</h4>
    <h4 class="info">Height: 2.11 m</h4>
    <h4 class="info">Type: fire</h4></div>
    <div class="card" id="p245"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//245.png" width="130px"> </div>
    <h2 class="info"> SUICUNE</h2> 
    <h3 class="info">Nº: 245</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 187.0 kg</h4>
    <h4 class="info">Height: 2.01 m</h4>
    <h4 class="info">Type: water</h4></div>
    <div class="card" id="p246"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//246.png" width="130px"> </div>
    <h2 class="info"> LARVITAR</h2> 
    <h3 class="info">Nº: 246</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 72.0 kg</h4>
    <h4 class="info">Height: 0.60 m</h4>
    <h4 class="info">Type: rock,ground</h4></div>
    <div class="card" id="p247"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//247.png" width="130px"> </div>
    <h2 class="info"> PUPITAR</h2> 
    <h3 class="info">Nº: 247</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 152.0 kg</h4>
    <h4 class="info">Height: 1.20 m</h4>
    <h4 class="info">Type: rock,ground</h4></div>
    <div class="card" id="p248"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//248.png" width="130px"> </div>
    <h2 class="info"> TYRANITAR</h2> 
    <h3 class="info">Nº: 248</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 202.0 kg</h4>
    <h4 class="info">Height: 2.00 m</h4>
    <h4 class="info">Type: rock,dark</h4></div>
    <div class="card" id="p249"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//249.png" width="130px"> </div>
    <h2 class="info"> LUGIA</h2> 
    <h3 class="info">Nº: 249</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 216.0 kg</h4>
    <h4 class="info">Height: 5.21 m</h4>
    <h4 class="info">Type: psychic,flying</h4></div>
    <div class="card" id="p250"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//250.png" width="130px"> </div>
    <h2 class="info"> HO-OH</h2> 
    <h3 class="info">Nº: 250</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 199.0 kg</h4>
    <h4 class="info">Height: 3.80 m</h4>
    <h4 class="info">Type: fire,flying</h4></div>
    <div class="card" id="p251"><div class="imaconteiner"> <img class="ima" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//251.png" width="130px"> </div>
    <h2 class="info"> CELEBI</h2> 
    <h3 class="info">Nº: 251</h3>
    <h3 class="info">Generation: johto</h3>
    <h4 class="info">Weight: 5.0 kg</h4>
    <h4 class="info">Height: 0.61 m</h4>
    <h4 class="info">Type: psychic,grass</h4></div></div>
    `;

    fn.deleteFilters();
    expect(document.getElementById('fire').checked).toBe(false);
  });
});
