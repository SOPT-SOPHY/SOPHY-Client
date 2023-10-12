import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../../components/common/Layout';
import backArrow from '../../assets/icon/ic_backArrow.svg';
import SingleMyBook from '../../components/mypage/SingleMyBook';
import { uesFetchMypage } from '../../hooks/queries/mypage';
// import BooktalkList from '../../components/mypage/BooktalkList';

interface BookData {
  title: string;
  book_category: string;
  booktalk_open_count: number;
  is_registration: boolean;
  book_image_url: string;
}

// interface MyPageData {
//   my_book_dtos: BookData[];
// }

const managingMyBook = () => {
  const router = useRouter();
  const { mypage } = uesFetchMypage();

  //   console.log(mypage);

  const handleGoBack = () => {
    router.push('/mypage');
  };

  const handleGoToLanding = () => {
    router.push(
      'https://spicy-gatsby-1c7.notion.site/ca91c889bb2b45239fe377054a86400e',
    );
  };

  return (
    <Body>
      <Layout>
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
        <Content>
          <SingleMyBookContainer>
            {mypage?.my_book_dtos.map((item: BookData) => (
              <SingleMyBook
                key={item.title} // 이후에 서버 딴에서 고유키 속성 추가해야할듯
                title={item.title}
                bookCategory={item.book_category}
                booktalkOpenCount={item.booktalk_open_count}
                isRegistration={item.is_registration}
                imageUrl={item?.book_image_url}
              />
            ))}
          </SingleMyBookContainer>
          <RegisterButtonWrapper>
            <RegisterButton onClick={handleGoToLanding}>
              작품 등록하기
            </RegisterButton>
          </RegisterButtonWrapper>
        </Content>
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

  position: fixed;
  width: 37.5rem;
  height: 4.4rem;
  z-index: 5;

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

const Content = styled.div`
  display: flex;
  width: 33.3rem;
`;

const SingleMyBookContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 33.3rem;
  /* height: calc(100vh - 7.9rem - 5.2rem - 4.8rem - 2rem); */
  height: calc(100vh - 7.9rem - 5.2rem);

  padding-top: 7.9rem;
  padding-bottom: 5.2rem;

  /* gap: 1.6rem; */
`;

const RegisterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 33.5rem;
  height: 5.2rem;
  flex-shrink: 0;

  /* margin-top: 5rem; */
  margin-right: 2rem;

  border: none;
  border-radius: 0.6rem;

  ${({ theme }) => theme.fonts.subhead3_semibold};

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

const RegisterButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  position: fixed;
  bottom: 4.8rem;
`;
