import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import theme from '../../styles/theme';
import { loginhomeImg, NewLogo } from '../../assets/img';

function AuthImage() {
  return (
    <>
      <Image
        src={NewLogo}
        width={159}
        height={42}
        alt="sophy 로고"
        style={{ marginTop: '5.9rem', marginBottom: '1.2rem' }}
      />
      <Title>모든 순간 언제나 소피와 함께</Title>
      <Image
        src={loginhomeImg}
        width={276}
        height={328}
        alt="로그인 홈 이미지"
        style={{ marginBottom: '1.1rem' }}
      />
    </>
  );
}

export default AuthImage;

const Title = styled.div`
  width: 37.5rem;
  margin-bottom: 4.2rem;
  color: ${theme.colors.gray05};
  ${theme.fonts.body1_medium};
  text-align: center;
`;
