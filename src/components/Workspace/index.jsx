import { useState } from 'react';
import InputBox from './InputBox';
import Result from './Result';
import ErrorComponent from './Error';

import any2dec from '../../helpers/any2dec';
import dec2any from '../../helpers/dec2any';

import './style.css';

// 3 -> 2 | 3 -> 10 -> 2

// 1. q1 -> 10
// 2. 10 -> q2

const Workspace = () => {
  const [res, setRes] = useState(0);
  const [
    hasError,
    setHasError
  ] = useState(false);

  const [steps, setSteps] = useState({
    a2d: [],
    d2a: []
  });

  function calc(num, q1, q2) {
    const any2decSteps = [];
    const dec2anySteps = [];

    const dec = any2dec(
      num,
      q1,
      any2decSteps
    );

    if (isNaN(dec)) {
      setRes('');
      setHasError(true);
      return;
    }

    const res = dec2any(
      dec,
      q2,
      dec2anySteps
    );

    setRes(res);
    setHasError(false);
    setSteps({
      a2d: any2decSteps,
      d2a: dec2anySteps
    });
  }

  return (
    <div className="work-space">
      <h2>
        Калькулятор систем счисления
      </h2>
      <InputBox onCalc={calc} />
      {hasError ? (
        <ErrorComponent />
      ) : (
        <Result
          value={res}
          {...steps}
        />
      )}
    </div>
  );
};

export default Workspace;
