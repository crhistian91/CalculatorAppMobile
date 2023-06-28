import {useRef, useState} from 'react';

enum operation {
  sumar,
  restar,
  mutiplicar,
  dividir,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [numberAfter, setNumberAfter] = useState('0');

  const endOperation = useRef<operation>();

  const empty = () => {
    setNumber('0');
    setNumberAfter('0');
  };

  const numberComplet = (numberText: string) => {
    // no aceptar doble .
    if (number.includes('.') && numberText === '.') {
      return;
    }
    if (number.startsWith('0') || number.startsWith('-0')) {
      // punto decimal
      if (numberText === '.') {
        setNumber(number + numberText);
        // evaluar si es otro cero, y hay un punto
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
        // evaluar si es diferente de 0 y no tiene punto
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
        // evaluar el 00000.000
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const btnDelete = () => {
    let negative = '';
    let numberTemp = number;

    if (number.includes('-')) {
      negative = '-';
      numberTemp = number.substring(1);
    }

    if (numberTemp.length > 1) {
      setNumber(negative + numberTemp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const changeNumberAfter = () => {
    if (number.endsWith('.')) {
      setNumberAfter(number.slice(0, -1));
    } else {
      setNumberAfter(number);
    }
    setNumber('0');
  };

  const btnDividir = () => {
    changeNumberAfter();
    endOperation.current = operation.dividir;
  };

  const btnMultiplicar = () => {
    changeNumberAfter();
    endOperation.current = operation.mutiplicar;
  };

  const btnRestar = () => {
    changeNumberAfter();
    endOperation.current = operation.restar;
  };

  const btnSumar = () => {
    changeNumberAfter();
    endOperation.current = operation.sumar;
  };

  const calcular = () => {
    const num1 = Number(number);
    const num2 = Number(numberAfter);

    switch (endOperation.current) {
      case operation.sumar:
        setNumber(`${num1 + num2}`);
        break;
      case operation.restar:
        setNumber(`${num2 - num1}`);
        break;
      case operation.mutiplicar:
        setNumber(`${num1 * num2}`);
        break;
      case operation.dividir:
        setNumber(`${num2 / num1}`);
        break;
    }
    setNumberAfter('0');
  };

  return {
    number,
    numberAfter,
    empty,
    numberComplet,
    positiveNegative,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  };
};
