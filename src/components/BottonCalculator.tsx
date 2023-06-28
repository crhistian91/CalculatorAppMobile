/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
  withBotton?: boolean;
  action: (action: string) => void;
}

export const BottonCalculator = ({
  text,
  color = '#2D2D2D',
  withBotton = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.botton,
          backgroundColor: color,
          width: withBotton ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.bottonText,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
