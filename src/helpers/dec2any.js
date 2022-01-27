const convertDec = (dec) => {
  if (isNaN(dec)) {
    return '';
  }
  if (dec > 9 && dec < 36) {
    const tmp = 55 + dec;
    return String.fromCharCode(tmp);
  }

  return dec > 9 ? `[${dec}]` : dec;
};

// ascii
//

const dec2any = (
  num,
  q2,
  steps = []
) => {
  if (q2 === 10) {
    return num;
  }

  const newNum = Math.trunc(num / q2);
  if (num < q2) {
    const str = convertDec(num);
    const mod = num - newNum;
    steps.push({
      num: {
        num,
        str
      },
      res: newNum,
      mod: {
        num: mod,
        str: mod.toString()
      },
      base: q2
    });
    return str;
  }

  /* 
    6 | 2
      ----
    6   3 | 2
          ----
    0   3   1 (| 2)
              ----
        1   0  0
            1
  */

  const mod = num % q2;
  const dec = convertDec(mod);

  const step = {
    num: {
      num,
      str: ''
    },
    mod: {
      num: mod,
      str: dec
    },
    base: q2,
    res: newNum
  };

  steps.push(step);
  const res = dec2any(
    newNum,
    q2,
    steps
  );

  return `${res}${dec}`;
};

export default dec2any;
