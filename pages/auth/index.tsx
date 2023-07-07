import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';

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
      <AuthWrapper>
        <ButtonWrapper>
          <Link href="auth/login">
            <Button type="button">로그인</Button>
          </Link>
          <Link href="auth/signup">
            <Button type="button">회원가입</Button>
          </Link>
        </ButtonWrapper>
      </AuthWrapper>
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

const AuthWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: pink;
`;
