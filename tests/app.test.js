import { describe, it, expect, test } from '@jest/globals';
import { fullTrim, nameIsValid, getTotal } from '../src/app';

describe('nameIsValid function', () => {
  it('import without errors', () => {
    expect(nameIsValid).toBeDefined();
  });
  it('to be function', () => {
    expect(typeof nameIsValid).toBe('function');
  });
  it('check typeof', () => {
    expect(nameIsValid('anna')).toBe(true);
  });
  test.each([
    ['Anna', false],
    ['a', false],
    ['anna2', false],
    ['an', true],
    [123, false],
    [null, false],
    ['an na', false],
  ])('works for %s', (name, expectedResult) => {
    expect(nameIsValid(name)).toBe(expectedResult);
  });
});

describe('fullTrim function', () => {
  it('import without errors', () => {
    expect(fullTrim).toBeDefined();
  });
  it('to be fuction', () => {
    expect(typeof fullTrim).toBe('function');
  });
  it('clearing spaces', () => {
    expect(fullTrim('Hello World')).toBe('HelloWorld');
  });
  it('clearing \b and \n', () => {
    expect(fullTrim('a\tb\nc')).toBe('abc');
  });
});

describe('getTotal function', () => {
  it('import without errors', () => {
    expect(getTotal).toBeDefined();
  });

  it('calculate without discount', () => {
    expect(getTotal([{ price: 10, quantity: 2 }])).toBe(20);
  });

  it('10% discount', () => {
    expect(getTotal([{ price: 100, quantity: 1 }], 10)).toBe(90);
  });

  it('invalid discount', () => {
    expect(() => getTotal([], '10')).toThrow('Скидка должна быть числом');
  });
});
