import React from 'react';
import styled from 'styled-components';
import Layout from '../../../components/Layout';

const index = () => {
  return (
    <Layout noHeader noMenuBar noFooter>
      <Title>이성오님,</Title>
      <Title>회원가입을 축하합니다!</Title>
    </Layout>
  );
};

export default index;
const Title = styled.h1``;
