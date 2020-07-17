
// eslint-disable-next-line import/named
import { nameSortFunction, namePok } from '../src/data.js';
import data from '../src/data/pokemon/pokemon';

namePok();

describe('nameSortFunction', () => {
  it('is a function', () => {
    expect(typeof nameSortFunction).toBe('function');
  });
  it('return new array names arranged alphabetically', () => {
    expect(data.pokemon.sort(nameSortFunction)).toMatch(data.pokemon[0].name = 'abra');
  });
});

/* describe('anotherExample', () => {
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
