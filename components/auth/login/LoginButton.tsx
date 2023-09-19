import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import theme from '../../../styles/theme';
import useLogin from '../../../hooks/auth/login';
import { isLoginAvailableState } from '../../../atoms/auth';

interface ButtonProps {
  onClick: () => void;
  isLoginAvailable: boolean;
}

function LoginButton() {
  const { handleLogin } = useLogin();
  const isLoginAvailable = useRecoilValue(isLoginAvailableState);

  return (
    <Button onClick={handleLogin} isLoginAvailable={isLoginAvailable}>
      로그인
    </Button>
  );
}

export default LoginButton;

const Button = styled.button<ButtonProps>`
  width: 33.5rem;
  height: 5.2rem;

  border-radius: 0.6rem;
  border: none;

  margin-top: 3.2rem;
  margin-bottom: 2rem;

  ${theme.fonts.subhead3_semibold};

  color: ${(props) =>
    props.isLoginAvailable ? theme.colors.white : theme.colors.gray07};
  background-color: ${(props) =>
    props.isLoginAvailable ? theme.colors.primary : theme.colors.gray11};

  cursor: ${(props) => (props.isLoginAvailable ? 'pointer' : 'not-allowed')};
`;
