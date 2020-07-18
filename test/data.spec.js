
// eslint-disable-next-line import/named
import { orderAz, orderNum, typeMarket } from '../src/data.js';
// import data from '../src/data/pokemon/pokemon';


// test funcion de  orden de datos  alfabeticamente y numericamente
describe('orderAz', () => {
  it('is a function', () => {
    expect(typeof orderAz).toBe('function');
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
    expect(orderAz(dataOrderName)).toEqual(dataOrderAz);
  });
});
describe('orderNum', () => {
  it('is a function', () => {
    expect(typeof orderNum).toBe('function');
  });
  const num1 = [{ num: 5 }, { num: 3 }, { num: 6 }, { num: 1 }, { num: 7 }, { num: 2 }, { num: 4 }];
  const num2 = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 5 }, { num: 6 }, { num: 7 }];
  it('return information  arranged number order', () => {
    expect(orderNum(num1)).toEqual(num2);
  });
});

const dataType = [{
  'name': 'natu',
  'type': [
    'psychic',
    'flying',
  ],
}];
// test   filtros

describe('typeMarked', () => {
  it('is a function', () => {
    expect(typeof typeMarked).toBe('function');
  });

  it('', () => {
    expect(typeMarked).toEqual();
  });
});


/* describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });
ç¨
    expect(anotherExample()).toBe('OMG');
  });
});
*/


/*
describe('namePok', () => {
  test('should be an object ', () => {
    expect(typeof namePok).toBe('Object');
  });
  it('this array contain pokemon natu', () => {
    expect(namePok).toContain('natu');
  });
}); */
