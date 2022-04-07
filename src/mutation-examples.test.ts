import { sum } from './mutation-examples';

describe('MutationExamples test suite', () => {
  it('should sum 2 numbers', () => {
    const a = 3;
    const b = 4;

    const result = sum(a, b);

    expect(result).toEqual(7);
  });
});
