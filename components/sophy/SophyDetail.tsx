import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import SophyBtn from './SophyBtn';
import { useState } from 'react';
import AuthorModal from '../../components/AuthorModal/AuthorModal';
import ModalPortal from '../../components/ModalPortal';

const SophyDetail = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const HandleModal = () => {
    setModalOpen(true);
  };
  const HandleModalShow = () => {
    setModalOpen(false);
  };
  return (
    <>
      <St.Title>상세정보 페이지</St.Title>
      <Link href="correctSpace">
        <SophyBtn>수정</SophyBtn>
      </Link>
      <St.ModalOpenBtn type="button" onClick={HandleModal}>
        삭제
      </St.ModalOpenBtn>
      {modalOpen && (
        <ModalPortal>
          <AuthorModal onClose={HandleModalShow} />
        </ModalPortal>
      )}
    </>
  );
};

export default SophyDetail;

const St = {
  Title: styled.h1`
    margin: 1rem;
    font-size: 2rem;
  `,
  ModalOpenBtn: styled.button`
    padding: 0.8rem;
    border: none;
    border-radius: 1rem;
  `,
};
