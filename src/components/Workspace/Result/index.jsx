/*
  a2d: [number, number[]]
  [
    q,  // основание исходной системы счисления
    arr
  ] 

    ... + arr[i] * q ** i + ...


    d2a: [
      ...
      {
        base: number  // основание конечной системы,
        num: {  // текущее число на данном шаге
          num, 
          str // во всех пустая, 
              // в последнем строковое
              // представление num
        },
        mod: { // остаток от деление в данном шаге
          num, str
        }
      }
      ...
    ]
    
    ... + arr[i] * q ** i + ... = C

    1. C / arr[i].num.num = C1
        mod = M1
    
    2. C1 / .... = C2
      
*/

// function Result({ value, a2d, d2a }) {
//   let base = 0;
//   let num = 0;
//   let mode = 0;
//   for (let i = 0; i < d2a.length; i++) {
//     base = d2a[i].base;
//     num = d2a[i].num.num;
//     mode = d2a[i].mod.num;
//     console.log(base, num, mode);
//     return (
//       <div className="steps">
//         {base}
//       </div>
//     );
//   }
//   return value || 0;
// }

/** @param {{ value: string, a2d: [number, number[], number], d2a: {base: number, res: number, num: {num: number, str: string}, mod: {num: number, str: string}}[] }} */
function Result({ value, a2d, d2a }) {
  let result = [];
  const [
    a2d_base,
    a2d_list,
    a2d_res
  ] = a2d;
  {
    const tmpRes = [];
    for (
      let i = 0;
      i < a2d_list?.length;
      i++
    ) {
      tmpRes.push(
        `${a2d_list[i]} * ${a2d_base} ^ ${i}`
      );
    }

    let str = tmpRes.join(' + ');

    if (a2d_list?.length && a2d_res) {
      str += ` = ${a2d_res}`;
    }

    result.push(<p>{str}</p>);
  }
  for (let {
    base,
    res,
    num,
    mod
  } of d2a) {
    result.push(
      <p>{`${num.num} / ${base} = ${res} (остаток = ${mod.num})`}</p>
    );
  }

  console.log(value, a2d, d2a);

  result.push(
    <p>{`Ответ: ${value}`}</p>
  );

  return result;
}

export default Result;
