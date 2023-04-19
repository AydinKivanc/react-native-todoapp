import {StyleSheet} from 'react-native';
import {colors, fontFamilies} from '../../utils/constants';

const styles = StyleSheet.create({
  todoWrapper: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.bgThree,
    flexDirection: 'row',
    //alignItems: 'center',
  },
  title: {
    fontFamily: fontFamilies.semiBold,
    color: colors.textOne,
    fontSize: 20,
  },
  complitedTitle: {
    color: colors.danger,
    textDecorationLine: 'line-through',
  },
  date: {
    fontFamily: fontFamilies.regular,
    color: colors.bgTwo,
    marginTop: 5,
  },
  dateCompleted: {
    fontFamily: fontFamilies.regular,
    color: colors.danger,
    marginTop: 5,
  },

  textWrapper: {
    flex: 1,
  },
  iconsWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
});
export default styles;
