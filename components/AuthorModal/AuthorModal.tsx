import React from 'react';
import styled from 'styled-components';
const AuthorModal = ({ onClose }: any) => {
  return (
    <>
      <St.ModalSection>
        <St.ModalH1>삭제하시겠습니까?</St.ModalH1>
        <St.ModalBtn type="button" onClick={onClose}>
          네
        </St.ModalBtn>
      </St.ModalSection>
    </>
  );
};

export default AuthorModal;

const St = {
  ModalSection: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 21rem;
    height: 10rem;
    background: #fff;
    border: 1px solid #000;
    border-radius: 10px;
  `,
  ModalH1: styled.h1`
    padding: 1rem;
    font-size: 1.2rem;
  `,
  ModalBtn: styled.button`
    padding: 0.8rem;
    border: none;
    border-radius: 1rem;
  `,
};
