import allPoke from '../src/data';

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
];
describe('allPoke', () => {
  it('is a function', () => {
    expect(typeof allPoke).toBe('function');
  });

  it('returns full pokemon data', () => {
    expect(allPoke(dataInfoTest)).toEqual(dataInfoTestReturn);
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
