import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from './src/components/header';
import Todo from './src/components/todo';
import Input from './src/components/input';

import Icon from 'react-native-vector-icons/AntDesign';
import generalStyles from './src/utils/generalStyles';
import {colors, fontFamilies} from './src/utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    //Alert.alert(text);
    if (text.length === 0) {
      return;
    }
    const now = new Date();
    const formattedDate =
      now.toLocaleDateString('uk-UK') +
      ' ' +
      now.getHours() +
      ':' +
      String(now.getMinutes()).padStart(2, '0');

    const newTodo = {
      id: String(new Date().getTime()),
      text: text,
      date: formattedDate,
      completed: false,
    };
    // Async storage a gecmeden once state i bu iki satir ile guncelliyorduk
    // setTodos([...todos, newTodo]);
    // setText('');
    AsyncStorage.setItem('@todos', JSON.stringify([...todos, newTodo]))
      .then(() => {
        setTodos([...todos, newTodo]);
        setText('');
      })
      .catch(err => {
        Alert.alert('Error', 'Error occurred during saving');
      });
  };

  useEffect(() => {
    AsyncStorage.getItem('@todos')
      .then(res => {
        console.log('>> Todos Response', res); // Firstly coming null. That's why we can write logic in if block
        // if the res is not null
        if (res !== null) {
          const parsedRes = JSON.parse(res);
          setTodos(parsedRes);
        }
      })
      .catch(err => {
        console.log('>> Todos Error', err);
      });
  }, []);
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
            {/* <Text>Todo array is not empty now</Text> */}
            {todos?.map(todoItem => (
              <Todo
                key={todoItem?.id}
                todoItem={todoItem}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todosWrapper: {
    flex: 1,
    //borderWidth: 1,
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
