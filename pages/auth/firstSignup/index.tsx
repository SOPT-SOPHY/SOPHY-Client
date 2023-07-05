import React from 'react';
import { styled } from 'styled-components';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';

const firstSignup = () => {
  const router = useRouter();

  return (
    <Layout noHeader noMenuBar noFooter>
      <Button type="button" onClick={() => router.push('/home')}>
        소피 홈으로
      </Button>
    </Layout>
  );
};

export default firstSignup;

const Button = styled.button`
  width: 27.5rem;
  height: 4.4rem;
`;
