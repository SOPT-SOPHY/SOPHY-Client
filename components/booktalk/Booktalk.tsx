import React from 'react';
import PageTitle from '../common/Title/PageTitle';
import { styled } from 'styled-components';
import theme from '../../styles/theme';
import Image from 'next/image';
import { HomeTopImg } from '../../assets/img';
import { BooktalkPeopleIcon } from '../../assets/icon';
import dayjs from 'dayjs';
import { countDday } from '../../utils/date';
import { useRouter } from 'next/router';
import BooktalkImage from '../common/booktalk/BooktalkImage';

const Booktalk = ({ data }: any) => {
  const router = useRouter();
  const now = dayjs();
  console.log(data);
  return (
    <div>
      <PageTitle pageTitleText="우리 동네 북토크" />
      <SelectRegionToggle>의정부시</SelectRegionToggle>
      <ProductCount>검색 결과 {data?.length}건</ProductCount>
      <BooktalkListWrapper>
        {data?.map((item: any) => (
          <BooktalkComponent
            key={item.booktalkId}
            onClick={() => router.push(`/booktalk/${item.booktalkId}`)}>
            {item?.booktalkStatus === 'RECRUITING_EXPECTED' ? (
              <PreBooktalkImageWrapper>
                <BooktalkImage
                  booktalkStatus={item?.booktalkStatus}
                  booktalkImageUrl={item?.booktalkImageUrl}
                  startDate={item?.startDate}
                  width={168}
                  height={168}
                />
              </PreBooktalkImageWrapper>
            ) : (
              <BooktalkImageWrapper>
                <BooktalkImage
                  booktalkStatus={item?.booktalkStatus}
                  booktalkImageUrl={item?.booktalkImageUrl}
                  startDate={item?.startDate}
                  width={168}
                  height={168}
                />
              </BooktalkImageWrapper>
            )}

            <BooktalkTitle>{item.title}</BooktalkTitle>
            <AuthorName>{item.author} 작가</AuthorName>
            <BooktalkDate>
              {dayjs(item.endDate).year()}년 {dayjs(item.endDate).month() + 1}월{' '}
              {dayjs(item.endDate).date()}일
            </BooktalkDate>
            <PriceAndParticipantWrapper>
              <BooktalkPrice>무료</BooktalkPrice>
              <BooktalkParticipants>
                <Image src={BooktalkPeopleIcon} alt="" />
                <span style={{ color: `${theme.colors.primary}` }}>
                  {item.participant}
                </span>
                <span style={{ color: `${theme.colors.gray06}` }}>
                  /{item.maximum}
                </span>
              </BooktalkParticipants>
            </PriceAndParticipantWrapper>
          </BooktalkComponent>
        ))}
      </BooktalkListWrapper>
      {/* todo: 외부 api 지역 연동 */}
    </div>
  );
};

export default Booktalk;

const SelectRegionToggle = styled.div`
  ${theme.fonts.subhead2_bold};

  margin: 1.9rem 0rem 2rem 2.2rem;
`;

const ProductCount = styled.div`
  ${theme.fonts.body2_regular};
  color: ${theme.colors.gray01};

  margin-left: 1.6rem;
  margin-bottom: 0.8rem;
`;

const BooktalkListWrapper = styled.div`
  width: 34.3rem;
  display: grid;
  grid-template-columns: 16.8rem 16.8rem;
  grid-row-gap: 3.2rem;
  grid-column-gap: 0.7rem;

  margin-left: 1.6rem;
  margin-bottom: 10.9rem;
`;

const BooktalkComponent = styled.div`
  width: 16.8rem;
  height: 27rem; //todo: style 수정

  cursor: pointer;
`;

const BooktalkTitle = styled.div`
  ${theme.fonts.body2_bold};
  color: ${theme.colors.gray01};

  margin-top: 1.2rem;
  margin-bottom: 0.4rem;
`;

const AuthorName = styled.div`
  ${theme.fonts.body2_medium};
  color: ${theme.colors.gray01};

  margin-bottom: 0.8rem;
`;

const BooktalkDate = styled.div`
  margin-bottom: 1rem;
  ${theme.fonts.body3_regular};
  color: ${theme.colors.gray04};
`;

const BooktalkPrice = styled.div`
  ${theme.fonts.body2_bold};
  color: ${theme.colors.green06};
`;

const BooktalkParticipants = styled.div`
  ${theme.fonts.body2_medium};
  display: flex;
  align-items: center;

  margin-right: 1.2rem;
`;

const PriceAndParticipantWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PreBooktalkImageWrapper = styled.div`
  background-color: #d9d9d9;
  opacity: 0.5;
  z-index: 1;

  border-radius: 0.8rem;

  width: fit-content;
  height: 16.8rem;

  position: relative;
`;

const BooktalkImageWrapper = styled.div`
  border-radius: 0.8rem;

  width: fit-content;
  height: 16.8rem;

  position: relative;
`;

const BooktalkDday = styled.div`
  position: absolute;
  bottom: 0;

  height: 3rem;
  width: 16.8rem;

  border-radius: 0rem 0rem 0.8rem 0.8rem;

  background-color: rgba(0, 0, 0, 0.2); //todo: design check

  color: white;
  ${theme.fonts.body3_medium};

  display: flex;
  justify-content: center;
  align-items: center;
`;
