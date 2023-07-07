import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';
import { styled } from 'styled-components';
import Image from 'next/image';
import Layout from '../../../components/Layout';
import Next from '../../../public/next.svg';
import { sophyLogoImg } from '../../../assets/img';

function Login() {
  // next.js 에서 환경 변수 쓸 땐 NEXT_PUBLIC_ 을 변수 앞에 꼭 붙여줘야 한다.
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const accessTokenExpiredTime = 100;
  const refreshTokenExpiredTime = 200;

  const accessTokenExpiration = new Date(
    new Date().getTime() + accessTokenExpiredTime * 60000,
  );
  const refreshTokenExpiration = new Date(
    new Date().getTime() + refreshTokenExpiredTime * 60000,
  );

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${baseURL}/auth/login`, {
        email: 'kim@gmail.com',
        password: '1',
      });

      console.log(response);

      // eslint-disable-next-line camelcase
      const { access_token, refresh_token } = response.data.data;
      console.log(access_token);

      Cookies.set('accessToken', access_token, {
        expires: accessTokenExpiration,
      });
      Cookies.set('refreshToken', refresh_token, {
        expires: refreshTokenExpiration,
      });

      // router.push('/home');
    } catch (error) {
      console.error('로그인 에러 발생', error);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Layout noHeader noMenuBar noFooter>
      <Image
        src={sophyLogoImg}
        width={161}
        height={58}
        alt="sophy 로고"
        style={{ marginTop: '5.9rem' }}
      />
      <button type="button" onClick={handleGoBack}>
        뒤로가기
      </button>
      <div>로그인</div>
      <Image src={Next} alt="로고 이미지" />
      <InputWrapper>
        <LoginInput
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LoginInput
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputWrapper>
      <Button onClick={handleLogin}>로그인</Button>
      <Link href="/auth/signup">
        <Button>계정이 없으신가요?</Button>
      </Link>
    </Layout>
  );
}

export default Login;

const Button = styled.button`
  width: 27.5rem;
  height: 4.4rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const LoginInput = styled.input`
  width: 30rem;
`;
