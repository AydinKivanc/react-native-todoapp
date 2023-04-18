import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from './src/components/header';
import generalStyles from './src/utils/generalStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import Input from './src/components/input';
import {colors, fontFamilies} from './src/utils/constants';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    //Alert.alert(text);
    const newTodo = {
      id: String(new Date().getTime()),
      text: text,
      date: new Date(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText('');
  };

  return (
    <SafeAreaView style={[generalStyles.flex1, generalStyles.bgWhite]}>
      <Header title="My Todo App" />
      <Input
        value={text}
        onChangeText={t => setText(t)}
        placeholder="Type your todo please"
        onIconPress={addTodo}
        hasIcon
        iconName="pluscircle"
        styleIcon={{fontSize: 30, color: colors.bgOne, marginLeft: 10}}
      />
      <View style={styles.todosWrapper}>
        {todos.length === 0 ? (
          <Text style={styles.emptyText}>Your todo list is empty</Text>
        ) : (
          <ScrollView style={styles.ScrollView}>
            <Text>Todo array is not empty now</Text>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todosWrapper: {
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 20,
    //marginVertical: 5,
  },
  emptyText: {
    textAlign: 'center',
    fontFamily: fontFamilies.semiBold,
    color: colors.textTwo,
    fontSize: 16,
  },
  ScrollView: {
    flexGrow: 1,
  },
});

export default App;
