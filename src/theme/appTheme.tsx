import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundApp: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculatorContainter: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  textResult: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  textSmallResult: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  botton: {
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  bottonText: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
  },
});
