import {Text, TouchableOpacity, View, Alert} from 'react-native';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/constants';
import styles from './style';

import EditModal from '../editModal';

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
    const tempUpdatedTodos = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== todoItem.id) {
        tempUpdatedTodos.push(todos[i]);
      } else {
        const updatedTodos = {
          ...todoItem,
          text: willEditText,
        };
        tempUpdatedTodos.push(updatedTodos);
      }
    }
    setTodos(tempUpdatedTodos);
    setOpenModal(false);
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
        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <Icon name="edit" size={25} color={colors.bgTwo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteTodo}>
          <Icon name="closecircle" size={25} color={colors.danger} />
        </TouchableOpacity>
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
