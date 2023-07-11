import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface Props {
  children: React.ReactNode;
}
function AuthorButton(props: Props) {
  const { children } = props;

  return (
    <NextButtonWrapper>
      <NextButton type="button">{children}</NextButton>;
    </NextButtonWrapper>
  );
}

export default AuthorButton;
const NextButtonWrapper = styled.div`
  position: fixed;
  top: 65.7rem;
  width: 100vw;
  height: 14.4rem;
  background: ${theme.colors.white};
`;
const NextButton = styled.button`
  margin-bottom: 11.2rem;
  margin-top: 2.6rem;

  width: 33.5rem;
  height: 5.2rem;
  font: ${theme.fonts.subhead3_semibold};
  color: ${theme.colors.white};
  border-radius: 0.375rem;
  background: ${theme.colors.green05};
  border: none;
`;
