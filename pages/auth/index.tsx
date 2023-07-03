import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const index = () => {
  const router = useRouter();
  const token = Cookies.get('token');

  if (token) {
    router.push('/main');
    return null;
  }
  return (
    <div>
      <Link href="auth/login">
        <St.Button>로그인</St.Button>
      </Link>

      <Link href="auth/signup">
        <St.Button>회원가입</St.Button>
      </Link>
    </div>
  );
};

export default index;

export const St = {
  Button: styled.div`
    font-size: 5rem;
  `,
};
