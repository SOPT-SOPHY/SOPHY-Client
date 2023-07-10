import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}
function AuthorButton(props: Props) {
  const { children } = props;

  return <NextButton type="button">{children}</NextButton>;
}

export default AuthorButton;
const NextButton = styled.button`
  padding: 0.8rem;
  border: none;
  border-radius: 1rem;
`;
