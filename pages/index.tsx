import React from 'react';
import { useRouter } from 'next/router';

export default function Landing() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/home')}>
      랜딩 페이지!!!
    </button>
  );
}
