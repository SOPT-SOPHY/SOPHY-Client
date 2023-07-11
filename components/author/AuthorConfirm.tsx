import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import AuthorButton from './AuthorButton';
import { logincompleteImg } from '../../assets/img';
import theme from '../../styles/theme';
import AuthorLayout from './@AuthorLayout';

function AuthorConfirm() {
  return (
    <>
      <AuthorLayout noPageNum noPageTitle title="" />
      <ConfirmSection>
        <Image
          src={logincompleteImg}
          alt="북토크 개설완료"
          width={326}
          height={326}
          style={{
            marginTop: '6.7rem',
          }}
        />
        <ConfirmTitle>북토크 개설이 완료되었어요!</ConfirmTitle>
        <ConfirmSubTitle>
          북토크 내용 수정은 나의 소피에서 가능해요
        </ConfirmSubTitle>
      </ConfirmSection>
      <AuthorButton>나의 소피에서 확인하기</AuthorButton>
    </>
  );
}
export default AuthorConfirm;
const ConfirmSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ConfirmTitle = styled.h1`
  margin-top: 2.4rem;
  fonts: ${theme.fonts.headline3_bold};
  color: ${theme.colors.black};
`;
const ConfirmSubTitle = styled.h2`
  margin-top: 0.8rem;
  margin-bottom: 9.3rem;
  fonts: ${theme.fonts.body1_medium};
  color: ${theme.colors.gray06};
`;
