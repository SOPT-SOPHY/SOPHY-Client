import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import MypageLayout from '../@MypageLayout';
import theme from '../../../styles/theme';
import { PeopleIcon } from '../../../assets/icon';
import { getDate, countDday } from '../../../utils/date';
import { uesFetchMypage } from '../../../hooks/queries/mypage';
import { uesFetchSophyStory } from '../../../hooks/queries/sophyStory';
import BooktalkImage from '../../common/booktalk/BooktalkImage';
import EmptyBookTalk from '../../../pages/home/emptyBookTalk';
import { NewEmptyBooktalkImg } from '../../../assets/img';
import dayjs from 'dayjs';

function BooktalkList() {
  const { mypage } = uesFetchMypage();
  const { sophyStory } = uesFetchSophyStory();
  const booktalkList = sophyStory;
  console.log(booktalkList);
  const router = useRouter();

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
        const { year, month } = getDate(booktalkList[i].startDate);
        handleBooktalkByDate(year, month, booktalkList[i]);
      }
    }

    setBooktalkListByDate(newBookTalkList);
    setBookedYearMonth(yearMonthList);
  }, [mypage, sophyStory]);

  return (
    <>
      <MypageLayout title="예정된 북토크" />
      {booktalkList?.length === 0 ? (
        <>
          <Image
            src={NewEmptyBooktalkImg}
            alt="북토크가 없음을 나타내는 이미지"
            style={{ marginTop: '5.2rem' }}
            width={375}
            height={348}
          />
          <BookTalkEmptyBold>아직 확정된 일정이 없어요</BookTalkEmptyBold>
          <BookTalkEmptyGray>
            새로운 북토크 일정을 만들어보세요
          </BookTalkEmptyGray>
          {/* <OurRegionBookTalkButton
            onClick={() => {
              router.push('/booktalk');
            }}>
            우리동네 북토크 보러가기
          </OurRegionBookTalkButton> */}
        </>
      ) : (
        bookedYearMonth.map((yearMonth) => {
          return (
            <>
              <BooktalkByMonthSection key={yearMonth}>
                <BooktalkByMonthHeader>
                  <Month>
                    {yearMonth.slice(2, 4)}년 {yearMonth.slice(4, 6)}월
                  </Month>
                  <Number>{booktalkListByDate[yearMonth].length}건</Number>
                </BooktalkByMonthHeader>
                {booktalkListByDate &&
                  booktalkListByDate[yearMonth] &&
                  booktalkListByDate[yearMonth].map((booktalk: any) => {
                    return (
                      <BooktalkByMonthWrapper
                        key={booktalk?.booktalkId}
                        onClick={() =>
                          router.push(`/booktalk/${booktalk?.booktalkId}`)
                        }>
                        <BooktalkByMonth>
                          <BooktalkImageWrapper>
                            <BooktalkImage
                              booktalkImageUrl={booktalk?.booktalkImageUrl}
                              startDate={booktalk?.startDate}
                              width={99}
                              height={99}
                            />
                          </BooktalkImageWrapper>
                          <BooktalkInfo>
                            <Title>{booktalk?.title}</Title>
                            <Author>{booktalk?.author}</Author>
                            <DateHour>
                              <Date>
                                {dayjs(booktalk?.startDate).year()}.
                                {dayjs(booktalk?.startDate).month() + 1}.
                                {dayjs(booktalk?.startDate).date()}
                              </Date>
                              <Dot />
                              <Hour>
                                {dayjs(booktalk?.startDate).hour()}시{' '}
                                {dayjs(booktalk?.startDate).minute()
                                  ? `${dayjs(booktalk?.startDate).minute()}분`
                                  : ''}
                                ~ {dayjs(booktalk?.endDate).hour()}시{' '}
                                {dayjs(booktalk?.endDate).minute()
                                  ? `${dayjs(booktalk?.endDate).minute()}분`
                                  : ''}
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
              <Footer>
                신청 취소를 원하실 경우 소피 공식 인스타그램(@sophyinlocal)로
                <br />
                문의를 남겨주세요
              </Footer>
            </>
          );
        })
      )}
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
  ${theme.fonts.subhead2_bold};
  color: ${theme.colors.gray01};
`;
const Number = styled.h2`
  ${theme.fonts.subhead2_bold};
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
const BooktalkImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  width: 9.9rem;
  height: 2.8rem;
  ${theme.fonts.body3_medium};
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
  ${theme.fonts.subhead3_semibold};
  color: ${theme.colors.gray01};
`;
const Author = styled.h2`
  padding-bottom: 1.6rem;
  ${theme.fonts.body3_medium};
  color: ${theme.colors.gray01};
`;
const DateHour = styled.div`
  display: flex;
  align-items: center;

  ${theme.fonts.body3_regular};
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
const Date = styled.div`
  ${theme.fonts.body3_regular};
  color: ${theme.colors.gray04};
`;
const Hour = styled.div`
  ${theme.fonts.body3_regular};
  color: ${theme.colors.gray04};
`;
const SpacePeopleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Space = styled.h3`
  ${theme.fonts.body3_regular};
  color: ${theme.colors.gray04};
`;
const BooktalkPeople = styled.div`
  display: flex;
  align-items: center;
  ${theme.fonts.body2_medium};
  color: ${theme.colors.gray06};
  & > span {
    color: ${theme.colors.primary};
  }
`;
const Footer = styled.footer`
  margin-top: 1.6rem;
  margin-left: 2.6rem;
  ${theme.fonts.body3_regular};
  color: ${theme.colors.gray05};
`;

const BookTalkEmptyBold = styled.div`
  ${theme.fonts.headline3_bold};
  text-align: center;
  margin-top: 4.2rem;
  margin-bottom: 0.8rem;
`;

const BookTalkEmptyGray = styled.div`
  ${theme.fonts.body1_medium};
  color: ${theme.colors.gray06};
  text-align: center;
`;

const OurRegionBookTalkButton = styled.button`
  width: 33.5rem;
  height: 5.2rem;

  margin-left: 2rem;
  margin-top: 9.3rem;
  margin-bottom: 10rem;

  border: none;
  border-radius: 0.6rem;

  background-color: ${theme.colors.primary};
  color: white;

  ${theme.fonts.subhead3_semibold};
`;
