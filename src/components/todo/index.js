import {Text, TouchableOpacity, View, Alert} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/constants';
import styles from './style';

const Todo = ({todoItem = {}, todos = [], setTodos = () => {}}) => {
  const deleteTodo = () => {
    Alert.alert(
      'Delete Action', // first parameter is TITLE
      `Are you sure you want to delete Todo's ${todoItem?.id}? `, // second parameter is DESCRIPTION
      [
        // third parameter is BUTTONS arrray
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            const filteredTodos = todos.filter(
              item => item?.id !== todoItem.id,
            );
            setTodos(filteredTodos);
          },
          style: 'destructive',
        },
      ],
    );
  };
  const changeCopmleted = () => {
    Alert.alert('Completed', "Are you sure you this todo's is completed?", [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          const updatedTodos = [];
          for (let i = 0; i < todos.length; i++) {
            if (todos[i].id !== todoItem.id) {
              updatedTodos.push(todos[i]);
            } else {
              const newTodo = {
                ...todoItem,
                completed: !todoItem.completed,
              };
              updatedTodos.push(newTodo);
            }
          }
          setTodos(updatedTodos);
        },
        style: 'destructive',
      },
    ]);
  };
  const now = new Date();
  const completedDate =
    now.toLocaleDateString('uk-UK') +
    ' ' +
    now.getHours() +
    ':' +
    String(now.getMinutes()).padStart(2, '0');
  return (
    <View style={styles.todoWrapper}>
      <View style={styles.textWrapper}>
        <Text
          style={[styles.title, todoItem?.completed && styles.complitedTitle]}>
          {todoItem?.text}
        </Text>
        <Text style={styles.date}>{todoItem?.date} Created</Text>
        {todoItem?.completed && (
          <Text style={styles.dateCompleted}>{completedDate} Completed</Text>
        )}
      </View>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity onPress={changeCopmleted}>
          <Icon
            name={todoItem?.completed ? 'checkcircle' : 'checkcircleo'}
            size={25}
            color={colors.textTwo}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="edit" size={25} color={colors.bgTwo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteTodo}>
          <Icon name="closecircle" size={25} color={colors.danger} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;
