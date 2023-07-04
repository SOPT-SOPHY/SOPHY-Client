import React from 'react';
import styled from 'styled-components';
import SophyBtn from './SophyBtn';
import Link from 'next/link';
import { useState } from 'react';
import ModalPortal from '../ModalPortal';
import RegionModal from '../AuthorModal/RegionModal';

const SophySpace = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const HandleModal = () => {
    setModalOpen(true);
  };
  const HandleModalShow = () => {
    setModalOpen(false);
  };
  return (
    <>
      <St.Title>1.지역을 선택해주세요.</St.Title>
      <St.ModalOpenBtn type="button" onClick={HandleModal}>
        의정부 > 
      </St.ModalOpenBtn>
      {modalOpen && (
        <ModalPortal>
          <RegionModal onClose={HandleModalShow} />
        </ModalPortal>
      )}
      <St.Title>2.공간을 선택해주세요.</St.Title>
      <Link href="sophy/form">
        <SophyBtn>다음 1/2</SophyBtn>
      </Link>
      {/* <SophyBtn onClick={() => router.push('sophy/form')}>다음 1/2</SophyBtn> */}
    </>
  );
};

export default SophySpace;
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
