import React from 'react';
import { styled } from 'styled-components';
import theme from '../../styles/theme';

function MyProfile() {
  return <MypageTitleName>나의 소피</MypageTitleName>;
}

export default MyProfile;

const MypageTitleName = styled.div`
  width: 37.5rem;
  height: 4.4rem;
  padding: 2.2rem 28.8rem 0rem 2rem;
  background-color: ${theme.colors.white};
`;
