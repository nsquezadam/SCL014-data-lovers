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
  pokem.type.map((type) => {
    typePok.push(type);
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

// ORDENAR ALFABETICAMENTE  DE A a Z (array.sort(function(a, b){return b-a}); )
export const orderAz = (infoPokemon) => {
  const newArrayPokeAz = [];
  for (let i = 0; i < infoPokemon.length; i += 1) {
    newArrayPokeAz.push(infoPokemon[i]);
  }
  newArrayPokeAz.sort((a, b) => {
    // comparamos  2 elementos  nombre si a es mayo a b retorna -1 y se coloca antes de b
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  });
  return newArrayPokeAz;
};

// ORDENAR POR NUMERO     (array.sort(function(a, b){return b-a}); )
export const orderNum = (infoPokemon) => {
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

// eslint-disable-next-line no-console
// console.log(nameSortFunction(uniqueSetName));
// eslint-disable-next-line no-console
// console.log(typeof (nameSortFunction));
// eslint-disable-next-line import/no-mutable-exports
export let pokeArray = orderNum(data.pokemon);
// se crea html en data, por modificacion de datos a futuro
export const allFilters = () => {
  document.getElementById('alltype').innerHTML = `
          <div class="boxFilters1">
            <p>SORT</p>
          <input type="button" id="sort_name" value="Alphabetically A-Z"><br><br>
          <input type="button" id="sort_num" value="By Pokedex ID"><br><br>
          </div>
          <div class="boxFilters2">
          <form action="" method="get"><br>
            <div class="busqueda">
              <input id="myInput" type="text" name="myPokemon" placeholder="Search by name!" list="nameOfPoke">
              <datalist id="nameOfPoke">
              <option value="bulbasaur">
              <option value="ivysaur">
              <option value="venusaur">
              <option value="charmander">
              <option value="charmeleon">
              <option value="charizard">
              <option value="squirtle">
              <option value="wartortle">
              <option value="blastoise">
              <option value="caterpie">
              <option value="metapod">
              <option value="butterfree">
              <option value="weedle">
              <option value="kakuna">
              <option value="beedrill">
              <option value="pidgey">
              <option value="pidgeotto">
              <option value="pidgeot">
              <option value="rattata">
              <option value="raticate">
              <option value="spearow">
              <option value="fearow">
              <option value="ekans">
              <option value="arbok">
              <option value="pikachu">
              <option value="raichu">
              <option value="sandshrew">
              <option value="sandslash">
              <option value="nidoran">
              <option value="nidorina">
              <option value="nidoqueen">
              <option value="nidoran">
              <option value="nidorino">
              <option value="nidoking">
              <option value="clefairy">
              <option value="clefable">
              <option value="vulpix">
              <option value="ninetales">
              <option value="jigglypuff">
              <option value="wigglytuff">
              <option value="zubat">
              <option value="golbat">
              <option value="oddish">
              <option value="gloom">
              <option value="vileplume">
              <option value="paras">
              <option value="parasect">
              <option value="venonat">
              <option value="venomoth">
              <option value="diglett">
              <option value="dugtrio">
              <option value="meowth">
              <option value="persian">
              <option value="psyduck">
              <option value="golduck">
              <option value="mankey">
              <option value="primeape">
              <option value="growlithe">
              <option value="arcanine">
              <option value="poliwag">
              <option value="poliwhirl">
              <option value="poliwrath">
              <option value="abra">
              <option value="kadabra">
              <option value="alakazam">
              <option value="machop">
              <option value="machoke">
              <option value="machamp">
              <option value="bellsprout">
              <option value="weepinbell">
              <option value="victreebel">
              <option value="tentacool">
              <option value="tentacruel">
              <option value="geodude">
              <option value="graveler">
              <option value="golem">
              <option value="ponyta">
              <option value="rapidash">
              <option value="slowpoke">
              <option value="slowbro">
              <option value="magnemite">
              <option value="magneton">
              <option value="farfetch'd">
              <option value="doduo">
              <option value="dodrio">
              <option value="seel">
              <option value="dewgong">
              <option value="grimer">
              <option value="muk">
              <option value="shellder">
              <option value="cloyster">
              <option value="gastly">
              <option value="haunter">
              <option value="gengar">
              <option value="onix">
              <option value="drowzee">
              <option value="hypno">
              <option value="krabby">
              <option value="kingler">
              <option value="voltorb">
              <option value="electrode">
              <option value="exeggcute">
              <option value="exeggutor">
              <option value="cubone">
              <option value="marowak">
              <option value="hitmonlee">
              <option value="hitmonchan">
              <option value="lickitung">
              <option value="koffing">
              <option value="weezing">
              <option value="rhyhorn">
              <option value="rhydon">
              <option value="chansey">
              <option value="tangela">
              <option value="kangaskhan">
              <option value="horsea">
              <option value="seadra">
              <option value="goldeen">
              <option value="seaking">
              <option value="staryu">
              <option value="starmie">
              <option value="mr.">
              <option value="scyther">
              <option value="jynx">
              <option value="electabuzz">
              <option value="magmar">
              <option value="pinsir">
              <option value="tauros">
              <option value="magikarp">
              <option value="gyarados">
              <option value="lapras">
              <option value="ditto">
              <option value="eevee">
              <option value="vaporeon">
              <option value="jolteon">
              <option value="flareon">
              <option value="porygon">
              <option value="omanyte">
              <option value="omastar">
              <option value="kabuto">
              <option value="kabutops">
              <option value="aerodactyl">
              <option value="snorlax">
              <option value="articuno">
              <option value="zapdos">
              <option value="moltres">
              <option value="dratini">
              <option value="dragonair">
              <option value="dragonite">
              <option value="mewtwo">
              <option value="mew">
              <option value="chikorita">
              <option value="bayleef">
              <option value="meganium">
              <option value="cyndaquil">
              <option value="quilava">
              <option value="typhlosion">
              <option value="totodile">
              <option value="croconaw">
              <option value="feraligatr">
              <option value="sentret">
              <option value="furret">
              <option value="hoothoot">
              <option value="noctowl">
              <option value="ledyba">
              <option value="ledian">
              <option value="spinarak">
              <option value="ariados">
              <option value="crobat">
              <option value="chinchou">
              <option value="lanturn">
              <option value="pichu">
              <option value="cleffa">
              <option value="igglybuff">
              <option value="togepi">
              <option value="togetic">
              <option value="natu">
              <option value="xatu">
              <option value="mareep">
              <option value="flaaffy">
              <option value="ampharos">
              <option value="bellossom">
              <option value="marill">
              <option value="azumarill">
              <option value="sudowoodo">
              <option value="politoed">
              <option value="hoppip">
              <option value="skiploom">
              <option value="jumpluff">
              <option value="aipom">
              <option value="sunkern">
              <option value="sunflora">
              <option value="yanma">
              <option value="wooper">
              <option value="quagsire">
              <option value="espeon">
              <option value="umbreon">
              <option value="murkrow">
              <option value="slowking">
              <option value="misdreavus">
              <option value="unown">
              <option value="wobbuffet">
              <option value="girafarig">
              <option value="pineco">
              <option value="forretress">
              <option value="dunsparce">
              <option value="gligar">
              <option value="steelix">
              <option value="snubbull">
              <option value="granbull">
              <option value="qwilfish">
              <option value="scizor">
              <option value="shuckle">
              <option value="heracross">
              <option value="sneasel">
              <option value="teddiursa">
              <option value="ursaring">
              <option value="slugma">
              <option value="magcargo">
              <option value="swinub">
              <option value="piloswine">
              <option value="corsola">
              <option value="remoraid">
              <option value="octillery">
              <option value="delibird">
              <option value="mantine">
              <option value="skarmory">
              <option value="houndour">
              <option value="houndoom">
              <option value="kingdra">
              <option value="phanpy">
              <option value="donphan">
              <option value="porygon2">
              <option value="stantler">
              <option value="smeargle">
              <option value="tyrogue">
              <option value="hitmontop">
              <option value="smoochum">
              <option value="elekid">
              <option value="magby">
              <option value="miltank">
              <option value="blissey">
              <option value="raikou">
              <option value="entei">
              <option value="suicune">
              <option value="larvitar">
              <option value="pupitar">
              <option value="tyranitar">
              <option value="lugia">
              <option value="ho-oh">
              <option value="celebi">
                </datalist>
            </div>
          </form><br>
          <input type="button" id="busca" value="Search"><br><br><br>
          </div>
          <div class="boxFilters3">
          <p>GENERATION</p>${
  // nos traemos la lista de  generacion puede actualizarse se trael el nombre con el num de gen.
  uniqueArrayGen.map(allgen => `<input type="checkbox" id="${allgen.name}" name="${allgen.name}" value="type"> ${allgen.name[0].toUpperCase() + allgen.name.slice(1)} (${allgen.num[0].toUpperCase() + allgen.num.slice(1)})<br>`).join('')
}<br><p>TYPE</p><br>${
  // nos traemos la lista de ls tipos
  uniqueArrayType.map(alltype => `<input type="checkbox" id="${alltype}" name="${alltype}" value="type"> ${alltype[0].toUpperCase() + alltype.slice(1)}<br>`).join('')
}<br><input type="button" id="filtro" value="Filtrar"><br>`
+ '<br><input type="button" id="borrar" value="Quitar filtros"> </div>';
};
// creacion de tarjeta con info de pokemon
export const pokeCard = () => {
  document.getElementById('allpoke').innerHTML = pokeArray.map(allpoke => `
    <div class="card" id="p${allpoke.num}"><div class="imaconteiner"> <img class=ima src="${allpoke.img}" width="130px" > </div>
    <h2 class="info">${allpoke.name[0].toUpperCase() + allpoke.name.slice(1)}</h2> 
    <h3 class="info">Nº: ${allpoke.num}</h3>
    <h3 class="info">Generation: ${allpoke.generation.name}</h3>
    <h4 class="info">Weight: ${allpoke.size.weight}</h4>
    <h4 class="info">Height: ${allpoke.size.height}</h4>
    <h4 class="info">Type: ${allpoke.type}</h4></div>`).join('');
};
// <h4 class="info">Sobre: ${allpoke.about}</h4>

// funcion para boton ordenar deleteFilters las demas  parametros seleccionados
export const nameOrder = () => {
  pokeArray = orderAz(data.pokemon);
  pokeCard();
  // eslint-disable-next-line array-callback-return
  uniqueArrayType.map((type) => {
    document.getElementById(type).checked = false;
  });
  // eslint-disable-next-line array-callback-return
  uniqueArrayGen.map((gen) => {
    document.getElementById(gen.name).checked = false;
  });
  // eslint-disable-next-line no-undef
  myInput.value = '';
};
// eslint-disable-next-line no-console
// console.log(pokeArray);
// funcion para  ordenar  por numero  y borrar las demas selecciones
export const numOrder = () => {
  pokeArray = orderNum(data.pokemon);
  pokeCard();
  // eslint-disable-next-line array-callback-return
  uniqueArrayType.map((type) => {
    document.getElementById(type).checked = false;
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
  uniqueArrayType.map((type) => {
    document.getElementById(type).checked = false;
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
    uniqueArrayType.map((type) => {
      document.getElementById(type).checked = false;
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
    .filter(type => document.getElementById(type).checked === true)
    .map(type => type)
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
        pokem.type.map((type2) => {
          // eslint-disable-next-line array-callback-return
          uniqueArrayType.map((type) => {
            if (document.getElementById(type).checked === true) {
              if (type === type2) {
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

// console.log(typeof (pokeSearch));
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


/*
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
/* export const nameSortFunction = (a, b) => {
  if (a.name === b.name) {
    return 0;
  }
  return (a.name < b.name) ? -1 : 1;
}; */
/* export const numSortFunction = (a, b) => {
  if (a.num === b.num) {
    return 0;
  }
  return (a.num < b.num) ? -1 : 1;
}; */
