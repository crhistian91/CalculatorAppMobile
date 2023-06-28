import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {BottonCalculator} from '../components/BottonCalculator';
import {useCalculator} from '../Hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
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
  } = useCalculator();
  return (
    <View style={styles.calculatorContainter}>
      {numberAfter !== '0' && (
        <Text style={styles.textSmallResult}>{numberAfter}</Text>
      )}
      <Text style={styles.textResult} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <BottonCalculator text="C" color="#9B9B9B" action={empty} />
        <BottonCalculator
          text="+/-"
          color="#9B9B9B"
          action={positiveNegative}
        />
        <BottonCalculator text="del" color="#9B9B9B" action={btnDelete} />
        <BottonCalculator text="/" color="#FF9427" action={btnDividir} />
      </View>
      <View style={styles.row}>
        <BottonCalculator text="7" action={numberComplet} />
        <BottonCalculator text="8" action={numberComplet} />
        <BottonCalculator text="9" action={numberComplet} />
        <BottonCalculator text="X" color="#FF9427" action={btnMultiplicar} />
      </View>
      <View style={styles.row}>
        <BottonCalculator text="4" action={numberComplet} />
        <BottonCalculator text="5" action={numberComplet} />
        <BottonCalculator text="6" action={numberComplet} />
        <BottonCalculator text="-" color="#FF9427" action={btnRestar} />
      </View>
      <View style={styles.row}>
        <BottonCalculator text="1" action={numberComplet} />
        <BottonCalculator text="2" action={numberComplet} />
        <BottonCalculator text="3" action={numberComplet} />
        <BottonCalculator text="+" color="#FF9427" action={btnSumar} />
      </View>
      <View style={styles.row}>
        <BottonCalculator text="0" withBotton action={numberComplet} />
        <BottonCalculator text="." action={numberComplet} />
        <BottonCalculator text="=" color="#FF9427" action={calcular} />
      </View>
    </View>
  );
};
