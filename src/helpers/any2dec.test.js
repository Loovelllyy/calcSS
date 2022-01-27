import any2dec from './any2dec';

it('test1', () => {
  const q1 = 2;
  const num = '1001';

  expect(any2dec(num, q1)).toBe(9);
});

it('test2', () => {
  const q1 = 3;
  const num = '1001';

  expect(any2dec(num, q1)).toBe(28);
});

it('test3', () => {
  const q1 = 5;
  const num = '1243';

  expect(any2dec(num, q1)).toBe(198);
});

it('test3', () => {
  const q1 = 10;
  const num = 1243;

  expect(any2dec(num, q1)).toBe(num);
});
