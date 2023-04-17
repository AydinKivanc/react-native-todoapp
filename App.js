import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './src/components/header';
import generalStyles from './src/utils/generalStyles';
import Icon from 'react-native-vector-icons/AntDesign';

function App() {
  return (
    <SafeAreaView style={generalStyles.flex1}>
      <Header title="My Todo App" />
      <View>
        <Text>Text111</Text>
        <Icon name="pluscircle" size={25} color="red" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
