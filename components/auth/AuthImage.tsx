import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import theme from '../../styles/theme';

interface AuthImageType {
  logoImage: any;
  titleText: string;
  illustration: any;
}

function AuthImage(props: AuthImageType) {
  const { logoImage, titleText, illustration } = props;
  return (
    <>
      <Image
        src={logoImage}
        width={159}
        height={42}
        alt="sophy 로고"
        style={{ marginTop: '5.9rem', marginBottom: '1.2rem' }}
      />
      <Title>{titleText}</Title>
      <Image
        src={illustration}
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
