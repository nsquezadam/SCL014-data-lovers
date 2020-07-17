import data from './data/pokemon/pokemon.js';

// se crean las lista de atributo de los pokemones a utilizar tipo, generacion y nombre
const typePok = [];
const genPok = [];
const namePok = [];
// eslint-disable-next-line array-callback-return
data.pokemon.map((pokem) => {
  // eslint-disable-next-line no-console
  // console.log('200');
  // eslint-disable-next-line array-callback-return
  pokem.type.map((tipo) => {
    typePok.push(tipo);
  });
  genPok.push(pokem.generation);
  namePok.push(pokem.name);
});

// eslint-disable-next-line no-console
// console.table(typePok);
// eslint-disable-next-line no-console
// console.table(namePok);
// set de datos valores unicos se declara  nueva instancia con new
const uniqueSetType = new Set(typePok);
const uniqueSetGen = new Set(genPok.map(JSON.stringify));
const uniqueSetName = new Set(namePok);
// eslint-disable-next-line no-console
// console.table(uniqueSetType);
// eslint-disable-next-line no-console
// console.table(uniqueSetName);
// lista para exportar en  variables de argumentoslistas set convertidos en arreglo
export const uniqueArrayType = [...uniqueSetType].sort();
// tranforma los objetos  iterables   en arreglo en este caso solo de la generacion
export const uniqueArrayGen = Array.from(uniqueSetGen).map(JSON.parse);
export const uniqueArrayName = [...uniqueSetName].sort();
// eslint-disable-next-line no-console
// console.table(uniqueArrayType);
// eslint-disable-next-line no-console
// console.table(uniqueArrayGen);
// eslint-disable-next-line no-console
// console.table(uniqueArrayName);

export const nameSortFunction = (a, b) => {
  if (a.name === b.name) {
    return 0;
  }
  return (a.name < b.name) ? -1 : 1;
};

export const numSortFunction = (a, b) => {
  if (a.num === b.num) {
    return 0;
  }
  return (a.num < b.num) ? -1 : 1;
};

// eslint-disable-next-line import/no-mutable-exports
export let pokeArray = data.pokemon.sort(numSortFunction);
// se crea html en data, por modificacion de datos a futuro
export const allFilters = () => {
  document.getElementById('alltype').innerHTML = `
          <div class="boxFilters1">
            <p>SORT</p>
          <input type="button" id="sort_name" value="Alphabetically A-Z"><br><br>
          <input type="button" id="sort_num" value="By Pokedex ID"><br><br>
          </div>
          <div class="boxFilters2">
          <form><br>
            <div class="busqueda">
              <input id="myInput" type="text" name="myPokemon" placeholder="Search for name!">
            </div>
          </form><br>
          <input type="button" id="busca" value="Search"><br><br><br>
          </div>
          <div class="boxFilters3">
          <p>GENERATION</p>${
  // nos traemos la lista de  generacion puede actualizarse se trael el nombre con el num de gen.
  uniqueArrayGen.map(allgen => `<input type="checkbox" id="${allgen.name}" name="${allgen.name}" value="type"> ${allgen.name.toUpperCase()} (${allgen.num.toUpperCase()})<br>`).join('')
}<br><p>TYPE</p><br>${
  // nos traemos la lista de ls tipos
  uniqueArrayType.map(alltype => `<input type="checkbox" id="${alltype}" name="${alltype}" value="type"> ${alltype.toUpperCase()}<br>`).join('')
}<br><input type="button" id="filtro" value="Filtrar"><br>`
+ '<br><input type="button" id="borrar" value="Quitar filtros"> </div>';
};
// creacion de tarjeta con info de pokemon
export const pokeCard = () => {
  document.getElementById('allpoke').innerHTML = pokeArray.map(allpoke => `
    <div class="card" id="p${allpoke.num}"><div class="imaconteiner"> <img class=ima src="${allpoke.img}" width="130px" > </div>
    <h2 class="info"> ${allpoke.name.toUpperCase()}</h2> 
    <h3 class="info">Nº: ${allpoke.num}</h3>
    <h3 class="info">Generation: ${allpoke.generation.name}</h3>
    <h4 class="info">Weight: ${allpoke.size.weight}</h4>
    <h4 class="info">Height: ${allpoke.size.height}</h4>
    <h4 class="info">Type: ${allpoke.type}</h4></div>`).join('');
};
// <h4 class="info">Sobre: ${allpoke.about}</h4>

// funcion para boton ordenar deleteFilters las demas  parametros seleccionados
export const nameOrder = () => {
  pokeArray = data.pokemon.sort(nameSortFunction);
  pokeCard();
  // eslint-disable-next-line array-callback-return
  uniqueArrayType.map((tipo) => {
    document.getElementById(tipo).checked = false;
  });
  // eslint-disable-next-line array-callback-return
  uniqueArrayGen.map((gen) => {
    document.getElementById(gen.name).checked = false;
  });
  // eslint-disable-next-line no-undef
  myInput.value = '';
};
// eslint-disable-next-line no-console
console.table(pokeArray);
// funcion para  ordenar  por numero  y borrar las demas selecciones
export const numOrder = () => {
  pokeArray = data.pokemon.sort(numSortFunction);
  pokeCard();
  // eslint-disable-next-line array-callback-return
  uniqueArrayType.map((tipo) => {
    document.getElementById(tipo).checked = false;
  });
  // eslint-disable-next-line array-callback-return
  uniqueArrayGen.map((gen) => {
    document.getElementById(gen.name).checked = false;
  });
  // eslint-disable-next-line no-undef
  myInput.value = '';
};

// ACCION deleteFilters FILTROS Y LIMPIA LA PAGINA
export const deleteFilters = () => {
  // eslint-disable-next-line array-callback-return
  pokeArray.map((pokem) => {
    // eslint-disable-next-line no-eval
    const cardPoke = eval(`p${pokem.num}`);
    cardPoke.style.display = 'block';
  });
  // eslint-disable-next-line array-callback-return
  uniqueArrayType.map((tipo) => {
    document.getElementById(tipo).checked = false;
  });
  // eslint-disable-next-line array-callback-return
  uniqueArrayGen.map((gen) => {
    document.getElementById(gen.name).checked = false;
  });
  // eslint-disable-next-line no-undef
  myInput.value = '';
};

// ACCION DE BUSCAR POR NOMBRE
export const pokeSearch = () => {
  // eslint-disable-next-line no-undef
  if (myInput.value === '') {
    // eslint-disable-next-line no-alert
    alert('Por favor ingrese nombre del Pokémon');
  } else {
    let bandera = 0;
    // eslint-disable-next-line array-callback-return
    pokeArray.map((pokem) => {
      // eslint-disable-next-line no-eval
      const cardPoke = eval(`p${pokem.num}`);
      // eslint-disable-next-line no-undef
      if (pokem.name === myInput.value.toLowerCase()) {
        cardPoke.style.display = 'block';
        bandera = 1;
      } else {
        cardPoke.style.display = 'none';
      }
    });
    if (bandera === 0) {
      // eslint-disable-next-line no-alert
      alert('Su pokeSearch no coinside con ningun Pokémon registrado');
      // eslint-disable-next-line array-callback-return
      data.pokemon.map((pokem) => {
        // eslint-disable-next-line no-eval
        const cardPoke = eval(`p${pokem.num}`);
        cardPoke.style.display = 'block';
      });
    }
    // eslint-disable-next-line array-callback-return
    uniqueArrayType.map((tipo) => {
      document.getElementById(tipo).checked = false;
    });
    // eslint-disable-next-line array-callback-return
    uniqueArrayGen.map((gen) => {
      document.getElementById(gen.name).checked = false;
    });
  }
};

// ACCION DE FILTRAR POR TIPO
export const filterType = () => {
  const genMarked = uniqueArrayGen
    .filter(gen => document.getElementById(gen.name).checked === true)
    .map(name => name)
    // eslint-disable-next-line no-unused-vars
    .reduce((contador, _score) => contador + 1, 0);

  const typeMarked = uniqueArrayType
    .filter(tipo => document.getElementById(tipo).checked === true)
    .map(tipo => tipo)
    // reduce se utiliza para contar las variables que cumplen la condicion
    // eslint-disable-next-line no-unused-vars
    .reduce((contador, _score) => contador + 1, 0);

  if (typeMarked + genMarked > 0) {
    // eslint-disable-next-line array-callback-return
    data.pokemon.map((pokem) => {
      // evalua las las variables  junto con la concatenacion del  id en este caso
      // eslint-disable-next-line no-eval
      const cardPoke = eval(`p${pokem.num}`);
      let addType = 0; let addGen = 0;
      if (typeMarked > 0) {
        // eslint-disable-next-line array-callback-return
        pokem.type.map((tipo2) => {
          // eslint-disable-next-line array-callback-return
          uniqueArrayType.map((tipo) => {
            if (document.getElementById(tipo).checked === true) {
              if (tipo === tipo2) {
                addType = 1;
              }
            }
          });
        });
      } else {
        addType = 1;
      }
      if (genMarked > 0) {
        // eslint-disable-next-line array-callback-return
        uniqueArrayGen.map((gen) => {
          if (document.getElementById(gen.name).checked === true) {
            if (gen.name === pokem.generation.name) {
              addGen = 1;
            }
          }
        });
      } else {
        addGen = 1;
      }
      if (addType === 1 && addGen === 1) {
        cardPoke.style.display = 'block';
      } else {
        cardPoke.style.display = 'none';
      }
    });
    // eslint-disable-next-line no-undef
    myInput.value = '';
  } else {
    // eslint-disable-next-line array-callback-return
    pokeArray.map((pokem) => {
      // eslint-disable-next-line no-eval
      const cardPoke = eval(`p${pokem.num}`);
      cardPoke.style.display = 'block';
    });
  }
};

// ficha especial para la busqueda
export const pokeCardSearch = () => {
  document.getElementById('allpoke').innerHTML = pokeArray.map(allpoke => `
    <div class="card" id="p${allpoke.num}"><div class="imaconteiner"> <img class=ima src="${allpoke.img}"width="130px"></div>
    <h2 class="info"> ${allpoke.name.toUpperCase()}</h2> 
    <h3 class="info">Nº pokedex: ${allpoke.num}</h3>
    <h3 class="info">Generacion: ${allpoke.generation.name}</h3>
    <h4 class="info">Peso: ${allpoke.size.weight}</h4>
    <h4 class="info">Altura: ${allpoke.size.height}</h4>
    <h4 class="info">Tipo: ${allpoke.type}</h4>
    <h4 class="info">Sobre: ${allpoke.about}</h4></div>`).join('');
};

/*

/* opciones no funcionalesxs
// import data from './data/pokemon/pokemon.js';

// estas funciones son de ejemplo
// (export const pokeDetails = (object) => 'test';
// export const anotherExample = () => 'OMG';
// CREAR UN ARRAY CON FUNCIONES
// fx CREAR  NUEVA  VARIABLE  ARRAY DE LA DATA.POKEMON ( para  manejar como variable  en main.js)
/* const allPoke = (infoPokemon) => {
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
*/
