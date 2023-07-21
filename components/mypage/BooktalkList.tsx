import React, { useEffect, useState } from 'react';
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

  const [booktalkListByDate, setBooktalkListByDate] = useState<any>({});
  const [bookedYearMonth, setBookedYearMonth] = useState<string[]>([]);

  // 날짜와 북토크객체의 쌍을 이루는 객체를 만들어주는 함수
  const newBookTalkList: any = {};
  const yearMonthList: string[] = [];
  const handleBooktalkByDate: any = (
    year: number,
    month: number,
    booktalk: object,
  ) => {
    const yearMonth = `${year}${month}`;
    if (Object.keys(newBookTalkList).includes(yearMonth)) {
      newBookTalkList[yearMonth].push(booktalk);
    } else {
      newBookTalkList[yearMonth] = [booktalk];
      yearMonthList.push(yearMonth);
    }
  };
  useEffect(() => {
    if (booktalkList) {
      for (let i = 0; i < booktalkList.length; i += 1) {
        const { year, month } = getDate(booktalkList[i].start_date);
        handleBooktalkByDate(year, month, booktalkList[i]);
      }
    }
    // booktalkList?.map((booktalk: any) => {
    //   const { year, month } = getDate(booktalk.start_date);
    //   handleBooktalkByDate(year, month, booktalk);
    // });
    setBooktalkListByDate(newBookTalkList);
    setBookedYearMonth(yearMonthList);
  }, [newBookTalkList, yearMonthList, booktalkList]);

  //   const countDday = (dDay: any) => {
  //     const setDate = new Date(dDay);
  //     // D-day 날짜의 연,월,일 구하기
  //     // const setDateYear = setDate.getFullYear();
  //     // getMonth 메서드는 0부터 세기 때문에 +1 해준다.
  //     // 현재 날짜를 new 연산자를 사용해서 Date 객체를 생성
  //     const now = new Date();

  //     // D-Day 날짜에서 현재 날짜의 차이를 getTime 메서드를 사용해서 밀리초의 값으로 가져온다.
  //     const distance = setDate.getTime() - now.getTime();

  //     // Math.floor 함수를 이용해서 근접한 정수값을 가져온다.
  //     // 밀리초 값이기 때문에 1000을 곱한다.
  //     // 1000*60 => 60초(1분)*60 => 60분(1시간)*24 = 24시간(하루)
  //     // 나머지 연산자(%)를 이용해서 시/분/초를 구한다.
  //     const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     return day;
  //   };

  return (
    <>
      <MypageLayout title="예정된 북토크" />
      {bookedYearMonth.map((yearMonth) => {
        return (
          <BooktalkByMonthSection key={yearMonth}>
            <BooktalkByMonthHeader>
              <Month>
                {yearMonth.slice(2, 4)}년 {yearMonth.slice(4, 5)}월
              </Month>
              <Number>{booktalkListByDate[yearMonth].length}건</Number>
            </BooktalkByMonthHeader>
            {booktalkListByDate &&
              booktalkListByDate[yearMonth] &&
              booktalkListByDate[yearMonth].map((booktalk: any) => {
                return (
                  <BooktalkByMonthWrapper key={booktalk?.booktalk_id}>
                    <BooktalkByMonth>
                      <BooktalkImage>
                        <ImageCaption>
                          D{/* D-{countDday(booktalk?.start_date)} */}
                        </ImageCaption>
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
                            <span>{booktalk?.participant}</span>/
                            {booktalk?.maximum}
                          </BooktalkPeople>
                        </SpacePeopleWrapper>
                      </BooktalkInfo>
                    </BooktalkByMonth>
                    <Divider />
                  </BooktalkByMonthWrapper>
                );
              })}
          </BooktalkByMonthSection>
        );
      })}
      <Footer>
        신청 취소를 원하실 경우 소피 공식 이메일 (sophykoreaofficial@gmail.com)
        로 문의를 남겨주세요
      </Footer>
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
const BooktalkByMonthWrapper = styled.div`
  margin-bottom: 1.6rem;
`;
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
