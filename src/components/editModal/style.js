import {StyleSheet} from 'react-native';
import {colors, fontFamilies} from '../../utils/constants';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.modalBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentWrapper: {
    width: '80%',
    backgroundColor: colors.bgWhite,
    // paddingHorizontal: 10,
    paddingVertical: 20,
    paddingBottom: 50,
    borderRadius: 15,
  },
  editTodoTitle: {
    fontFamily: fontFamilies.bold,
    color: colors.textTwo,
    fontSize: 18,
    textAlign: 'center',
  },
  btnWrapper: {
    flex: 1,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    borderTopWidth: 1,
    borderColor: colors.modelBtnBorder,
  },
  btnCancelWrapper: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: colors.modelBtnBorder,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCancelText: {
    color: colors.modalBtnText,
    fontSize: 17,
    fontWeight: 'bold',
  },
  btnOkWrapper: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: colors.modelBtnBorder,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnOkText: {
    color: colors.danger,
    fontSize: 17,
    //fontWeight: 'bold',
  },
  validationText: {
    color: colors.danger,
    marginLeft: 20,
  },
});

export default styles;
