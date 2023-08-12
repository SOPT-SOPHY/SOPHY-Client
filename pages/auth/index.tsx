import React from 'react';
import { loginhomeImg, NewLogo } from '../../assets/img';
import AuthImage from '../../components/auth/AuthImage';
import AuthLinks from '../../components/auth/AuthLinks';

function Auth() {
  return (
    <>
      <AuthImage
        logoImage={NewLogo}
        titleText="모든 순간 언제나 소피와 함께"
        illustration={loginhomeImg}
      />
      <AuthLinks />
    </>
  );
}

export default Auth;
