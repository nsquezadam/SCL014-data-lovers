import { allPoke, orderAz, orderZa } from '../src/data';

// ejemplo de informacion
const dataInfoTest = [{
  num: '010',
  name: 'caterpie',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  about: 'Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//010.png',
  size: {
    height: '0.30 m',
    weight: '2.9 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'bug',
  ],
  encounter: {
    'base-flee-rate': '0.2',
    'base-capture-rate': '0.5',
  },
  'spawn-chance': '3.032',
  stats: {
    'base-attack': '55',
    'base-defense': '55',
    'base-stamina': '128',
    'max-cp': '437',
    'max-hp': '113',
  },
  resistant: [
    'grass',
    'fighting',
    'ground',
  ],
  weaknesses: [
    'fire',
    'flying',
    'rock',
  ],
  'quick-move': [
    {
      name: 'bug bite',
      type: 'bug',
      'base-damage': '5',
      energy: '6',
      'move-duration-seg': '0.5',
    },
    {
      name: 'tackle',
      type: 'normal',
      'base-damage': '5',
      energy: '5',
      'move-duration-seg': '0.5',
    },
  ],
  'special-attack': [
    {
      name: 'struggle',
      type: 'normal',
      'base-damage': '35',
      energy: '-33',
      'move-duration-seg': '2.2',
    }],
  egg: '2 km',
  'buddy-distance-km': '1',
  evolution: {
    candy: 'caterpie candy',
    'next-evolution': [{
      num: '011',
      name: 'metapod',
      'candy-cost': '12',
      'next-evolution': [{
        num: '012',
        name: 'butterfree',
        'candy-cost': '50',
      }],
    }],
  },
},
{
  num: '011',
  name: 'metapod',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  about: "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//011.png',
  size: {
    height: '0.71 m',
    weight: '9.9 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'bug',
  ],
  encounter: {
    'base-flee-rate': '0.09',
    'base-capture-rate': '0.25',
  },
  'spawn-chance': '0.187',
  stats: {
    'base-attack': '45',
    'base-defense': '80',
    'base-stamina': '137',
    'max-cp': '450',
    'max-hp': '120',
  },
  resistant: [
    'grass',
    'fighting',
    'ground',
  ],
  weaknesses: [
    'fire',
    'flying',
    'rock',
  ],
  'quick-move': [
    {
      name: 'bug bite',
      type: 'bug',
      'base-damage': '5',
      energy: '6',
      'move-duration-seg': '0.5',
    },
    {
      name: 'tackle',
      type: 'normal',
      'base-damage': '5',
      energy: '5',
      'move-duration-seg': '0.5',
    },
  ],
  'special-attack': [
    {
      name: 'struggle',
      type: 'normal',
      'base-damage': '35',
      energy: '-33',
      'move-duration-seg': '2.2',
    }],
  egg: 'not in eggs',
  'buddy-distance-km': '1',
  evolution: {
    candy: 'caterpie candy',
    'next-evolution': [{
      num: '012',
      name: 'butterfree',
      'candy-cost': '50',
    }],
    'prev-evolution': [{
      num: '010',
      name: 'caterpie',
      'candy-cost': '12',
    }],
  },
},
{

  num: '226',
  name: 'mantine',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: "On sunny days, schools of Mantine can be seen elegantly leaping over the sea's waves. This Pokémon is not bothered by the Remoraid that hitches rides.",
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//226.png',
  size: {
    height: '2.11 m',
    weight: '220.0 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'water',
    'flying',
  ],
  encounter: {
    'base-flee-rate': '0.07',
    'base-capture-rate': '0.3',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '148',
    'base-defense': '226',
    'base-stamina': '163',
    'max-cp': '2108',
    'max-hp': '140',
  },
  resistant: [
    'fire',
    'water',
    'fighting',
    'ground',
    'bug',
  ],
  weaknesses: [
    'electric',
    'rock',
  ],
  'quick-move': [
    {
      name: 'bubble',
      type: 'water',
      'base-damage': '12',
      energy: '14',
      'move-duration-seg': '1.2',
    },
    {
      name: 'wing attack',
      type: 'flying',
      'base-damage': '8',
      energy: '9',
      'move-duration-seg': '0.8',
    },
  ],
  'special-attack': [
    {
      name: 'water pulse',
      type: 'water',
      'base-damage': '70',
      energy: '-50',
      'move-duration-seg': '3.2',
    },
    {
      name: 'ice beam',
      type: 'ice',
      'base-damage': '90',
      energy: '-50',
      'move-duration-seg': '3.3',
    },
    {
      name: 'aerial ace',
      type: 'flying',
      'base-damage': '55',
      energy: '-33',
      'move-duration-seg': '2.4',
    },
  ],
  egg: 'not in eggs',
  'buddy-distance-km': '5',
  evolution: {
    candy: 'mantine candy',
    'prev-evolution': [{
      num: '458',
      name: 'mantyke',
      'candy-cost': '50',
    }],
  },
},
{
  num: '227',
  name: 'skarmory',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: 'Skarmory is entirely encased in hard, protective armor. This Pokémon flies at close to 190 mph. It slashes foes with its wings that possess swordlike cutting edges.',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//227.png',
  size: {
    height: '1.70 m',
    weight: '50.5 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'steel',
    'flying',
  ],
  encounter: {
    'base-flee-rate': '0.09',
    'base-capture-rate': '0.2',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '148',
    'base-defense': '226',
    'base-stamina': '163',
    'max-cp': '2108',
    'max-hp': '140',
  },
  resistant: [
    'normal',
    'grass',
    'poison',
    'flying',
    'psychic',
  ],
  weaknesses: [
    'fire',
    'electric',
  ],
  'quick-move': [
    {
      name: 'steel wing',
      type: 'steel',
      'base-damage': '11',
      energy: '6',
      'move-duration-seg': '0.8',
    },
    {
      name: 'air slash',
      type: 'flying',
      'base-damage': '14',
      energy: '10',
      'move-duration-seg': '1.2',
    },
  ],
  'special-attack': [
    {
      name: 'brave bird',
      type: 'flying',
      'base-damage': '90',
      energy: '-100',
      'move-duration-seg': '2',
    },
    {
      name: 'sky attack',
      type: 'flying',
      'base-damage': '70',
      energy: '-50',
      'move-duration-seg': '2',
    },
    {
      name: 'flash cannon',
      type: 'steel',
      'base-damage': '100',
      energy: '-100',
      'move-duration-seg': '2.7',
    },
  ],
  egg: '5 km',
  'buddy-distance-km': '5',
  evolution: {
    candy: 'skarmory candy',
  },
},
{
  num: '228',
  name: 'houndour',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: "Houndour hunt as a coordinated pack. They communicate with each other using a variety of cries to corner their prey. This Pokémon's remarkable teamwork is unparalleled.",
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//228.png',
  size: {
    height: '0.61 m',
    weight: '10.8 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'dark',
    'fire',
  ],
  encounter: {
    'base-flee-rate': '0.1',
    'base-capture-rate': '0.4',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '152',
    'base-defense': '83',
    'base-stamina': '128',
    'max-cp': '1234',
    'max-hp': '113',
  },
  resistant: [
    'fire',
    'grass',
    'ice',
    'psychic',
    'ghost',
  ],
  weaknesses: [
    'water',
    'fighting',
    'ground',
    'rock',
  ],
  'quick-move': [
    {
      name: 'feint attack',
      type: 'dark',
      'base-damage': '10',
      energy: '9',
      'move-duration-seg': '0.9',
    },
    {
      name: 'ember',
      type: 'fire',
      'base-damage': '10',
      energy: '10',
      'move-duration-seg': '1',
    },
  ],
  'special-attack': [
    {
      name: 'crunch',
      type: 'dark',
      'base-damage': '70',
      energy: '-33',
      'move-duration-seg': '3.2',
    },
    {
      name: 'flamethrower',
      type: 'fire',
      'base-damage': '70',
      energy: '-50',
      'move-duration-seg': '2.2',
    },
    {
      name: 'dark pulse',
      type: 'dark',
      'base-damage': '80',
      energy: '-50',
      'move-duration-seg': '3',
    },
  ],
  egg: '5 km',
  'buddy-distance-km': '3',
  evolution: {
    candy: 'houndour candy',
    'next-evolution': [{
      num: '229',
      name: 'houndoom',
      'candy-cost': '50',
    }],
  },
},
{
  num: '229',
  name: 'houndoom',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: 'In a Houndoom pack, the one with its horns raked sharply toward the back serves a leadership role. These Pokémon choose their leader by fighting among themselves.',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//229.png',
  size: {
    height: '1.40 m',
    weight: '35.0 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'dark',
    'fire',
  ],
  encounter: {
    'base-flee-rate': '0.06',
    'base-capture-rate': '0.15',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '224',
    'base-defense': '144',
    'base-stamina': '181',
    'max-cp': '2635',
    'max-hp': '154',
  },
  resistant: [
    'fire',
    'grass',
    'ice',
    'psychic',
    'ghost',
  ],
  weaknesses: [
    'water',
    'fighting',
    'ground',
    'rock',
  ],
  'quick-move': [
    {
      name: 'snarl',
      type: 'dark',
      'base-damage': '12',
      energy: '12',
      'move-duration-seg': '1.1',
    },
    {
      name: 'fire fang',
      type: 'fire',
      'base-damage': '11',
      energy: '8',
      'move-duration-seg': '0.9',
    },
  ],
  'special-attack': [
    {
      name: 'crunch',
      type: 'dark',
      'base-damage': '70',
      energy: '-33',
      'move-duration-seg': '3.2',
    },
    {
      name: 'fire blast',
      type: 'fire',
      'base-damage': '140',
      energy: '-100',
      'move-duration-seg': '4.2',
    },
    {
      name: 'foul play',
      type: 'dark',
      'base-damage': '70',
      energy: '-50',
      'move-duration-seg': '2',
    },
  ],
  egg: 'not in eggs',
  'buddy-distance-km': '3',
  evolution: {
    candy: 'houndour candy',
    'prev-evolution': [{
      num: '228',
      name: 'houndour',
      'candy-cost': '50',
    }],
  },
},
{
  num: '230',
  name: 'kingdra',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: 'Kingdra lives at extreme ocean depths that are otherwise uninhabited. It has long been believed that the yawning of this Pokémon creates spiraling ocean currents.',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//230.png',
  size: {
    height: '1.80 m',
    weight: '152.0 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'water',
    'dragon',
  ],
  encounter: {
    'base-flee-rate': '0.05',
    'base-capture-rate': '0.1',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '194',
    'base-defense': '194',
    'base-stamina': '181',
    'max-cp': '2641',
    'max-hp': '154',
  },
  resistant: [
    'fire',
    'water',
    'steel',
  ],
  weaknesses: [
    'dragon',
    'fairy',
  ],
  'quick-move': [
    {
      name: 'water gun',
      type: 'water',
      'base-damage': '5',
      energy: '5',
      'move-duration-seg': '0.5',
    },
    {
      name: 'dragon breath',
      type: 'dragon',
      'base-damage': '6',
      energy: '4',
      'move-duration-seg': '0.5',
    },
  ],
  'special-attack': [
    {
      name: 'hydro pump',
      type: 'water',
      'base-damage': '130',
      energy: '-100',
      'move-duration-seg': '3.3',
    },
    {
      name: 'blizzard',
      type: 'ice',
      'base-damage': '130',
      energy: '-100',
      'move-duration-seg': '3.1',
    },
    {
      name: 'outrage',
      type: 'dragon',
      'base-damage': '110',
      energy: '-50',
      'move-duration-seg': '3.9',
    },
  ],
  egg: 'not in eggs',
  'buddy-distance-km': '3',
  evolution: {
    candy: 'horsea candy',
    'prev-evolution': [{
      num: '117',
      name: 'seadra',
      'candy-cost': '100',
      'evolution-item': {
        name: 'dragon scale',
        img: 'https://pokemon.gameinfo.io/images/item/thumbs/200/dragon-scale.png',
      },
      'prev-evolution': [{
        num: '116',
        name: 'horsea',
        'candy-cost': '25',
      }],
    }],
  },
},
];

const dataInfoTestReturn = [{
  num: '010',
  name: 'caterpie',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  about: 'Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//010.png',
  size: {
    height: '0.30 m',
    weight: '2.9 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'bug',
  ],
  encounter: {
    'base-flee-rate': '0.2',
    'base-capture-rate': '0.5',
  },
  'spawn-chance': '3.032',
  stats: {
    'base-attack': '55',
    'base-defense': '55',
    'base-stamina': '128',
    'max-cp': '437',
    'max-hp': '113',
  },
  resistant: [
    'grass',
    'fighting',
    'ground',
  ],
  weaknesses: [
    'fire',
    'flying',
    'rock',
  ],
  'quick-move': [
    {
      name: 'bug bite',
      type: 'bug',
      'base-damage': '5',
      energy: '6',
      'move-duration-seg': '0.5',
    },
    {
      name: 'tackle',
      type: 'normal',
      'base-damage': '5',
      energy: '5',
      'move-duration-seg': '0.5',
    },
  ],
  'special-attack': [
    {
      name: 'struggle',
      type: 'normal',
      'base-damage': '35',
      energy: '-33',
      'move-duration-seg': '2.2',
    }],
  egg: '2 km',
  'buddy-distance-km': '1',
  evolution: {
    candy: 'caterpie candy',
    'next-evolution': [{
      num: '011',
      name: 'metapod',
      'candy-cost': '12',
      'next-evolution': [{
        num: '012',
        name: 'butterfree',
        'candy-cost': '50',
      }],
    }],
  },
},
{
  num: '011',
  name: 'metapod',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  about: "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//011.png',
  size: {
    height: '0.71 m',
    weight: '9.9 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'bug',
  ],
  encounter: {
    'base-flee-rate': '0.09',
    'base-capture-rate': '0.25',
  },
  'spawn-chance': '0.187',
  stats: {
    'base-attack': '45',
    'base-defense': '80',
    'base-stamina': '137',
    'max-cp': '450',
    'max-hp': '120',
  },
  resistant: [
    'grass',
    'fighting',
    'ground',
  ],
  weaknesses: [
    'fire',
    'flying',
    'rock',
  ],
  'quick-move': [
    {
      name: 'bug bite',
      type: 'bug',
      'base-damage': '5',
      energy: '6',
      'move-duration-seg': '0.5',
    },
    {
      name: 'tackle',
      type: 'normal',
      'base-damage': '5',
      energy: '5',
      'move-duration-seg': '0.5',
    },
  ],
  'special-attack': [
    {
      name: 'struggle',
      type: 'normal',
      'base-damage': '35',
      energy: '-33',
      'move-duration-seg': '2.2',
    }],
  egg: 'not in eggs',
  'buddy-distance-km': '1',
  evolution: {
    candy: 'caterpie candy',
    'next-evolution': [{
      num: '012',
      name: 'butterfree',
      'candy-cost': '50',
    }],
    'prev-evolution': [{
      num: '010',
      name: 'caterpie',
      'candy-cost': '12',
    }],
  },
},
{

  num: '226',
  name: 'mantine',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: "On sunny days, schools of Mantine can be seen elegantly leaping over the sea's waves. This Pokémon is not bothered by the Remoraid that hitches rides.",
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//226.png',
  size: {
    height: '2.11 m',
    weight: '220.0 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'water',
    'flying',
  ],
  encounter: {
    'base-flee-rate': '0.07',
    'base-capture-rate': '0.3',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '148',
    'base-defense': '226',
    'base-stamina': '163',
    'max-cp': '2108',
    'max-hp': '140',
  },
  resistant: [
    'fire',
    'water',
    'fighting',
    'ground',
    'bug',
  ],
  weaknesses: [
    'electric',
    'rock',
  ],
  'quick-move': [
    {
      name: 'bubble',
      type: 'water',
      'base-damage': '12',
      energy: '14',
      'move-duration-seg': '1.2',
    },
    {
      name: 'wing attack',
      type: 'flying',
      'base-damage': '8',
      energy: '9',
      'move-duration-seg': '0.8',
    },
  ],
  'special-attack': [
    {
      name: 'water pulse',
      type: 'water',
      'base-damage': '70',
      energy: '-50',
      'move-duration-seg': '3.2',
    },
    {
      name: 'ice beam',
      type: 'ice',
      'base-damage': '90',
      energy: '-50',
      'move-duration-seg': '3.3',
    },
    {
      name: 'aerial ace',
      type: 'flying',
      'base-damage': '55',
      energy: '-33',
      'move-duration-seg': '2.4',
    },
  ],
  egg: 'not in eggs',
  'buddy-distance-km': '5',
  evolution: {
    candy: 'mantine candy',
    'prev-evolution': [{
      num: '458',
      name: 'mantyke',
      'candy-cost': '50',
    }],
  },
},
{
  num: '227',
  name: 'skarmory',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: 'Skarmory is entirely encased in hard, protective armor. This Pokémon flies at close to 190 mph. It slashes foes with its wings that possess swordlike cutting edges.',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//227.png',
  size: {
    height: '1.70 m',
    weight: '50.5 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'steel',
    'flying',
  ],
  encounter: {
    'base-flee-rate': '0.09',
    'base-capture-rate': '0.2',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '148',
    'base-defense': '226',
    'base-stamina': '163',
    'max-cp': '2108',
    'max-hp': '140',
  },
  resistant: [
    'normal',
    'grass',
    'poison',
    'flying',
    'psychic',
  ],
  weaknesses: [
    'fire',
    'electric',
  ],
  'quick-move': [
    {
      name: 'steel wing',
      type: 'steel',
      'base-damage': '11',
      energy: '6',
      'move-duration-seg': '0.8',
    },
    {
      name: 'air slash',
      type: 'flying',
      'base-damage': '14',
      energy: '10',
      'move-duration-seg': '1.2',
    },
  ],
  'special-attack': [
    {
      name: 'brave bird',
      type: 'flying',
      'base-damage': '90',
      energy: '-100',
      'move-duration-seg': '2',
    },
    {
      name: 'sky attack',
      type: 'flying',
      'base-damage': '70',
      energy: '-50',
      'move-duration-seg': '2',
    },
    {
      name: 'flash cannon',
      type: 'steel',
      'base-damage': '100',
      energy: '-100',
      'move-duration-seg': '2.7',
    },
  ],
  egg: '5 km',
  'buddy-distance-km': '5',
  evolution: {
    candy: 'skarmory candy',
  },
},
{
  num: '228',
  name: 'houndour',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: "Houndour hunt as a coordinated pack. They communicate with each other using a variety of cries to corner their prey. This Pokémon's remarkable teamwork is unparalleled.",
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//228.png',
  size: {
    height: '0.61 m',
    weight: '10.8 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'dark',
    'fire',
  ],
  encounter: {
    'base-flee-rate': '0.1',
    'base-capture-rate': '0.4',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '152',
    'base-defense': '83',
    'base-stamina': '128',
    'max-cp': '1234',
    'max-hp': '113',
  },
  resistant: [
    'fire',
    'grass',
    'ice',
    'psychic',
    'ghost',
  ],
  weaknesses: [
    'water',
    'fighting',
    'ground',
    'rock',
  ],
  'quick-move': [
    {
      name: 'feint attack',
      type: 'dark',
      'base-damage': '10',
      energy: '9',
      'move-duration-seg': '0.9',
    },
    {
      name: 'ember',
      type: 'fire',
      'base-damage': '10',
      energy: '10',
      'move-duration-seg': '1',
    },
  ],
  'special-attack': [
    {
      name: 'crunch',
      type: 'dark',
      'base-damage': '70',
      energy: '-33',
      'move-duration-seg': '3.2',
    },
    {
      name: 'flamethrower',
      type: 'fire',
      'base-damage': '70',
      energy: '-50',
      'move-duration-seg': '2.2',
    },
    {
      name: 'dark pulse',
      type: 'dark',
      'base-damage': '80',
      energy: '-50',
      'move-duration-seg': '3',
    },
  ],
  egg: '5 km',
  'buddy-distance-km': '3',
  evolution: {
    candy: 'houndour candy',
    'next-evolution': [{
      num: '229',
      name: 'houndoom',
      'candy-cost': '50',
    }],
  },
},
{
  num: '229',
  name: 'houndoom',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: 'In a Houndoom pack, the one with its horns raked sharply toward the back serves a leadership role. These Pokémon choose their leader by fighting among themselves.',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//229.png',
  size: {
    height: '1.40 m',
    weight: '35.0 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'dark',
    'fire',
  ],
  encounter: {
    'base-flee-rate': '0.06',
    'base-capture-rate': '0.15',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '224',
    'base-defense': '144',
    'base-stamina': '181',
    'max-cp': '2635',
    'max-hp': '154',
  },
  resistant: [
    'fire',
    'grass',
    'ice',
    'psychic',
    'ghost',
  ],
  weaknesses: [
    'water',
    'fighting',
    'ground',
    'rock',
  ],
  'quick-move': [
    {
      name: 'snarl',
      type: 'dark',
      'base-damage': '12',
      energy: '12',
      'move-duration-seg': '1.1',
    },
    {
      name: 'fire fang',
      type: 'fire',
      'base-damage': '11',
      energy: '8',
      'move-duration-seg': '0.9',
    },
  ],
  'special-attack': [
    {
      name: 'crunch',
      type: 'dark',
      'base-damage': '70',
      energy: '-33',
      'move-duration-seg': '3.2',
    },
    {
      name: 'fire blast',
      type: 'fire',
      'base-damage': '140',
      energy: '-100',
      'move-duration-seg': '4.2',
    },
    {
      name: 'foul play',
      type: 'dark',
      'base-damage': '70',
      energy: '-50',
      'move-duration-seg': '2',
    },
  ],
  egg: 'not in eggs',
  'buddy-distance-km': '3',
  evolution: {
    candy: 'houndour candy',
    'prev-evolution': [{
      num: '228',
      name: 'houndour',
      'candy-cost': '50',
    }],
  },
},
{
  num: '230',
  name: 'kingdra',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: 'Kingdra lives at extreme ocean depths that are otherwise uninhabited. It has long been believed that the yawning of this Pokémon creates spiraling ocean currents.',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//230.png',
  size: {
    height: '1.80 m',
    weight: '152.0 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'water',
    'dragon',
  ],
  encounter: {
    'base-flee-rate': '0.05',
    'base-capture-rate': '0.1',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '194',
    'base-defense': '194',
    'base-stamina': '181',
    'max-cp': '2641',
    'max-hp': '154',
  },
  resistant: [
    'fire',
    'water',
    'steel',
  ],
  weaknesses: [
    'dragon',
    'fairy',
  ],
  'quick-move': [
    {
      name: 'water gun',
      type: 'water',
      'base-damage': '5',
      energy: '5',
      'move-duration-seg': '0.5',
    },
    {
      name: 'dragon breath',
      type: 'dragon',
      'base-damage': '6',
      energy: '4',
      'move-duration-seg': '0.5',
    },
  ],
  'special-attack': [
    {
      name: 'hydro pump',
      type: 'water',
      'base-damage': '130',
      energy: '-100',
      'move-duration-seg': '3.3',
    },
    {
      name: 'blizzard',
      type: 'ice',
      'base-damage': '130',
      energy: '-100',
      'move-duration-seg': '3.1',
    },
    {
      name: 'outrage',
      type: 'dragon',
      'base-damage': '110',
      energy: '-50',
      'move-duration-seg': '3.9',
    },
  ],
  egg: 'not in eggs',
  'buddy-distance-km': '3',
  evolution: {
    candy: 'horsea candy',
    'prev-evolution': [{
      num: '117',
      name: 'seadra',
      'candy-cost': '100',
      'evolution-item': {
        name: 'dragon scale',
        img: 'https://pokemon.gameinfo.io/images/item/thumbs/200/dragon-scale.png',
      },
      'prev-evolution': [{
        num: '116',
        name: 'horsea',
        'candy-cost': '25',
      }],
    }],
  },
},
];

const dataOrderAz = [{
  num: '010',
  name: 'caterpie',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  about: 'Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//010.png',
  size: {
    height: '0.30 m',
    weight: '2.9 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'bug',
  ],
  encounter: {
    'base-flee-rate': '0.2',
    'base-capture-rate': '0.5',
  },
  'spawn-chance': '3.032',
  stats: {
    'base-attack': '55',
    'base-defense': '55',
    'base-stamina': '128',
    'max-cp': '437',
    'max-hp': '113',
  },
  resistant: [
    'grass',
    'fighting',
    'ground',
  ],
  weaknesses: [
    'fire',
    'flying',
    'rock',
  ],
  'quick-move': [
    {
      name: 'bug bite',
      type: 'bug',
      'base-damage': '5',
      energy: '6',
      'move-duration-seg': '0.5',
    },
    {
      name: 'tackle',
      type: 'normal',
      'base-damage': '5',
      energy: '5',
      'move-duration-seg': '0.5',
    },
  ],
  'special-attack': [
    {
      name: 'struggle',
      type: 'normal',
      'base-damage': '35',
      energy: '-33',
      'move-duration-seg': '2.2',
    }],
  egg: '2 km',
  'buddy-distance-km': '1',
  evolution: {
    candy: 'caterpie candy',
    'next-evolution': [{
      num: '011',
      name: 'metapod',
      'candy-cost': '12',
      'next-evolution': [{
        num: '012',
        name: 'butterfree',
        'candy-cost': '50',
      }],
    }],
  },
},
{
  num: '229',
  name: 'houndoom',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: 'In a Houndoom pack, the one with its horns raked sharply toward the back serves a leadership role. These Pokémon choose their leader by fighting among themselves.',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//229.png',
  size: {
    height: '1.40 m',
    weight: '35.0 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'dark',
    'fire',
  ],
  encounter: {
    'base-flee-rate': '0.06',
    'base-capture-rate': '0.15',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '224',
    'base-defense': '144',
    'base-stamina': '181',
    'max-cp': '2635',
    'max-hp': '154',
  },
  resistant: [
    'fire',
    'grass',
    'ice',
    'psychic',
    'ghost',
  ],
  weaknesses: [
    'water',
    'fighting',
    'ground',
    'rock',
  ],
  'quick-move': [
    {
      name: 'snarl',
      type: 'dark',
      'base-damage': '12',
      energy: '12',
      'move-duration-seg': '1.1',
    },
    {
      name: 'fire fang',
      type: 'fire',
      'base-damage': '11',
      energy: '8',
      'move-duration-seg': '0.9',
    },
  ],
  'special-attack': [
    {
      name: 'crunch',
      type: 'dark',
      'base-damage': '70',
      energy: '-33',
      'move-duration-seg': '3.2',
    },
    {
      name: 'fire blast',
      type: 'fire',
      'base-damage': '140',
      energy: '-100',
      'move-duration-seg': '4.2',
    },
    {
      name: 'foul play',
      type: 'dark',
      'base-damage': '70',
      energy: '-50',
      'move-duration-seg': '2',
    },
  ],
  egg: 'not in eggs',
  'buddy-distance-km': '3',
  evolution: {
    candy: 'houndour candy',
    'prev-evolution': [{
      num: '228',
      name: 'houndour',
      'candy-cost': '50',
    }],
  },
},
{
  num: '228',
  name: 'houndour',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: "Houndour hunt as a coordinated pack. They communicate with each other using a variety of cries to corner their prey. This Pokémon's remarkable teamwork is unparalleled.",
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//228.png',
  size: {
    height: '0.61 m',
    weight: '10.8 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'dark',
    'fire',
  ],
  encounter: {
    'base-flee-rate': '0.1',
    'base-capture-rate': '0.4',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '152',
    'base-defense': '83',
    'base-stamina': '128',
    'max-cp': '1234',
    'max-hp': '113',
  },
  resistant: [
    'fire',
    'grass',
    'ice',
    'psychic',
    'ghost',
  ],
  weaknesses: [
    'water',
    'fighting',
    'ground',
    'rock',
  ],
  'quick-move': [
    {
      name: 'feint attack',
      type: 'dark',
      'base-damage': '10',
      energy: '9',
      'move-duration-seg': '0.9',
    },
    {
      name: 'ember',
      type: 'fire',
      'base-damage': '10',
      energy: '10',
      'move-duration-seg': '1',
    },
  ],
  'special-attack': [
    {
      name: 'crunch',
      type: 'dark',
      'base-damage': '70',
      energy: '-33',
      'move-duration-seg': '3.2',
    },
    {
      name: 'flamethrower',
      type: 'fire',
      'base-damage': '70',
      energy: '-50',
      'move-duration-seg': '2.2',
    },
    {
      name: 'dark pulse',
      type: 'dark',
      'base-damage': '80',
      energy: '-50',
      'move-duration-seg': '3',
    },
  ],
  egg: '5 km',
  'buddy-distance-km': '3',
  evolution: {
    candy: 'houndour candy',
    'next-evolution': [{
      num: '229',
      name: 'houndoom',
      'candy-cost': '50',
    }],
  },
},

{
  num: '230',
  name: 'kingdra',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: 'Kingdra lives at extreme ocean depths that are otherwise uninhabited. It has long been believed that the yawning of this Pokémon creates spiraling ocean currents.',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//230.png',
  size: {
    height: '1.80 m',
    weight: '152.0 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'water',
    'dragon',
  ],
  encounter: {
    'base-flee-rate': '0.05',
    'base-capture-rate': '0.1',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '194',
    'base-defense': '194',
    'base-stamina': '181',
    'max-cp': '2641',
    'max-hp': '154',
  },
  resistant: [
    'fire',
    'water',
    'steel',
  ],
  weaknesses: [
    'dragon',
    'fairy',
  ],
  'quick-move': [
    {
      name: 'water gun',
      type: 'water',
      'base-damage': '5',
      energy: '5',
      'move-duration-seg': '0.5',
    },
    {
      name: 'dragon breath',
      type: 'dragon',
      'base-damage': '6',
      energy: '4',
      'move-duration-seg': '0.5',
    },
  ],
  'special-attack': [
    {
      name: 'hydro pump',
      type: 'water',
      'base-damage': '130',
      energy: '-100',
      'move-duration-seg': '3.3',
    },
    {
      name: 'blizzard',
      type: 'ice',
      'base-damage': '130',
      energy: '-100',
      'move-duration-seg': '3.1',
    },
    {
      name: 'outrage',
      type: 'dragon',
      'base-damage': '110',
      energy: '-50',
      'move-duration-seg': '3.9',
    },
  ],
  egg: 'not in eggs',
  'buddy-distance-km': '3',
  evolution: {
    candy: 'horsea candy',
    'prev-evolution': [{
      num: '117',
      name: 'seadra',
      'candy-cost': '100',
      'evolution-item': {
        name: 'dragon scale',
        img: 'https://pokemon.gameinfo.io/images/item/thumbs/200/dragon-scale.png',
      },
      'prev-evolution': [{
        num: '116',
        name: 'horsea',
        'candy-cost': '25',
      }],
    }],
  },
},
{
  num: '226',
  name: 'mantine',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: "On sunny days, schools of Mantine can be seen elegantly leaping over the sea's waves. This Pokémon is not bothered by the Remoraid that hitches rides.",
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//226.png',
  size: {
    height: '2.11 m',
    weight: '220.0 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'water',
    'flying',
  ],
  encounter: {
    'base-flee-rate': '0.07',
    'base-capture-rate': '0.3',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '148',
    'base-defense': '226',
    'base-stamina': '163',
    'max-cp': '2108',
    'max-hp': '140',
  },
  resistant: [
    'fire',
    'water',
    'fighting',
    'ground',
    'bug',
  ],
  weaknesses: [
    'electric',
    'rock',
  ],
  'quick-move': [
    {
      name: 'bubble',
      type: 'water',
      'base-damage': '12',
      energy: '14',
      'move-duration-seg': '1.2',
    },
    {
      name: 'wing attack',
      type: 'flying',
      'base-damage': '8',
      energy: '9',
      'move-duration-seg': '0.8',
    },
  ],
  'special-attack': [
    {
      name: 'water pulse',
      type: 'water',
      'base-damage': '70',
      energy: '-50',
      'move-duration-seg': '3.2',
    },
    {
      name: 'ice beam',
      type: 'ice',
      'base-damage': '90',
      energy: '-50',
      'move-duration-seg': '3.3',
    },
    {
      name: 'aerial ace',
      type: 'flying',
      'base-damage': '55',
      energy: '-33',
      'move-duration-seg': '2.4',
    },
  ],
  egg: 'not in eggs',
  'buddy-distance-km': '5',
  evolution: {
    candy: 'mantine candy',
    'prev-evolution': [{
      num: '458',
      name: 'mantyke',
      'candy-cost': '50',
    }],
  },
},
{
  num: '011',
  name: 'metapod',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  about: "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//011.png',
  size: {
    height: '0.71 m',
    weight: '9.9 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'bug',
  ],
  encounter: {
    'base-flee-rate': '0.09',
    'base-capture-rate': '0.25',
  },
  'spawn-chance': '0.187',
  stats: {
    'base-attack': '45',
    'base-defense': '80',
    'base-stamina': '137',
    'max-cp': '450',
    'max-hp': '120',
  },
  resistant: [
    'grass',
    'fighting',
    'ground',
  ],
  weaknesses: [
    'fire',
    'flying',
    'rock',
  ],
  'quick-move': [
    {
      name: 'bug bite',
      type: 'bug',
      'base-damage': '5',
      energy: '6',
      'move-duration-seg': '0.5',
    },
    {
      name: 'tackle',
      type: 'normal',
      'base-damage': '5',
      energy: '5',
      'move-duration-seg': '0.5',
    },
  ],
  'special-attack': [
    {
      name: 'struggle',
      type: 'normal',
      'base-damage': '35',
      energy: '-33',
      'move-duration-seg': '2.2',
    }],
  egg: 'not in eggs',
  'buddy-distance-km': '1',
  evolution: {
    candy: 'caterpie candy',
    'next-evolution': [{
      num: '012',
      name: 'butterfree',
      'candy-cost': '50',
    }],
    'prev-evolution': [{
      num: '010',
      name: 'caterpie',
      'candy-cost': '12',
    }],
  },
},
{
  num: '227',
  name: 'skarmory',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: 'Skarmory is entirely encased in hard, protective armor. This Pokémon flies at close to 190 mph. It slashes foes with its wings that possess swordlike cutting edges.',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//227.png',
  size: {
    height: '1.70 m',
    weight: '50.5 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'steel',
    'flying',
  ],
  encounter: {
    'base-flee-rate': '0.09',
    'base-capture-rate': '0.2',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '148',
    'base-defense': '226',
    'base-stamina': '163',
    'max-cp': '2108',
    'max-hp': '140',
  },
  resistant: [
    'normal',
    'grass',
    'poison',
    'flying',
    'psychic',
  ],
  weaknesses: [
    'fire',
    'electric',
  ],
  'quick-move': [
    {
      name: 'steel wing',
      type: 'steel',
      'base-damage': '11',
      energy: '6',
      'move-duration-seg': '0.8',
    },
    {
      name: 'air slash',
      type: 'flying',
      'base-damage': '14',
      energy: '10',
      'move-duration-seg': '1.2',
    },
  ],
  'special-attack': [
    {
      name: 'brave bird',
      type: 'flying',
      'base-damage': '90',
      energy: '-100',
      'move-duration-seg': '2',
    },
    {
      name: 'sky attack',
      type: 'flying',
      'base-damage': '70',
      energy: '-50',
      'move-duration-seg': '2',
    },
    {
      name: 'flash cannon',
      type: 'steel',
      'base-damage': '100',
      energy: '-100',
      'move-duration-seg': '2.7',
    },
  ],
  egg: '5 km',
  'buddy-distance-km': '5',
  evolution: {
    candy: 'skarmory candy',
  },
},

];
const dataOrderZa = [{

  num: '227',
  name: 'skarmory',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: 'Skarmory is entirely encased in hard, protective armor. This Pokémon flies at close to 190 mph. It slashes foes with its wings that possess swordlike cutting edges.',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//227.png',
  size: {
    height: '1.70 m',
    weight: '50.5 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'steel',
    'flying',
  ],
  encounter: {
    'base-flee-rate': '0.09',
    'base-capture-rate': '0.2',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '148',
    'base-defense': '226',
    'base-stamina': '163',
    'max-cp': '2108',
    'max-hp': '140',
  },
  resistant: [
    'normal',
    'grass',
    'poison',
    'flying',
    'psychic',
  ],
  weaknesses: [
    'fire',
    'electric',
  ],
  'quick-move': [
    {
      name: 'steel wing',
      type: 'steel',
      'base-damage': '11',
      energy: '6',
      'move-duration-seg': '0.8',
    },
    {
      name: 'air slash',
      type: 'flying',
      'base-damage': '14',
      energy: '10',
      'move-duration-seg': '1.2',
    },
  ],
  'special-attack': [
    {
      name: 'brave bird',
      type: 'flying',
      'base-damage': '90',
      energy: '-100',
      'move-duration-seg': '2',
    },
    {
      name: 'sky attack',
      type: 'flying',
      'base-damage': '70',
      energy: '-50',
      'move-duration-seg': '2',
    },
    {
      name: 'flash cannon',
      type: 'steel',
      'base-damage': '100',
      energy: '-100',
      'move-duration-seg': '2.7',
    },
  ],
  egg: '5 km',
  'buddy-distance-km': '5',
  evolution: {
    candy: 'skarmory candy',
  },
},
{
  num: '011',
  name: 'metapod',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  about: "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//011.png',
  size: {
    height: '0.71 m',
    weight: '9.9 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'bug',
  ],
  encounter: {
    'base-flee-rate': '0.09',
    'base-capture-rate': '0.25',
  },
  'spawn-chance': '0.187',
  stats: {
    'base-attack': '45',
    'base-defense': '80',
    'base-stamina': '137',
    'max-cp': '450',
    'max-hp': '120',
  },
  resistant: [
    'grass',
    'fighting',
    'ground',
  ],
  weaknesses: [
    'fire',
    'flying',
    'rock',
  ],
  'quick-move': [
    {
      name: 'bug bite',
      type: 'bug',
      'base-damage': '5',
      energy: '6',
      'move-duration-seg': '0.5',
    },
    {
      name: 'tackle',
      type: 'normal',
      'base-damage': '5',
      energy: '5',
      'move-duration-seg': '0.5',
    },
  ],
  'special-attack': [
    {
      name: 'struggle',
      type: 'normal',
      'base-damage': '35',
      energy: '-33',
      'move-duration-seg': '2.2',
    }],
  egg: 'not in eggs',
  'buddy-distance-km': '1',
  evolution: {
    candy: 'caterpie candy',
    'next-evolution': [{
      num: '012',
      name: 'butterfree',
      'candy-cost': '50',
    }],
    'prev-evolution': [{
      num: '010',
      name: 'caterpie',
      'candy-cost': '12',
    }],
  },
},
{

  num: '226',
  name: 'mantine',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: "On sunny days, schools of Mantine can be seen elegantly leaping over the sea's waves. This Pokémon is not bothered by the Remoraid that hitches rides.",
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//226.png',
  size: {
    height: '2.11 m',
    weight: '220.0 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'water',
    'flying',
  ],
  encounter: {
    'base-flee-rate': '0.07',
    'base-capture-rate': '0.3',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '148',
    'base-defense': '226',
    'base-stamina': '163',
    'max-cp': '2108',
    'max-hp': '140',
  },
  resistant: [
    'fire',
    'water',
    'fighting',
    'ground',
    'bug',
  ],
  weaknesses: [
    'electric',
    'rock',
  ],
  'quick-move': [
    {
      name: 'bubble',
      type: 'water',
      'base-damage': '12',
      energy: '14',
      'move-duration-seg': '1.2',
    },
    {
      name: 'wing attack',
      type: 'flying',
      'base-damage': '8',
      energy: '9',
      'move-duration-seg': '0.8',
    },
  ],
  'special-attack': [
    {
      name: 'water pulse',
      type: 'water',
      'base-damage': '70',
      energy: '-50',
      'move-duration-seg': '3.2',
    },
    {
      name: 'ice beam',
      type: 'ice',
      'base-damage': '90',
      energy: '-50',
      'move-duration-seg': '3.3',
    },
    {
      name: 'aerial ace',
      type: 'flying',
      'base-damage': '55',
      energy: '-33',
      'move-duration-seg': '2.4',
    },
  ],
  egg: 'not in eggs',
  'buddy-distance-km': '5',
  evolution: {
    candy: 'mantine candy',
    'prev-evolution': [{
      num: '458',
      name: 'mantyke',
      'candy-cost': '50',
    }],
  },
},

{
  num: '228',
  name: 'houndour',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: "Houndour hunt as a coordinated pack. They communicate with each other using a variety of cries to corner their prey. This Pokémon's remarkable teamwork is unparalleled.",
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//228.png',
  size: {
    height: '0.61 m',
    weight: '10.8 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'dark',
    'fire',
  ],
  encounter: {
    'base-flee-rate': '0.1',
    'base-capture-rate': '0.4',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '152',
    'base-defense': '83',
    'base-stamina': '128',
    'max-cp': '1234',
    'max-hp': '113',
  },
  resistant: [
    'fire',
    'grass',
    'ice',
    'psychic',
    'ghost',
  ],
  weaknesses: [
    'water',
    'fighting',
    'ground',
    'rock',
  ],
  'quick-move': [
    {
      name: 'feint attack',
      type: 'dark',
      'base-damage': '10',
      energy: '9',
      'move-duration-seg': '0.9',
    },
    {
      name: 'ember',
      type: 'fire',
      'base-damage': '10',
      energy: '10',
      'move-duration-seg': '1',
    },
  ],
  'special-attack': [
    {
      name: 'crunch',
      type: 'dark',
      'base-damage': '70',
      energy: '-33',
      'move-duration-seg': '3.2',
    },
    {
      name: 'flamethrower',
      type: 'fire',
      'base-damage': '70',
      energy: '-50',
      'move-duration-seg': '2.2',
    },
    {
      name: 'dark pulse',
      type: 'dark',
      'base-damage': '80',
      energy: '-50',
      'move-duration-seg': '3',
    },
  ],
  egg: '5 km',
  'buddy-distance-km': '3',
  evolution: {
    candy: 'houndour candy',
    'next-evolution': [{
      num: '229',
      name: 'houndoom',
      'candy-cost': '50',
    }],
  },
},
{
  num: '229',
  name: 'houndoom',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: 'In a Houndoom pack, the one with its horns raked sharply toward the back serves a leadership role. These Pokémon choose their leader by fighting among themselves.',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//229.png',
  size: {
    height: '1.40 m',
    weight: '35.0 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'dark',
    'fire',
  ],
  encounter: {
    'base-flee-rate': '0.06',
    'base-capture-rate': '0.15',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '224',
    'base-defense': '144',
    'base-stamina': '181',
    'max-cp': '2635',
    'max-hp': '154',
  },
  resistant: [
    'fire',
    'grass',
    'ice',
    'psychic',
    'ghost',
  ],
  weaknesses: [
    'water',
    'fighting',
    'ground',
    'rock',
  ],
  'quick-move': [
    {
      name: 'snarl',
      type: 'dark',
      'base-damage': '12',
      energy: '12',
      'move-duration-seg': '1.1',
    },
    {
      name: 'fire fang',
      type: 'fire',
      'base-damage': '11',
      energy: '8',
      'move-duration-seg': '0.9',
    },
  ],
  'special-attack': [
    {
      name: 'crunch',
      type: 'dark',
      'base-damage': '70',
      energy: '-33',
      'move-duration-seg': '3.2',
    },
    {
      name: 'fire blast',
      type: 'fire',
      'base-damage': '140',
      energy: '-100',
      'move-duration-seg': '4.2',
    },
    {
      name: 'foul play',
      type: 'dark',
      'base-damage': '70',
      energy: '-50',
      'move-duration-seg': '2',
    },
  ],
  egg: 'not in eggs',
  'buddy-distance-km': '3',
  evolution: {
    candy: 'houndour candy',
    'prev-evolution': [{
      num: '228',
      name: 'houndour',
      'candy-cost': '50',
    }],
  },
},
{
  num: '230',
  name: 'kingdra',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  about: 'Kingdra lives at extreme ocean depths that are otherwise uninhabited. It has long been believed that the yawning of this Pokémon creates spiraling ocean currents.',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//230.png',
  size: {
    height: '1.80 m',
    weight: '152.0 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'water',
    'dragon',
  ],
  encounter: {
    'base-flee-rate': '0.05',
    'base-capture-rate': '0.1',
  },
  'spawn-chance': null,
  stats: {
    'base-attack': '194',
    'base-defense': '194',
    'base-stamina': '181',
    'max-cp': '2641',
    'max-hp': '154',
  },
  resistant: [
    'fire',
    'water',
    'steel',
  ],
  weaknesses: [
    'dragon',
    'fairy',
  ],
  'quick-move': [
    {
      name: 'water gun',
      type: 'water',
      'base-damage': '5',
      energy: '5',
      'move-duration-seg': '0.5',
    },
    {
      name: 'dragon breath',
      type: 'dragon',
      'base-damage': '6',
      energy: '4',
      'move-duration-seg': '0.5',
    },
  ],
  'special-attack': [
    {
      name: 'hydro pump',
      type: 'water',
      'base-damage': '130',
      energy: '-100',
      'move-duration-seg': '3.3',
    },
    {
      name: 'blizzard',
      type: 'ice',
      'base-damage': '130',
      energy: '-100',
      'move-duration-seg': '3.1',
    },
    {
      name: 'outrage',
      type: 'dragon',
      'base-damage': '110',
      energy: '-50',
      'move-duration-seg': '3.9',
    },
  ],
  egg: 'not in eggs',
  'buddy-distance-km': '3',
  evolution: {
    candy: 'horsea candy',
    'prev-evolution': [{
      num: '117',
      name: 'seadra',
      'candy-cost': '100',
      'evolution-item': {
        name: 'dragon scale',
        img: 'https://pokemon.gameinfo.io/images/item/thumbs/200/dragon-scale.png',
      },
      'prev-evolution': [{
        num: '116',
        name: 'horsea',
        'candy-cost': '25',
      }],
    }],
  },
},
{
  num: '010',
  name: 'caterpie',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  about: 'Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full//010.png',
  size: {
    height: '0.30 m',
    weight: '2.9 kg',
  },
  'pokemon-rarity': 'normal',
  type: [
    'bug',
  ],
  encounter: {
    'base-flee-rate': '0.2',
    'base-capture-rate': '0.5',
  },
  'spawn-chance': '3.032',
  stats: {
    'base-attack': '55',
    'base-defense': '55',
    'base-stamina': '128',
    'max-cp': '437',
    'max-hp': '113',
  },
  resistant: [
    'grass',
    'fighting',
    'ground',
  ],
  weaknesses: [
    'fire',
    'flying',
    'rock',
  ],
  'quick-move': [
    {
      name: 'bug bite',
      type: 'bug',
      'base-damage': '5',
      energy: '6',
      'move-duration-seg': '0.5',
    },
    {
      name: 'tackle',
      type: 'normal',
      'base-damage': '5',
      energy: '5',
      'move-duration-seg': '0.5',
    },
  ],
  'special-attack': [
    {
      name: 'struggle',
      type: 'normal',
      'base-damage': '35',
      energy: '-33',
      'move-duration-seg': '2.2',
    }],
  egg: '2 km',
  'buddy-distance-km': '1',
  evolution: {
    candy: 'caterpie candy',
    'next-evolution': [{
      num: '011',
      name: 'metapod',
      'candy-cost': '12',
      'next-evolution': [{
        num: '012',
        name: 'butterfree',
        'candy-cost': '50',
      }],
    }],
  },
},
];

describe('allPoke', () => {
  it('is a function', () => {
    expect(typeof allPoke).toBe('function');
  });

  it('returns full pokemon data', () => {
    expect(allPoke(dataInfoTest)).toEqual(dataInfoTestReturn);
  });
});


describe('orderAz', () => {
  it('is a function', () => {
    expect(typeof orderAz).toBe('function');
  });

  it('return information names arranged alphabetically', () => {
    expect(orderAz(dataInfoTest)).toEqual(dataOrderAz);
  });
});
describe('orderZa', () => {
  it('is a function', () => {
    expect(typeof orderZa).toBe('function');
  });

  it('return information names arranged alphabetically', () => {
    expect(orderAz(dataInfoTest)).toEqual(dataOrderZa);
  });
});

/*
describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/
