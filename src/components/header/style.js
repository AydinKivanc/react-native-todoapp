import {StyleSheet} from 'react-native';
import {colors, fontFamilies} from '../../utils/constants';

const styles = StyleSheet.create({
  headerWraper: {
    width: '100%',
    height: 50,
    backgroundColor: colors.bgOne,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fontFamilies.bold,
    fontSize: 20,
    color: colors.textThree,
  },
});

export default styles;
