
import { nameSortFunction } from '../src/data.js';

// ejemplo de informacion

const dataOrderName = [
  { name: 'venusaur' },
  { name: 'bulbasaur' },
  { name: 'natu' },
  { name: 'ivysaur' },
  { name: 'charmander' },
];
const dataorderAz = [
  { name: 'bulbasaur' },
  { name: 'charmander' },
  { name: 'ivysaur' },
  { name: 'natu' },
  { name: 'venusaur' },
];


describe('nameSortFunction', () => {
  it('is a function', () => {
    expect(typeof nameSortFunction).toBe('function');
  });

  /* it('return information names arranged alphabetically', () => {
    // eslint-disable-next-line jest/valid-expect
    expect(nameSortFunction(dataOrderName).toequal(dataorderAz));
  });
});*/

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
// funciones de prubea
/* describe('allPoke', () => {
  it('is a function', () => {
    expect(typeof allPoke).toBe('function');
  });

  it('returns full pokemon data', () => {
    expect(allPoke(dataInfoTest)).toEqual(dataInfoTestReturn);
  });
}); */
/* describe('orderZa', () => {
  it('is a function', () => {
    expect(typeof orderZa).toBe('function');
  });

  it('return information names arranged alphabetically', () => {
    expect(orderZa(dataOrderName)).toEqual(dataorderZa);
  });
}); */
