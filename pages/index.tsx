import { useRouter } from 'next/router';
import React from 'react';

export default function Landing() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.push('/auth/signup')}>
      랜딩 페이지
    </button>
  );
}
