import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import AuthorModal from '../../components/AuthorModal/AuthorModal';
import ModalPortal from '../../components/ModalPortal';

const Detail = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const HandleModal = () => {
    setModalOpen(true);
  };
  const HandleModalShow = () => {
    setModalOpen(false);
  };
  return (
    <>
      <St.ModalOpenBtn type="button" onClick={HandleModal}>
        모달 열기
      </St.ModalOpenBtn>
      {modalOpen && (
        <ModalPortal>
          <AuthorModal onClose={HandleModalShow} />
        </ModalPortal>
      )}
    </>
  );
};

export default Detail;
const St = {
  ModalOpenBtn: styled.button`
    padding: 0.8rem;
    border: none;
    border-radius: 1rem;
  `,
};
