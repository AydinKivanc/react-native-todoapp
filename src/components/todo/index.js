import {Text, TouchableOpacity, View, Alert} from 'react-native';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/constants';
import styles from './style';

import EditModal from '../editModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Todo = ({todoItem = {}, todos = [], setTodos = () => {}}) => {
  const [openModal, setOpenModal] = useState(false);
  const [willEditText, setWillEditText] = useState(todoItem?.text);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
            //setTodos(filteredTodos);
            AsyncStorage.setItem('@todos', JSON.stringify(filteredTodos))
              .then(() => setTodos(filteredTodos))
              .catch(err => {
                Alert.alert('Error', 'Error occurred during saving');
              });
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
          const tempTodos = [];
          for (let i = 0; i < todos.length; i++) {
            if (todos[i].id !== todoItem.id) {
              tempTodos.push(todos[i]);
            } else {
              const newTodo = {
                ...todoItem,
                completed: !todoItem.completed,
              };
              tempTodos.push(newTodo);
            }
          }
          // setTodos(tempTodos);
          AsyncStorage.setItem('@todos', JSON.stringify(tempTodos))
            .then(() => setTodos(tempTodos))
            .catch(err => {
              Alert.alert('Error', 'Error occurred during saving');
            });
        },
        style: 'destructive',
      },
    ]);
  };
  const editTodo = () => {
    /* VALIDATION */
    if (willEditText === '') {
      setHasError(true);
      setErrorMessage('* Type your todo please');
      setTimeout(() => {
        setHasError(false);
        setErrorMessage('');
      }, 2000);
      return;
    }
    /* UPDATE TODO */
    const tempTodos = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== todoItem.id) {
        tempTodos.push(todos[i]);
      } else {
        const updatedTodos = {
          ...todoItem,
          text: willEditText,
        };
        tempTodos.push(updatedTodos);
      }
    }
    // setTodos(tempTodos);
    // setOpenModal(false);
    AsyncStorage.setItem('@todos', JSON.stringify(tempTodos))
      .then(() => {
        setTodos(tempTodos);
        setOpenModal(false);
      })
      .catch(err => {
        Alert.alert('Error', 'Error occurred during saving');
      });
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
      <View style={styles.firstLineWrapper}>
        <View style={styles.dateWrapper}>
          <Text style={styles.date}>{todoItem?.date} Created</Text>
          {todoItem?.completed && (
            <Text style={styles.dateCompleted}>{completedDate} Completed</Text>
          )}
        </View>
        <View style={styles.iconsWrapper}>
          <TouchableOpacity onPress={changeCopmleted}>
            <Icon
              name={todoItem?.completed ? 'checkcircle' : 'checkcircleo'}
              size={30}
              color={colors.green}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOpenModal(true)}>
            <Icon name="edit" size={30} color={colors.bgTwo} />
          </TouchableOpacity>
          <TouchableOpacity onPress={deleteTodo}>
            <Icon name="closecircle" size={30} color={colors.danger} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textWrapper}>
        <Text
          style={[styles.title, todoItem?.completed && styles.complitedTitle]}>
          {todoItem?.text}
        </Text>
      </View>
      <EditModal
        visible={openModal}
        closeModal={() => setOpenModal(false)}
        willEditText={willEditText}
        setWillEditText={setWillEditText}
        onConfirm={editTodo}
        hasError={hasError}
        errorMessage={errorMessage}
      />
    </View>
  );
};

export default Todo;
