import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';
import { St } from '..';

function Index() {
  // next.js 에서 환경 변수 쓸 땐NEXT_PUBLIC_ 을 변수 앞에 꼭 붙여줘야 한다.
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const accessTokenExpiredTime = 100;
  const refreshTokenExpiredTime = 200;

  const accessTokenExpiration = new Date(
    new Date().getTime() + accessTokenExpiredTime * 60000,
  ); // 현재 시간에 만료 시간을 더해 Date 객체 생성
  const refreshTokenExpiration = new Date(
    new Date().getTime() + refreshTokenExpiredTime * 60000,
  ); // 현재 시간에 만료 시간을 더해 Date 객체 생성

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${baseURL}/api/test/auth/login`, {
        id: 'test',
        password: 'testtest',
        accessTokenExpiredTime,
        refreshTokenExpiredTime,
      });

      const { accessToken, refreshToken } = response.data;

      Cookies.set('accessToken', accessToken, {
        expires: accessTokenExpiration,
      });
      Cookies.set('refreshToken', refreshToken, {
        expires: refreshTokenExpiration,
      });

      router.push('/home');
    } catch (error) {
      console.error('로그인 에러 발생', error);
    }
  };

  return (
    <div>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <St.Button onClick={handleLogin}>로그인</St.Button>
      <Link href="/auth/signup">
        <St.Button>계정이 없으신가요?</St.Button>
      </Link>
    </div>
  );
}

export default Index;
