import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { BackButton } from '../../assets/icon';
import theme from '../../styles/theme';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}
function AuthorLayout(props: LayoutProps) {
  const { children, title } = props;

  return (
    <Header>
      <div>
        <Image
          src={BackButton}
          alt="뒤로가기"
          //   height={44}
          //   width={44}
          // style={{
          //   marginTop: '13px',
          //   marginLeft: '17px',
          //   marginBottom: '13px',
          //   marginRight: '17px',
          // }}
        />
      </div>

      <PageNumber>
        <span>3</span>/ 3
      </PageNumber>
      <PageTitle>{title}</PageTitle>
      {children}
    </Header>
  );
}

export default AuthorLayout;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  & .div {
    margin-top: 1.3rem;
    margin-left: 1.7rem;
  }
`;

const PageNumber = styled.h1`
  margin-top: 0.8rem;
  margin-left: 2rem;
  color: ${theme.colors.gray06};
  font: ${theme.fonts.subhead2_medium};
  & > span {
    margin-right: 0.19rem;
    color: #56b5b3;
    font: ${theme.fonts.headline3_bold};
  }
`;

const PageTitle = styled.h1`
  margin-top: 1.6rem;
  margin-left: 2rem;
  font: ${theme.fonts.headline2};
`;