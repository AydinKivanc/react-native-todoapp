import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.bgOne,
    borderRadius: 6,
    height: 40,
    paddingHorizontal: 10,
    color: colors.textOne,
    fontSize: 16,
  },
  icon: {
    fontSize: 40,
    color: colors.bgOne,
    marginLeft: 10,
  },
});
export default styles;
