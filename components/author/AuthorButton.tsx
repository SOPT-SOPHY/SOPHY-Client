import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

// interface Props {
//   children: React.ReactNode;
// }
function AuthorButton() {
  //   const { children } = props;

  return <NextButton type="button">다음</NextButton>;
}

export default AuthorButton;
const NextButton = styled.button`
  margin-left: 2rem;
  margin-bottom: 11.2rem;
  width: 33.5rem;
  height: 5.2rem;
  font: ${theme.fonts.subhead3_semibold};
  color: ${theme.colors.white};
  border-radius: 0.375rem;
  background: ${theme.colors.green05};
  border: none;
`;
