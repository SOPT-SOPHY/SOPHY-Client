import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import AuthorButton from './AuthorButton';
import theme from '../../styles/theme';

function AuthorForm() {
  return (
    <>
      <UploadImage />
      <Link href="detail">
        <AuthorButton>완료 2/2</AuthorButton>
      </Link>
    </>
  );
}

export default AuthorForm;
const UploadImage = styled.div`
  width: 33.5rem;
  height: 18.4rem;
  color: ${theme.colors.gray11};
`;
