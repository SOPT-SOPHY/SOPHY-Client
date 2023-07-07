import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
/*
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
*/
import Image from 'next/image';
import Layout from '../../components/Layout';
import { sophyLogoImg } from '../../assets/img';
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
      <Image src={sophyLogoImg} width={161} height={58} alt="sophy 로고" />
      <Title>모든 순간 언제나 소피와 함께</Title>
      <ButtonWrapper>
        <Link href="auth/login">
          <Button type="button">로그인</Button>
        </Link>
        <Link href="auth/signup">
          <Button type="button">회원가입</Button>
        </Link>
      </ButtonWrapper>
    </Layout>
  );
}

export default Auth;

const Button = styled.button`
  width: 27.5rem;
  height: 4.4rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.div`
  color: ${theme.colors.gray05};
  ${theme.fonts.body1_medium}
`;
