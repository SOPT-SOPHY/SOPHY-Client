import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';

import { useRouter } from 'next/router';
import { BackButton } from '../../assets/icon';
import theme from '../../styles/theme';
import { isModalOpen } from '../recoil/selector';

interface LayoutProps {
  children: React.ReactNode;
  // ModalOpen: false;
  noPageNum: false;
  noPageTitle: false;
  pageNum: string;
  title: string;
}
function AuthorLayout(props: LayoutProps) {
  const { children, noPageNum, noPageTitle, pageNum, title } = props;
  const modalOpen = useRecoilValue(isModalOpen);
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Layout>
      <Background modalOpen={modalOpen} />
      <Header modalOpen={modalOpen}>
        <div>
          <Image
            src={BackButton}
            alt="뒤로가기"
            onClick={handleGoBack}
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

        {!noPageNum && (
          <PageNumber>
            <span>{pageNum}</span>/ 3
          </PageNumber>
        )}
        {!noPageTitle && <PageTitle>{title}</PageTitle>}
      </Header>
      {children}
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

  position: fixed;
  top: 0;
  width: 100vw;
  height: 14rem;

  background: ${({ modalOpen }) =>
    modalOpen ? 'rgba(0,0,0,0.0)' : theme.colors.white};

  /* background: ${theme.colors.white}; */
  & .div {
    margin-top: 1.3rem;
    margin-left: 1.7rem;
  }
`;

const Background = styled.div`
  /* position: fixed;
  z-index: -99;
  background: 'rgba(0,0,0,0.6)';
  display: ${({ modalOpen }) => (modalOpen ? 'block' : 'none')}; */
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
