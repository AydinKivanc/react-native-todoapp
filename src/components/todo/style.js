import {StyleSheet} from 'react-native';
import {colors, fontFamilies} from '../../utils/constants';

const styles = StyleSheet.create({
  todoWrapper: {
    paddingTop: 10,
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.bgThree,
    //flexDirection: 'row',
    //alignItems: 'center',
  },
  title: {
    fontFamily: fontFamilies.semiBold,
    color: colors.textOne,
    fontSize: 20,
  },
  complitedTitle: {
    color: colors.green,
    textDecorationLine: 'line-through',
  },
  date: {
    fontFamily: fontFamilies.regular,
    color: colors.bgTwo,
    marginTop: 5,
  },
  dateCompleted: {
    fontFamily: fontFamilies.regular,
    color: colors.green,
    marginTop: 5,
  },
  firstLineWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  dateWrapper: {
    flex: 1,
  },
  iconsWrapper: {
    flexDirection: 'row',
    gap: 15,
  },
  textWrapper: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 15,
  },
});
export default styles;
