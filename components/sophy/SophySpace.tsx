import React from 'react';
import styled from 'styled-components';
import SophyBtn from './SophyBtn';
import Link from 'next/link';
const SophySpace = () => {
  return (
    <>
      <St.Title>1.지역을 선택해주세요.</St.Title>
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
};
