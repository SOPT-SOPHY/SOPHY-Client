import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import SophyBtn from './SophyBtn';

const SophyForm = () => {
  return (
    <>
      <St.Title>3. 신청서를 작성해주세요</St.Title>
      <Link href="detail">
        <SophyBtn>완료 2/2</SophyBtn>
      </Link>
    </>
  );
};

export default SophyForm;
const St = {
  Title: styled.h1`
    margin: 1rem;
    font-size: 2rem;
  `,
};
