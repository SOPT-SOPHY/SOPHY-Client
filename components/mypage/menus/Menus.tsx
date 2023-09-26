import React from 'react';
import { styled } from 'styled-components';
import theme from '../../../styles/theme';
import router from 'next/router';

const Menus = () => {
  return (
    <MenusWrapper>
      <MenuWrapper onClick={() => router.push('/mypage/managingInfo')}>
        내 정보 관리
      </MenuWrapper>
      <MenuWrapper>이용약관</MenuWrapper>
      <MenuWrapper>개인정보 처리 방침</MenuWrapper>
      <MenuWrapper>로그아웃</MenuWrapper>
    </MenusWrapper>
  );
};

export default Menus;

const MenusWrapper = styled.div`
  margin-top: 3.2rem;
  margin-left: 2rem;

  ${theme.fonts.body1_medium};
  color: ${theme.colors.gray05};

  display: flex;
  flex-direction: column;

  gap: 1.6rem;
`;

const MenuWrapper = styled.span`
  width: fit-content;
  cursor: pointer;
`;
