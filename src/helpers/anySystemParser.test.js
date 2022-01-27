import anySystemParser from './anySystemParser';

it('perfect test', () => {
  const str1 = '[15]23';

  expect(
    anySystemParser(str1)
  ).toEqual([15, 2, 3]);
});

describe('instead of a number, a letter', () => {
  const strs = [
    { test: 'A[10]7', isError: false },
    { test: '10[F]', isError: true },
    { test: '[11', isError: true },
    { test: '10][', isError: true },
    { test: '1]', isError: true },
    { test: '13[24]', isError: false }
  ];
  for (const {
    test,
    isError
  } of strs) {
    it(`test ${test}`, () => {
      const func = anySystemParser.bind(
        null,
        test
      );
      if (isError) {
        expect(func).toThrow();
      } else {
        expect(func).not.toThrow();
      }
    });
  }
});
