import anySystemParser from './anySystemParser';

/**
 *  Перевести число из любой системы в 10-ную
 * @param {string} num
 * @param {number} q1
 */
export default function (
  num,
  q1,
  steps = []
) {
  if (q1 === 10) {
    return +num;
  }

  let data = [];
  try {
    data = anySystemParser(num);
  } catch {
    return NaN;
  }

  data.reverse();

  steps[0] = q1;

  steps[1] = [...data];
  const res = data.reduce(
    (xaccum, xdec, index) => {
      const dec = +xdec;
      const accum = +xaccum;
      if (isNaN(dec) || isNaN(accum)) {
        return xaccum;
      }

      return (
        accum +
        dec * Math.pow(q1, index)
      );
    }
  );

  steps[2] = res;
  return res;
}
