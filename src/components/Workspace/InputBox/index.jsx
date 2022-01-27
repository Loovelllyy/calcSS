import { useState } from 'react';
import './style.css';

const str2num = (str) => {
  const num = parseFloat(str);
  return isNaN(num) ? 0 : num;
};

// (num: number, q1: number, q2: number) => void
const InputBox = ({ onCalc }) => {
  const [
    inputNumber,
    setInputNumber
  ] = useState(0);
  const [q1, setQ1] = useState(10);
  const [q2, setQ2] = useState(2);

  const changeNumber = (event) => {
    /**
     * @type {string}
     */
    const num = event.target.value;
    setInputNumber(num.toUpperCase());
  };

  const changeQ1 = (event) => {
    const num = str2num(
      event.target.value
    );
    setQ1(num);
  };

  const changeQ2 = (event) => {
    const num = str2num(
      event.target.value
    );
    setQ2(num);
  };

  const clickBtn = () => {
    if (
      onCalc &&
      typeof onCalc === 'function'
    ) {
      onCalc(inputNumber, q1, q2);
    }
  };

  return (
    <div className="input-box">
      <div className="input-box__main-number">
        <p>Перевести число</p>
        <input
          type="text"
          value={inputNumber.toString()}
          onChange={changeNumber}
        />
      </div>
      <div className="input-box__number">
        <p>Из</p>
        <input
          type="number"
          min="2"
          value={q1.toString()}
          onChange={changeQ1}
        />
        <p>-ой системы</p>
      </div>
      <div className="input-box__number">
        <p>В</p>
        <input
          type="number"
          min="2"
          value={q2.toString()}
          onChange={changeQ2}
        />
        <p>-ую систему счисления</p>
      </div>
      <button
        className="input-box__btn"
        onClick={clickBtn}
      >
        Перевести
      </button>
    </div>
  );
};

export default InputBox;
