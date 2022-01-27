import dec2any from './dec2any';

// 10 -> q2
test('test1', () => {
  const q2 = 2;
  const num = 10;

  expect(dec2any(num, q2)).toBe('1010');
});

it('test2', () => {
  const q2 = 3;
  const num = 16; // 100 + 10 + 10 + 1 = 121

  // num == q2 -> 10
  // num == q2^2 ->100
  //           3 -> 1000

  expect(dec2any(num, q2)).toBe('121');
});

it('test3', () => {
  const q2 = 3;
  const num = 54; // 1000 + 1000

  // num == q2 -> 10
  // num == q2^2 ->100
  //           3 -> 1000

  expect(dec2any(num, q2)).toBe('2000');
});

it('test4', () => {
  const q2 = 3;
  const num = 154; // 10000 + 1000 + 1000 + 100 + 100 + 1

  // num == q2 -> 10
  // num == q2^2 ->100
  //           3 -> 1000

  expect(dec2any(num, q2)).toBe(
    '12201'
  );
});
