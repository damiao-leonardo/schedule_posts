import React, { useState } from 'react';
import { Modal } from './style';
import Emotion from '../../../assets/emotion_modal.svg';

interface Props {
  isOpen: Boolean,
  clickClose: () => void,
}

const ModalComponent: React.FC<Props> = ({ isOpen, clickClose }) => {
  if (!isOpen) {
    return null;;
  }
  return (
    <Modal>
      <div className="modal_overlay">
        <div className="emotion">
          <img src={Emotion} alt="Emotion" />
        </div>
        <div className="message">
          <span>Agendado com sucesso!</span>
        </div>
        <div className="button">
          <button type="button" className="modal_close" onClick={() => clickClose()} >OK</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;