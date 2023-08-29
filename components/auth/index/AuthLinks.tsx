import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

function AuthLinks() {
  return (
    <>
      <Link href="auth/login">
        <AuthButton type="button" func="login">
          로그인
        </AuthButton>
      </Link>
      <Link href="auth/signup">
        <AuthButton type="button" func="signup">
          회원가입
        </AuthButton>
      </Link>
    </>
  );
}

export default AuthLinks;

const AuthButton = styled.button<{ func: string }>`
  width: 33.5rem;
  height: 5.2rem;
  margin-bottom: 1.2rem;

  color: ${(props) =>
    props.func === 'login' ? theme.colors.white : theme.colors.primary};
  background-color: ${(props) =>
    props.func === 'login' ? theme.colors.primary : theme.colors.green01};
  ${theme.fonts.subhead3_semibold};

  border: none;
  border-radius: 0.6rem;

  cursor: pointer;
`;
