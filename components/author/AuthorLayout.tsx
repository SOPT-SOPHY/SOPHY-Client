import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { BackButton } from '../../assets/icon';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}
function AuthorLayout(props: LayoutProps) {
  const { children, title } = props;

  return (
    <Header>
      <Image src={BackButton} alt="뒤로가기" />
      <PageNumber>3/3</PageNumber>
      <PageTitle>{title}</PageTitle>
      {children}
    </Header>
  );
}

export default AuthorLayout;
const PageNumber = styled.h1``;

const PageTitle = styled.h1``;
const Header = styled.header``;
