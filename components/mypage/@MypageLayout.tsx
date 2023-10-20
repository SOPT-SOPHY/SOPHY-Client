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
      <PageTitle>{title}</PageTitle>
    </Header>
  );
}

export default MypageLayout;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37.5rem;
  height: 4.4rem;
`;

const PageTitle = styled.div`
  ${theme.fonts.subhead2_bold};
  color: ${theme.colors.black};
`;
