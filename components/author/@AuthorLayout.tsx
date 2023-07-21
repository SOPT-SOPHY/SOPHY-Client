/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { BackButton } from '../../assets/icon';
import theme from '../../styles/theme';

interface LayoutProps {
  // ModalOpen: false;
  noPageNum: boolean;
  noPageTitle: boolean;
  pageNum?: string;
  title: string;
}
function AuthorLayout(props: LayoutProps) {
  const { noPageNum, noPageTitle, pageNum, title } = props;
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Layout>
      <Header>
        <Image
          src={BackButton}
          alt="뒤로가기"
          onClick={handleGoBack}
          height={44}
          width={44}
          style={{
            marginLeft: '-21px',
            cursor: 'pointer',
          }}
        />

        {!noPageNum && (
          <PageNumber>
            <span>{pageNum}</span>/ 3
          </PageNumber>
        )}
        {!noPageTitle && <PageTitle>{title}</PageTitle>}
      </Header>
    </Layout>
  );
}

export default AuthorLayout;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

const PageNumber = styled.h1`
  margin-top: 0.8rem;
  color: ${theme.colors.gray06};
  ${theme.fonts.subhead2_medium};
  & > span {
    margin-right: 0.19rem;
    color: #56b5b3;
    ${theme.fonts.headline3_bold};
  }
`;

const PageTitle = styled.h1`
  margin-top: 1.6rem;
  ${theme.fonts.headline2};
`;
