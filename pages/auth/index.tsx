import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
/*
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
*/
import Image from 'next/image';
import Layout from '../../components/Layout';
import { sophyLogoImg, loginhomeImg } from '../../assets/img';
import theme from '../../styles/theme';

function Auth() {
  /*
  const router = useRouter();
  const token = Cookies.get('token');

  if (token) {
    router.push('/main');
    return null;
  }
  */
  return (
    <Layout noHeader noMenuBar noFooter>
      <LoginWrapper>
        <Image
          src={sophyLogoImg}
          width={161}
          height={58}
          alt="sophy 로고"
          style={{ marginTop: '5.9rem' }}
        />
        <Title>모든 순간 언제나 소피와 함께</Title>
        <Image
          src={loginhomeImg}
          width={276}
          height={328}
          alt="로그인 홈 이미지"
          style={{ marginBottom: '1.1rem' }}
        />
        <Link href="auth/login">
          <LoginButton type="button">로그인</LoginButton>
        </Link>
        <Link href="auth/signup">
          <SignupButton type="button">회원가입</SignupButton>
        </Link>
      </LoginWrapper>
    </Layout>
  );
}

export default Auth;

const LoginButton = styled.button`
  width: 33.5rem;
  height: 5.2rem;
  margin-bottom: 1.2rem;
  color: ${theme.colors.white};
  cursor: pointer;
  background-color: ${theme.colors.primary};
  ${theme.fonts.subhead3_semibold};
  border: none;
  border-radius: 0.6rem;
`;

const SignupButton = styled.button`
  width: 33.5rem;
  height: 5.2rem;
  color: ${theme.colors.primary};
  cursor: pointer;
  background-color: ${theme.colors.green01};
  ${theme.fonts.subhead3_semibold};
  border: none;
  border-radius: 0.6rem;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 0.6rem;
`;

const Title = styled.div`
  width: 37.5rem;
  margin-bottom: 4.2rem;
  color: ${theme.colors.gray05};
  ${theme.fonts.body1_medium};
  text-align: center;
`;
