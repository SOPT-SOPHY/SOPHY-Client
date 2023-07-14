import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import MypageLayout from './@MypageLayout';
import theme from '../../styles/theme';
import { PeopleIcon } from '../../assets/icon';
import getDate from '../../utils/getDate';

function BooktalkList() {
  const booktalks = [
    {
      booktalk_id: 1,
      booktalk_image_url: 'dwqE@EWQDQFQEWQ',
      title: '테스트 타이틀',
      author: '작가',
      start_date: '2023-07-13T13:00:00',
      end_date: '2023-07-13T15:00:00',
      place: '장소',
      participant: 1,
      maximum: 6,
      booktalk_status: 'RECRUITING',
    },
    {
      booktalk_id: 2,
      booktalk_image_url: 'dwqE@EWQDQFQEWQ',
      title: '테스트 타이틀2',
      author: '작가',
      start_date: '2023-07-18T16:00:00',
      end_date: '2023-07-18T18:00:00',
      place: '장소',
      participant: 1,
      maximum: 6,
      booktalk_status: 'PLACE_CONFIRMED',
    },
    {
      booktalk_id: 3,
      booktalk_image_url: 'dwqE@EWQDQFQEWQ',
      title: '테스트 타이틀3',
      author: '작가',
      start_date: '2023-08-13T13:00:00',
      end_date: '2023-08-13T15:00:00',
      place: '장소',
      participant: 1,
      maximum: 6,
      booktalk_status: 'RECRUITING',
    },
    {
      booktalk_id: 4,
      booktalk_image_url: 'dwqE@EWQDQFQEWQ',
      title: '테스트 타이틀4',
      author: '작가',
      start_date: '2023-10-18T16:00:00',
      end_date: '2023-10-18T18:00:00',
      place: '장소',
      participant: 1,
      maximum: 6,
      booktalk_status: 'PLACE_CONFIRMED',
    },
  ];
  // id에 맞는 객체를 반환
  const IdtoObj: object = (id: number) => {
    return booktalk[id - 1];
  };

  // 날짜와 북토크객체의 쌍을 이루는 객체를 만들어주는 함수
  const newBookTallkList = {};
  const handleBooktalkByDate = (year: number, month: number, id: number) => {
    const yearMonth = `${year}${month}`;
    if (Object.keys(newBookTallkList).includes(yearMonth)) {
      newBookTallkList[yearMonth].push(id);
    } else {
      newBookTallkList[yearMonth] = [id];
    }
  };

  useEffect(() => {
    booktalks.map((booktalk) =>
      handleBooktalkByDate(
        getDate(booktalk.start_date).year,
        getDate(booktalk.start_date).month,
        booktalk.booktalk_id,
      ),
    );
  }, [booktalks]);

  return (
    <>
      <MypageLayout title="예정된 북토크" />
      <BooktalkByMonthSection>
        {Object.entries(newBookTallkList).map(([key, value]) => (
          <>
            <BooktalkByMonthHeader>
              <Month>{key}</Month>
              <Number>2건</Number>
            </BooktalkByMonthHeader>
            <BooktalkByMonthWrapper>
              <Divider />
              <BooktalkByMonth>
                <BooktalkImage>
                  {/* <Image /> */}
                  <ImageCaption>D-16</ImageCaption>
                </BooktalkImage>
                <BooktalkInfo>
                  <Title>{IdtoObj(value).title}</Title>
                  <Author>{IdtoObj(value).author}</Author>
                  <DateHour>
                    <Date>
                      {getDate(IdtoObj(value).start_date).year}년{' '}
                      {getDate(IdtoObj(value).start_date).month}월{' '}
                      {getDate(IdtoObj(value).start_date).date}일
                    </Date>
                    <Dot />
                    <Hour>
                      {getDate(IdtoObj(value).start_date).hour}시~
                      {getDate(IdtoObj(value).end_date).hour}시
                    </Hour>
                  </DateHour>
                  <SpacePeopleWrapper>
                    <Space>{IdtoObj(value).place}</Space>
                    <BooktalkPeople>
                      <Image
                        src={PeopleIcon}
                        alt="사람 아이콘"
                        width={24}
                        height={24}
                      />
                      <span>{IdtoObj(value).participant}</span>/
                      {IdtoObj(value).maximum}
                    </BooktalkPeople>
                  </SpacePeopleWrapper>
                </BooktalkInfo>
              </BooktalkByMonth>
              <Divider />
            </BooktalkByMonthWrapper>
          </>
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
