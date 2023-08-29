import React from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { NewLogo } from '../../../assets/img';
import theme from '../../../styles/theme';
import GoBackButton from '../../../components/common/GoBackButton';
import LoginInputs from '../../../components/auth/login/LoginInputs';
import { showLoginToastState } from '../../../atoms/auth';
import LoginButton from '../../../components/auth/login/LoginButton';
import FindingUserInfo from '../../../components/auth/login/FindingUserInfo';

function Login() {
  const showToast = useRecoilValue(showLoginToastState);

  return (
    <>
      <GoBackButton />
      <Image
        src={NewLogo}
        width={159}
        height={42}
        alt="sophy 로고"
        style={{ marginTop: '5.9rem', marginBottom: '9.5rem' }}
      />
      <LoginInputs inputType="이메일 주소" />
      <LoginInputs inputType="비밀번호" />
      <LoginButton />
      <FindingUserInfo />
      {showToast && (
        <ToastContainer>이메일 또는 비밀번호를 확인해 주세요</ToastContainer>
      )}
    </>
  );
}

export default Login;

const ToastContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 33.5rem;
  height: 4.8rem;

  position: fixed;
  bottom: 4.8rem;

  ${theme.fonts.subhead4_semibold};

  background-color: ${theme.colors.gray01};
  color: ${theme.colors.white};

  border-radius: 0.6rem;
`;
