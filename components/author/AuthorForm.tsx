import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import AuthorButton from './AuthorButton';

function AuthorForm() {
  return (
    <>
      <Title>신청 폼 쭈ㅉ웅</Title>
      <Link href="detail">
        <AuthorButton>완료 2/2</AuthorButton>
      </Link>
    </>
  );
}

export default AuthorForm;
const Title = styled.h1`
  margin: 1rem;
  font-size: 2rem;
`;
