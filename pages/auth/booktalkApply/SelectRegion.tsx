import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import backArrow from '../../../assets/icon/ic_backArrow.svg';

function SelectRegion() {
  return (
    <Body>
      <Header>
        <ImageContainer>
          <Image src={backArrow} width={44} height={44} alt="뒤로가기" />
        </ImageContainer>
        <Title>지역 선택</Title>
      </Header>
    </Body>
  );
}

export default SelectRegion;

const Body = styled.div`
  width: 37.5rem;

  margin: 0 auto;
  padding: 0;

  background-color: ${({ theme }) => theme.colors.white};

  border: 1px solid ${({ theme }) => theme.colors.gray01};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  position: sticky;
  width: 37.5rem;
  height: 4.4rem;
  z-index: 2;

  margin-top: 4.4rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const ImageContainer = styled.div`
  width: 4.4rem;
  height: 4.4rem;

  img {
    width: 4.4rem;
    height: 4.4rem;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.subhead2_bold};
  color: ${({ theme }) => theme.colors.black};

  margin-right: 15.4rem;
`;
