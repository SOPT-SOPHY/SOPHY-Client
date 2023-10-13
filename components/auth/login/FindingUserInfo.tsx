import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

function FindingUserInfo() {
  return (
    <FindingUserInfoWrapper>
      {/* <LinkText>이메일 찾기</LinkText> <Separator>|</Separator>
      <LinkText>비밀번호 찾기</LinkText> */}
    </FindingUserInfoWrapper>
  );
}

export default FindingUserInfo;

const FindingUserInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 16.9rem;
  height: 1.6rem;

  ${theme.fonts.body3_regular}

  color: ${theme.colors.gray04};
`;

const LinkText = styled.span`
  cursor: pointer;
`;

const Separator = styled.span`
  color: ${theme.colors.gray10};
`;
