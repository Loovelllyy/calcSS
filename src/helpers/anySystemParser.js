/*
  [1]23 -> [, 1, 2, ], 2, 3 -> 12, 2, 3
  [1][5]6
  [11
  1. вместо цифры неизвестный символ+
  2. пустые скобки+
  3. нарушение баланса скобок ("][", "[", "]")+
*/

const doParserError = () => {
  throw new Error('syntax error');
};

const anySystemParser = (str) => {
  const chars = [...str];
  /**
   * если True - скобка не закрыта, False - закрыты все скобки
   * @type {boolean}
   */
  let isBigNumber = false;
  let buffer = [];
  let numberBuffer = 0;
  for (let char of chars) {
    switch (char) {
      case '[':
        if (isBigNumber) {
          doParserError();
        }

        isBigNumber = true;
        break;
      case ']':
        if (
          !isBigNumber ||
          numberBuffer === 0
        ) {
          doParserError();
        }

        isBigNumber = false;
        buffer.push(numberBuffer);
        numberBuffer = 0;
        break;
      default:
        let letter = char;
        if (isNaN(char)) {
          const code = char.charCodeAt(
            char
          );

          if (
            code < 65 ||
            code > 90 ||
            isBigNumber
          ) {
            doParserError();
          }

          const dec = code - 55;
          letter = dec;
        }

        if (isBigNumber) {
          numberBuffer =
            numberBuffer * 10 + +letter;
        } else {
          buffer.push(+letter);
        }
    }
  }

  if (isBigNumber) {
    doParserError();
  }

  return buffer;
};

export default anySystemParser;
