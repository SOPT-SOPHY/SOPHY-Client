import React from 'react';
import { St } from '..';
import Link from 'next/link';

const index = () => {
  return (
    <div>
      <input placeholder="Email"></input>
      <input placeholder="Password"></input>
      <St.Button>로그인</St.Button>
      <Link href="/auth/signup">
        <St.Button>계정이 없으신가요?</St.Button>
      </Link>
    </div>
  );
};

export default index;
