import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import { GoBackIcon } from '../../../assets/icon';
import theme from '../../../styles/theme';

function ManagingMyBook() {
  const router = useRouter();
  return (
    <Layout noFooter noHeader noMenuBar>
      <Head>
        <GoBackImage
          src={GoBackIcon}
          alt="뒤로가기 아이콘"
          onClick={() => router.back()}
        />
        <PageTitle>내 도서 관리</PageTitle>
        <TitleBlank />
      </Head>
      <HeadBlank />
      <BooktalkStateTabWrapper />
    </Layout>
  );
}

export default ManagingMyBook;

const Head = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  position: fixed;

  background-color: ${theme.colors.white};

  width: 37.5rem;
`;

const GoBackImage = styled(Image)`
  cursor: pointer;
`;

const HeadBlank = styled.div`
  width: 37.5rem;
  height: 4.4rem;
`;

const PageTitle = styled.div`
  ${theme.fonts.subhead2_bold};
`;

const TitleBlank = styled.div`
  width: 4.4rem;
  height: 4.4rem;
`;

const BooktalkStateTabWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 37.5rem;
`;

/*
const MatchingTab = styled.div<{ isClicked: boolean }>`
  width: 19rem;
  color: ${(props) =>
    props.isClicked ? theme.colors.black : theme.colors.gray06};
`;
*/
