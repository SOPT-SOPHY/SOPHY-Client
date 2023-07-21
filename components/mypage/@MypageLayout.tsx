import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { BackButton } from '../../assets/icon';
import theme from '../../styles/theme';

interface LayoutProps {
  title: string;
}
function MypageLayout(props: LayoutProps) {
  const { title } = props;
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Header>
      <Image
        src={BackButton}
        alt="뒤로가기"
        onClick={handleGoBack}
        height={44}
        width={44}
        style={{
          marginLeft: '-17px',
          cursor: 'pointer',
        }}
      />
      <PageTitle>{title}</PageTitle>
    </Header>
  );
}

export default MypageLayout;

const Header = styled.header`
  display: flex;
  align-items: center;
  width: 33.5rem;
  height: 4.4rem;
`;

const PageTitle = styled.h1`
  margin-left: 9.4rem;

  ${theme.fonts.subhead2_bold};
  color: ${theme.colors.black};
`;
