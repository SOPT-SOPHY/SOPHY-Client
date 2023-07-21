import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import MypageLayout from './@MypageLayout';
import theme from '../../styles/theme';
import { PeopleIcon } from '../../assets/icon';
import { getDate } from '../../utils/date';
import { uesFetchMypage } from '../../hooks/queries/mypage';

function BooktalkList() {
  const { mypage } = uesFetchMypage();

  const booktalkList = mypage?.my_page_booktalk_dtos;
  //   getDate(booktalk?.start_date).year;
  //   getDate(booktalk?.start_date).month;
  return (
    <>
      <MypageLayout title="예정된 북토크" />
      <BooktalkByMonthSection>
        <BooktalkByMonthHeader>
          <Month>7</Month>
          <Number>2건</Number>
        </BooktalkByMonthHeader>
        {booktalkList &&
          booktalkList.map((booktalk) => (
            <BooktalkByMonthWrapper key={booktalk?.booktalk_id}>
              <BooktalkByMonth>
                <BooktalkImage>
                  <ImageCaption>D-16</ImageCaption>
                </BooktalkImage>
                <BooktalkInfo>
                  <Title>{booktalk?.title}</Title>
                  <Author>{booktalk?.author}</Author>
                  <DateHour>
                    <Date>
                      {getDate(booktalk?.start_date).year}년{' '}
                      {getDate(booktalk?.start_date).month}월{' '}
                      {getDate(booktalk?.start_date).date}일
                    </Date>
                    <Dot />
                    <Hour>
                      {getDate(booktalk?.start_date).hour}시~
                      {getDate(booktalk?.end_date).hour}시
                    </Hour>
                  </DateHour>
                  <SpacePeopleWrapper>
                    <Space>{booktalk?.place}</Space>
                    <BooktalkPeople>
                      <Image
                        src={PeopleIcon}
                        alt="사람 아이콘"
                        width={24}
                        height={24}
                      />
                      <span>{booktalk?.participant}</span>/{booktalk?.maximum}
                    </BooktalkPeople>
                  </SpacePeopleWrapper>
                </BooktalkInfo>
              </BooktalkByMonth>
              <Divider />
            </BooktalkByMonthWrapper>
          ))}

        <Footer>
          신청 취소를 원하실 경우 소피 공식 이메일
          (sophykoreaofficial@gmail.com) 로 문의를 남겨주세요
        </Footer>
      </BooktalkByMonthSection>
    </>
  );
}

export default BooktalkList;
const BooktalkByMonthSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 37.5rem;
`;
const BooktalkByMonthHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
  height: 4.8rem;
`;
const Month = styled.h1`
  font: ${theme.fonts.subhead2_bold};
  color: ${theme.colors.gray01};
`;
const Number = styled.h2`
  font: ${theme.fonts.subhead2_bold};
  color: ${theme.colors.gray04};
`;
const BooktalkByMonthWrapper = styled.div``;
const BooktalkByMonth = styled.div`
  display: flex;
  align-items: center;
  width: 33.5rem;
  height: 13rem;
`;
const BooktalkImage = styled.div`
  width: 9.9rem;
  height: 9.9rem;
  border-radius: 1rem;
  border: none;
  background: ${theme.colors.gray11};
`;
const ImageCaption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.8rem;
  margin-top: 7.1rem;
  font: ${theme.fonts.body3_medium};
  color: ${theme.colors.white};
  background: ${theme.colors.black};
  backdrop-filter: blur(40px);
  opacity: 0.6;
  border-radius: 0rem 0rem 1rem 1rem;
`;
const Divider = styled.div`
  width: 33.3rem;
  height: 0.1rem;
  background: ${theme.colors.gray10};
`;
const BooktalkInfo = styled.div`
  width: 20.9rem;
  height: 9.9rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;
const Title = styled.h1`
  padding-bottom: 0.3rem;
  fonts: ${theme.fonts.subhead3_semibold};
  color: ${theme.colors.gray01};
`;
const Author = styled.h2`
  padding-bottom: 1.6rem;
  fonts: ${theme.fonts.body3_medium};
  color: ${theme.colors.gray01};
`;
const DateHour = styled.div`
  display: flex;
  align-items: center;
  /* padding-bottom: 0.5rem; */

  fonts: ${theme.fonts.body3_regular};
  color: ${theme.colors.gray04};
`;
const Dot = styled.div`
  width: 0.2rem;
  height: 0.2rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border: 1rem;
  background: ${theme.colors.gray08};
`;
const Date = styled.h3``;
const Hour = styled.h3``;
const SpacePeopleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Space = styled.h3`
  fonts: ${theme.fonts.body3_regular};
  color: ${theme.colors.gray04};
`;
const BooktalkPeople = styled.div`
  display: flex;
  align-items: center;
  fonts: ${theme.fonts.body2_medium};
  color: ${theme.colors.gray06};
  & > span {
    color: ${theme.colors.primary};
  }
`;
const Footer = styled.footer`
  margin-top: 1.6rem;
  margin-left: 2.6rem;
  fonts: ${theme.fonts.body3_regular};
  color: ${theme.colors.gray05};
`;
