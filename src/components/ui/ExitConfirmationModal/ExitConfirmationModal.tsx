import React from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';

import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

type ExitConfirmationModalProps = {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

const ExitConfirmationModal = ({
  visible,
  onConfirm,
  onCancel,
}: ExitConfirmationModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.textContainer}>
            <CustomText extraStyle={styles.title}>Leave the Match?</CustomText>
            <CustomText extraStyle={styles.message}>
              Your squad is still on the field. Are you sure you want to end
              this timeout?
            </CustomText>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={onConfirm}
              style={[styles.button, styles.leftButton]}
            >
              <CustomText extraStyle={styles.cancelButtonText}>
                Leave
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onCancel}
              style={[styles.button, styles.rightButton]}
            >
              <CustomText extraStyle={styles.confirmButtonText}>
                Stay
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ExitConfirmationModal;
