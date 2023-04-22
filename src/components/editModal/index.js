import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';

import Input from '../input';

const EditModal = ({
  visible,
  closeModal,
  willEditText,
  setWillEditText,
  onConfirm,
  hasError,
  errorMessage,
}) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContentWrapper}>
          <Text style={styles.editTodoTitle}>Edit Todo</Text>
          <Input
            value={willEditText}
            onChangeText={t => setWillEditText(t)}
            placeholder="Type your todo please"
          />
          {hasError && (
            <Text style={styles.validationText}>{errorMessage}</Text>
          )}
          <View style={styles.btnWrapper}>
            <TouchableOpacity
              onPress={closeModal}
              style={styles.btnCancelWrapper}>
              <Text style={styles.btnCancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOkWrapper} onPress={onConfirm}>
              <Text style={styles.btnOkText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;
