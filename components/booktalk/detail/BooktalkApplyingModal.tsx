import React from 'react';
import ModalContainer from '../../common/modal/ModalContainer';
import { styled } from 'styled-components';
import theme from '../../../styles/theme';
import { ModalIcon } from '../../../assets/icon';
import Image from 'next/image';

interface BooktalkApplyingModalProps {
  isModalOpened: boolean;
  message: string;
  cancelButton?: string;
  confirmButton?: string;
  handleModalClose: () => void;
  handleConfirm: () => void;
}

const BooktalkApplyingModal = ({
  isModalOpened,
  message,
  cancelButton,
  confirmButton,
  handleModalClose,
  handleConfirm,
}: BooktalkApplyingModalProps) => {
  console.log(isModalOpened);
  const splittedMessage = message.split(',');
  console.log(splittedMessage);
  return (
    <ModalContainer
      isModalOpened={isModalOpened}
      handleModalClose={handleModalClose}>
      <SDialogWrapper>
        <Image src={ModalIcon} alt="" width={48} height={48} />
        <ModalTitle>{splittedMessage[0]}</ModalTitle>
        <ModalExplanation>{splittedMessage[1]}</ModalExplanation>
        <div>
          <ModalConfirmButton onClick={handleConfirm}>
            {confirmButton}
          </ModalConfirmButton>
        </div>
      </SDialogWrapper>
    </ModalContainer>
  );
};

export default BooktalkApplyingModal;

const SDialogWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 33.5rem;
  height: 24.3rem;
  background-color: ${theme.colors.white};
  padding: 48 69;
  border-radius: 1.2rem;
  background-color: $black80;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalConfirmButton = styled.button`
  border: none;
  width: 14.1rem;
  height: 4.7rem;
  border-radius: 0.6rem;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};

  &:focus {
    outline: none;
  }
`;

const ModalTitle = styled.div`
  ${theme.fonts.subhead2_bold};
  margin-top: 1.2rem;
  margin-bottom: 0.6rem;
`;

const ModalExplanation = styled.div`
  ${theme.fonts.body2_medium};
  color: ${theme.colors.gray06};
  white-space: pre-wrap;

  text-align: center;
  margin-bottom: 2.4rem;
`;
