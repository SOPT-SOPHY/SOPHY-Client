import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import rectangleBook from '../../assets/img/rectangleBook.png';
import MyBookNextIcon from '../../assets/icon/MyBookNextIcon.svg';
import MyBookNextIconGray from '../../assets/icon/MyBookNextIconGray.svg';

function SingleMyBook() {
  return (
    <>
      <MyBookWrapper>
        <MyBookContainer>
          <MyBookImageContainer>
            <Image
              src={rectangleBook}
              width={80}
              height={117}
              alt="내 도서 이미지"
            />
          </MyBookImageContainer>
          <MyBookInfoContainer>
            <MyBookTitle>주니어 기획자를 위한 개론서</MyBookTitle>
            <MyBookCategory>IT/컴퓨터</MyBookCategory>
            <MyBooktalkCount>출판사</MyBooktalkCount>
          </MyBookInfoContainer>
          <BooktalkRegistrationTrue>
            이 책으로 북토크 열러가기
            <Image
              src={MyBookNextIcon}
              width={5.647}
              height={9.882}
              alt="북토크 등록하기"
            />
          </BooktalkRegistrationTrue>
          <BooktalkRegistrationFalse>
            등록 심사중
            <Image
              src={MyBookNextIconGray}
              width={5.647}
              height={9.882}
              alt="북토크 등록하기"
            />
          </BooktalkRegistrationFalse>
        </MyBookContainer>
        {/* <HorizontalLine /> */}
      </MyBookWrapper>
      <HorizontalLine />
    </>
  );
}

export default SingleMyBook;

const MyBookWrapper = styled.div`
  display: flex;

  width: 33.3rem;
  height: 13.3rem;
`;

const MyBookContainer = styled.div`
  display: flex;

  position: relative;

  width: 33.3rem;
  height: 13.3rem;

  /* margin-top: 3.5rem; */
  /* margin-left: 2.6rem; */
  /* margin-bottom: 1.6rem; */
`;

const MyBookImageContainer = styled.div`
  width: 8rem;
  height: 11.7rem;

  img {
    width: 8rem;
    height: 11.7rem;
  }
`;

const MyBookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 2l.4rem;

  margin-left: 2.6rem;
`;

const MyBookTitle = styled.h1`
  ${({ theme }) => theme.fonts.subhead3_semibold};
  color: ${({ theme }) => theme.colors.black};
  line-height: 2.2rem;
`;

const MyBookCategory = styled.h2`
  ${({ theme }) => theme.fonts.body3_medium};
  color: ${({ theme }) => theme.colors.gray04};
  line-height: 2.2rem;
`;

const MyBooktalkCount = styled.h3`
  ${({ theme }) => theme.fonts.body3_medium};
  color: ${({ theme }) => theme.colors.gray04};
  line-height: 2.2rem;
`;

const BooktalkRegistrationTrue = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  position: absolute;

  width: 15rem;
  height: 2.8rem;

  margin-left: 16.9rem;
  margin-right: 1.4rem;

  margin-top: 8.9rem;
  /* margin-bottom: 1.6rem; */

  /* padding: 0.6rem 0.8rem; */

  color: ${({ theme }) => theme.colors.green08};
  ${({ theme }) => theme.fonts.body3_regular};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.green03};
  border-radius: 2.9rem;

  img {
    margin-left: 0.4rem;
  }
`;

const BooktalkRegistrationFalse = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  margin-left: 22.3rem;
  margin-top: 8.9rem;
  margin-bottom: 1.6rem;

  padding: 0.6rem 0.8rem;

  color: ${({ theme }) => theme.colors.gray05};
  ${({ theme }) => theme.fonts.body3_regular};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 2.9rem;
  border: 1px solid ${({ theme }) => theme.colors.gray10};

  img {
    margin-left: 0.4rem;
  }
`;

const HorizontalLine = styled.hr`
  margin-left: 2.8rem;
  margin-right: 1.4rem;

  border-top: 1px solid ${({ theme }) => theme.colors.gray10};
`;
