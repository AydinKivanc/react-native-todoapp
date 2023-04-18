import React from 'react';

import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './style';
import {colors} from '../../utils/constants';
import Icon from 'react-native-vector-icons/AntDesign';

const Input = ({
  placeholder = 'type something',
  placeholderTextColor = colors.textPlaceHolder,
  keyboarType = 'default',
  multiline = false,
  hasIcon = false,
  iconName = 'plus',
  styleIcon = styles.icon,
  onIconPress = () => {},
  value = '',
  onChangeText = () => {},
}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        keyboardType={keyboarType}
        multiline={multiline}
        value={value}
        onChangeText={onChangeText}
      />
      {hasIcon && (
        <TouchableOpacity onPress={onIconPress}>
          <Icon name={iconName} style={styleIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
