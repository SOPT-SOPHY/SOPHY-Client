import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import icPeople from '../../assets/icon/ic_people_count.svg';
import ellipseIcon from '../../assets/icon/EllipseIcon.svg';

interface BooktalkProps {
  booktalk_id: number;
  preliminary_info: string;
  title: string;
  author: string;
  start_date: string;
  end_date: string;
  place: string;
  participant: number;
  maximum: number;
  booktalk_image_url: string;
}

interface SingleBookTalkProps {
  item: BooktalkProps;
  onClick?: (booktalkId: number) => void;
}

function SingleBookTalk({ item, onClick }: SingleBookTalkProps) {
  const handleBooktalkClick = () => {
    if (onClick) {
      onClick(item?.booktalk_id);
    }
  };
  const startDate = new Date(item?.start_date);
  const endDate = new Date(item?.end_date);

  const formattedStartDate = `${startDate
    .getFullYear()
    .toString()
    .slice(2)}년 ${startDate.getMonth() + 1}월 ${startDate.getDate()}일`;

  const formattedStartTime = `${startDate.getHours()}시`;
  const formattedEndTime = `${endDate.getHours()}시`;

  const formattedDateTime = `${formattedStartTime}~${formattedEndTime}`;

  return (
    <>
      <BookTalkWrapper onClick={handleBooktalkClick}>
        <ImageContainer src={item?.booktalk_image_url} alt="북토크 썸네일">
          {/* <Image src={item.flag.large} width={99} height={99} alt="국가 이미지" /> */}
        </ImageContainer>
        <TextWrapper>
          <BookName>{item?.title}</BookName>
          <WriterName>{item?.author}</WriterName>
          <BTDate>
            {formattedStartDate}
            <Image src={ellipseIcon} width={3} height={3} alt="원아이콘" />
            {formattedDateTime}
          </BTDate>
          <Space>
            {Array.isArray(item?.place) ? item?.place.join(', ') : item?.place}
          </Space>
        </TextWrapper>
        <CountWrapper>
          <Image src={icPeople} width={24} height={24} alt="사람" />
          <Count>{item?.participant}</Count>
          <TotalCount>/{item?.maximum}</TotalCount>
        </CountWrapper>
      </BookTalkWrapper>
      <HorizontalLine />
    </>
  );
}

SingleBookTalk.defaultProps = {
  onClick: undefined, // 허스키 기본값 설정
};

export default SingleBookTalk;

// 나머지 스타일 컴포넌트 코드 생략

const BookTalkWrapper = styled.div`
  display: flex;
  flex-direction: row;

  position: relative;
  cursor: pointer;

  margin-top: 1.7rem;
  margin-bottom: 1.3rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const ImageContainer = styled.img`
  width: 9.9rem;
  height: 9.9rem;
  flex-shrink: 0;

  margin-right: 1.5rem;

  border-radius: 1rem;
  background: #f4f4f4;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 16.2rem;
`;

const BookName = styled.h1`
  height: 2.4rem;
  margin-bottom: 0.3rem;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${({ theme }) => theme.fonts.subhead3_semibold};
  color: ${({ theme }) => theme.colors.gray01};
`;

const WriterName = styled.h2`
  margin-bottom: 1.9rem;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${({ theme }) => theme.fonts.body3_medium};
  color: ${({ theme }) => theme.colors.gray01};
`;

const BTDate = styled.h3`
  display: flex;
  align-items: center;

  margin-bottom: 0.5rem;

  ${({ theme }) => theme.fonts.body3_regular};
  color: ${({ theme }) => theme.colors.gray04};

  img {
    margin-left: 0.4rem;
    margin-right: 0.4rem;
  }
`;

const Space = styled.h3`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${({ theme }) => theme.fonts.body3_regular};
  color: ${({ theme }) => theme.colors.gray04};
`;

const CountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;

  margin-top: 8rem;
  margin-left: 28.8rem;
  margin-right: 2rem;

  /* margin-right: 2rem; */

  img {
    width: 2.4rem;
    height: 2.4rem;
    flex-shrink: 0;
  }
`;

const Count = styled.h1`
  ${({ theme }) => theme.fonts.body2_medium};
  color: ${({ theme }) => theme.colors.primary};
`;

const TotalCount = styled.h1`
  ${({ theme }) => theme.fonts.body2_medium};
  color: ${({ theme }) => theme.colors.gray06};
`;

const HorizontalLine = styled.hr`
  margin-left: 2.2rem;
  margin-right: 2rem;

  border-top: 1px solid ${({ theme }) => theme.colors.gray11};
`;
