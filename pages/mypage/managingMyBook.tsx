import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import backArrow from '../../assets/icon/ic_backArrow.svg';
import SingleMyBook from '../../components/mypage/SingleMyBook';

// import BooktalkList from '../../components/mypage/BooktalkList';

const managingMyBook = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Body>
      <Layout noHeader noMenuBar noFooter>
        <Header>
          <ImageContainer>
            <Image
              src={backArrow}
              width={44}
              height={44}
              alt="뒤로가기"
              onClick={handleGoBack}
            />
          </ImageContainer>
          <Title>내 도서 관리</Title>
        </Header>
        <SingleMyBookContainer>
          <SingleMyBook />
        </SingleMyBookContainer>
        <NextButtonWrapper>
          <NextButton>작품 등록하기</NextButton>
        </NextButtonWrapper>
      </Layout>
    </Body>
  );
};

export default managingMyBook;

const Body = styled.div`
  width: 37.5rem;

  margin: 0 auto;
  padding: 0;

  background-color: ${({ theme }) => theme.colors.white};

  /* border: 1px solid ${({ theme }) => theme.colors.gray11}; */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  position: sticky;
  width: 37.5rem;
  height: 4.4rem;
  z-index: 2;

  margin-bottom: 3.5rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const ImageContainer = styled.div`
  width: 4.4rem;
  height: 4.4rem;
  cursor: pointer;

  img {
    width: 4.4rem;
    height: 4.4rem;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.subhead2_bold};
  color: ${({ theme }) => theme.colors.black};

  margin-right: 14.4rem;
`;

const SingleMyBookContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* gap: 1.6rem; */
`;

const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 33.5rem;
  height: 5.2rem;
  flex-shrink: 0;

  margin-top: 5rem;
  margin-left: 2rem;
  margin-right: 2rem;

  border: none;
  border-radius: 0.6rem;

  ${({ theme }) => theme.fonts.subhead3_semibold};

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

const NextButtonWrapper = styled.div`
  position: fixed;
  bottom: 4.8rem;
`;
