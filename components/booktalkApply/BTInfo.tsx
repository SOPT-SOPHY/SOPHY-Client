import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import icBook from '../../assets/icon/ic_book.svg';
import icPerson from '../../assets/icon/ic_person.svg';
import icBookinfo from '../../assets/icon/ic_bookinformation.svg';
import icCoin from '../../assets/icon/ic_coin.svg';
import icField from '../../assets/icon/ic_field.svg';
import icPeople from '../../assets/icon/ic_people.svg';
import icPin from '../../assets/icon/ic_pin.svg';
import icPreinfo from '../../assets/icon/ic_preinformation.svg';
import icQuotes from '../../assets/icon/ic_quotes.svg';
import icSchedule from '../../assets/icon/ic_schedule.svg';
import sophySpaceinfo from '../../assets/img/sophy_spaceinfo.svg';

interface BTInfoProps {
  title: string;
  writer: string;
  field: string;
  bookInfo: string;
  date: string;
  people: number;
  price: string;
  preInfo: string;
  introduction: string;
  spaceName: string;
  spaceAddress: string;
}

function BTInfo({
  title,
  writer,
  field,
  bookInfo,
  date,
  people,
  price,
  preInfo,
  introduction,
  spaceName,
  spaceAddress,
}: BTInfoProps) {
  return (
    <>
      <InfoContainer>
        <InfoBox>
          <IconWrapper>
            <Image src={icBook} width={24} height={24} alt="제목" />
          </IconWrapper>
          <InfoCategory>제목</InfoCategory>
        </InfoBox>
        <BtTitleContainer>
          <BtTitle>{title}</BtTitle>
        </BtTitleContainer>
      </InfoContainer>
      <HorizontalLine />
      <InfoContainer>
        <InfoBox>
          <IconWrapper>
            <Image src={icPerson} width={24} height={24} alt="작가" />
          </IconWrapper>
          <InfoCategory>작가</InfoCategory>
        </InfoBox>
        <BtTitleContainer>
          <BtTitle>{writer}</BtTitle>
        </BtTitleContainer>
      </InfoContainer>
      <HorizontalLine />
      <InfoContainer>
        <InfoBox>
          <IconWrapper>
            <Image src={icField} width={24} height={24} alt="작가" />
          </IconWrapper>
          <InfoCategory>분야</InfoCategory>
        </InfoBox>
        <BtTitleContainer>
          <BtTitle>{field}</BtTitle>
        </BtTitleContainer>
      </InfoContainer>
      <HorizontalLine />
      <InfoContainer>
        <InfoBox>
          <IconWrapper>
            <Image src={icBookinfo} width={24} height={24} alt="작가" />
          </IconWrapper>
          <InfoCategory>도서정보</InfoCategory>
        </InfoBox>
        <BtTitleContainer>
          <BtTitle>{bookInfo}</BtTitle>
        </BtTitleContainer>
      </InfoContainer>
      <HorizontalLine />
      <InfoContainer>
        <InfoBox>
          <IconWrapper>
            <Image src={icSchedule} width={24} height={24} alt="작가" />
          </IconWrapper>
          <InfoCategory>개최일정</InfoCategory>
        </InfoBox>
        <BtTitleContainer>
          <BtTitle>{date}</BtTitle>
        </BtTitleContainer>
      </InfoContainer>
      <HorizontalLine />
      <InfoContainer>
        <InfoBox>
          <IconWrapper>
            <Image src={icPeople} width={24} height={24} alt="작가" />
          </IconWrapper>
          <InfoCategory>모집인원</InfoCategory>
        </InfoBox>
        <BtTitleContainer>
          <BtTitle>{people}명</BtTitle>
        </BtTitleContainer>
      </InfoContainer>
      <HorizontalLine />
      <InfoContainer>
        <InfoBox>
          <IconWrapper>
            <Image src={icCoin} width={24} height={24} alt="작가" />
          </IconWrapper>
          <InfoCategory>참가비</InfoCategory>
        </InfoBox>
        <BtTitleContainer>
          <BtTitle>{price}</BtTitle>
        </BtTitleContainer>
      </InfoContainer>
      <HorizontalLine />
      <InfoContainer>
        <InfoBox>
          <IconWrapper>
            <Image src={icPreinfo} width={24} height={24} alt="작가" />
          </IconWrapper>
          <InfoCategory>사전정보</InfoCategory>
        </InfoBox>
        <BtTitleContainer>
          <BtTitle>{preInfo}</BtTitle>
        </BtTitleContainer>
      </InfoContainer>
      <HorizontalLine />
      <InfoContainer>
        <InfoBox>
          <IconWrapper>
            <Image src={icQuotes} width={24} height={24} alt="작가" />
          </IconWrapper>
          <InfoCategory>소개</InfoCategory>
        </InfoBox>
        <BtTitleContainer>
          <BtTitle />
        </BtTitleContainer>
      </InfoContainer>
      {/* <HorizontalLine /> */}
      <IntroductionBox>
        <IntroductionContent>{introduction}</IntroductionContent>
      </IntroductionBox>
      <SpaceBox>
        <SpaceImage>
          <Image
            src={sophySpaceinfo}
            width={335}
            height={114}
            alt="공간이미지"
          />
          <SpaceIcon>
            <Image src={icPin} width={28} height={28} alt="핀아이콘" />
            <span>공간정보</span>
          </SpaceIcon>
          <SpaceName>{spaceName}</SpaceName>
          <SpaceDetail>{spaceAddress}</SpaceDetail>
        </SpaceImage>
      </SpaceBox>
      <Line />
    </>
  );
}

export default BTInfo;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 33.9rem;
  height: 4.6rem;

  margin-left: 1.6rem;
  margin-right: 2rem;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const IconWrapper = styled.div`
  width: 2.4rem;
  height: 2.4rem;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const InfoCategory = styled.h3`
  margin-left: 0.5rem;

  ${({ theme }) => theme.fonts.body2_regular};
  color: ${({ theme }) => theme.colors.gray05};
`;

const BtTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: center;

  width: 24rem;

  margin-right: 0;
`;

const BtTitle = styled.h3`
  ${({ theme }) => theme.fonts.body2_medium};
  color: ${({ theme }) => theme.colors.gray01};
`;

const HorizontalLine = styled.hr`
  margin-left: 2.4rem;
  margin-right: 2rem;

  border-top: 1px solid ${({ theme }) => theme.colors.gray11};
`;

const Line = styled.hr`
  margin-left: 2.4rem;
  margin-right: 2rem;

  border: none;
`;

const IntroductionBox = styled.div`
  width: 33.5rem;
  height: 11.2rem;
  flex-shrink: 0;

  margin-left: 2rem;
  margin-right: 2rem;

  background-color: ${({ theme }) => theme.colors.gray12};
  border-radius: 0.6rem;
`;

const IntroductionContent = styled.h3`
  display: flex;

  width: 30.3rem;

  margin-left: 1.6rem;
  margin-right: 1.6rem;
  padding-top: 1.6rem;

  color: ${({ theme }) => theme.colors.gray01};
  ${({ theme }) => theme.fonts.body2_medium};
`;

const SpaceBox = styled.div`
  position: relative;

  width: 33.5rem;

  margin-top: 1.6rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 1.3rem;
`;

const SpaceImage = styled.div`
  width: 33.5rem;
  height: 11.4rem;
  flex-shrink: 0;
`;

const SpaceIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;
  height: 2.8rem;
  top: 1.6rem;
  z-index: 1;

  margin-left: 2rem;

  img {
    width: 2.8rem;
    height: 2.8rem;
  }

  span {
    width: 4.9rem;
    height: 2rem;

    margin-left: 0.2rem;
    margin-right: 26rem;

    ${({ theme }) => theme.fonts.body2_medium};
    color: ${({ theme }) => theme.colors.gray01};
  }
`;

const SpaceName = styled.h3`
  position: absolute;
  top: 5.4rem;
  left: 2rem;
  z-index: 1;

  ${({ theme }) => theme.fonts.subhead2_bold};
  color: ${({ theme }) => theme.colors.gray01};
`;

const SpaceDetail = styled.h3`
  position: absolute;
  z-index: 1;
  top: 7.8rem;
  left: 2rem;

  ${({ theme }) => theme.fonts.body2_regular};
  color: ${({ theme }) => theme.colors.gray03};
`;