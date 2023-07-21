import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import router from 'next/router';
import rectangleBook from '../../assets/img/rectangleBook.png';
import MyBookNextIcon from '../../assets/icon/MyBookNextIcon.svg';
import MyBookNextIconGray from '../../assets/icon/MyBookNextIconGray.svg';

interface SingleMyBookProps {
  title: string;
  bookCategory: string;
  booktalkOpenCount: number;
  isRegistration: boolean;
}

function SingleMyBook({
  title,
  bookCategory,
  booktalkOpenCount,
  isRegistration,
}: SingleMyBookProps) {
  const encodeCategory = (category: string) => {
    switch (category) {
      case 'HUMANITIES':
        return '인문';
      case 'LITERATURE':
        return '문학';
      case 'SOCIETY':
        return '사회';
      case 'ESSAY':
        return '에세이';
      case 'ART':
        return '예술';
      case 'SCIENCE':
        return '과학';
      case 'PARENTING':
        return '육아';
      case 'DAILY_HOBBY':
        return '일상_취미';
      case 'CHILDREN':
        return '어린이';
      case 'YOUTH':
        return '청소년';
      case 'IT_COMPUTER':
        return 'IT_컴퓨터';
      case 'SELF_DEVELOPMENT':
        return '자기계발';
      case 'HEALTH_COOKING':
        return '건강_요리';
      case 'TRAVEL':
        return '여행';
      case 'ETC':
        return '기타';
      default:
        return '';
    }
  };

  const decodeCategory = encodeCategory(bookCategory);

  const handleGoToBooktalkOpen = () => {
    router.push('../author/form');
  };

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
            <MyBookTitle>{title}</MyBookTitle>
            <MyBookCategory>{decodeCategory}</MyBookCategory>
            <MyBooktalkCount>북토크 개최 {booktalkOpenCount}회</MyBooktalkCount>
          </MyBookInfoContainer>
          {isRegistration ? (
            <BooktalkRegistrationTrue onClick={handleGoToBooktalkOpen}>
              이 책으로 북토크 열러가기
              <Image
                src={MyBookNextIcon}
                width={5.647}
                height={9.882}
                alt="북토크 등록하기"
              />
            </BooktalkRegistrationTrue>
          ) : (
            <BooktalkRegistrationFalse>
              등록 심사중
              <Image
                src={MyBookNextIconGray}
                width={5.647}
                height={9.882}
                alt="북토크 등록하기"
              />
            </BooktalkRegistrationFalse>
          )}
        </MyBookContainer>
        <HorizontalLine />
      </MyBookWrapper>
      {/* <HorizontalLine /> */}
    </>
  );
}

export default SingleMyBook;

const MyBookWrapper = styled.div`
  /* display: flex;

  width: 33.3rem;
  height: 13.3rem; */
  /* margin-top: 1.6rem; */
  margin-bottom: 1.6rem;
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

  margin-left: 23.8rem;
  margin-top: 8.9rem;
  margin-bottom: 1.6rem;

  padding: 0.6rem 0.8rem;

  cursor: default;

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
