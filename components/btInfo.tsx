import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import detailImage from '../assets/img/detailImage.png';
import ic_book from '../assets/icon/ic_book.svg';
import ic_person from '../assets/icon/ic_person.svg';
import ic_bookinformation from '../assets/icon/ic_bookinformation.svg';
import ic_coin from '../assets/icon/ic_coin.svg';
import ic_field from '../assets/icon/ic_field.svg';
import ic_people from '../assets/icon/ic_people.svg';
import ic_pin from '../assets/icon/ic_pin.svg';
import ic_preinformation from '../assets/icon/ic_preinformation.svg';
import ic_quotes from '../assets/icon/ic_quotes.svg';
import ic_schedule from '../assets/icon/ic_schedule.svg';
import sophy_spaceinfo from '../assets/img/sophy_spaceinfo.svg';

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

const BTInfo: React.FC<BTInfoProps> = ({
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
}) => {
  return (
    <>
      <InfoContainer>
        <InfoBox>
          <IconWrapper>
            <Image src={ic_book} width={24} height={24} alt="제목" />
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
            <Image src={ic_person} width={24} height={24} alt="작가" />
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
            <Image src={ic_field} width={24} height={24} alt="작가" />
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
            <Image src={ic_bookinformation} width={24} height={24} alt="작가" />
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
            <Image src={ic_schedule} width={24} height={24} alt="작가" />
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
            <Image src={ic_people} width={24} height={24} alt="작가" />
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
            <Image src={ic_coin} width={24} height={24} alt="작가" />
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
            <Image src={ic_preinformation} width={24} height={24} alt="작가" />
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
            <Image src={ic_quotes} width={24} height={24} alt="작가" />
          </IconWrapper>
          <InfoCategory>소개</InfoCategory>
        </InfoBox>
        <BtTitleContainer>
          <BtTitle></BtTitle>
        </BtTitleContainer>
      </InfoContainer>
      {/* <HorizontalLine /> */}
      <IntroductionBox>
        <IntroductionContent>{introduction}</IntroductionContent>
      </IntroductionBox>
      <SpaceBox>
        <SpaceImage>
          <Image
            src={sophy_spaceinfo}
            width={335}
            height={114}
            alt="공간이미지"
          />
          <SpaceIcon>
            <Image src={ic_pin} width={28} height={28} alt="핀아이콘" />
            <span>공간정보</span>
          </SpaceIcon>
          <SpaceName>{spaceName}</SpaceName>
          <SpaceDetail>{spaceAddress}</SpaceDetail>
        </SpaceImage>
      </SpaceBox>
      <Line />
    </>
  );
};

export default BTInfo;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;

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
  color: var(--gray-gray-05, #959ca4);
  text-align: center;
  font-size: 1.4rem;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  margin-left: 0.5rem;
`;

const BtTitleContainer = styled.div`
  display: flex;
  margin-right: 0;
  justify-content: flex-start;
  text-align: center;

  width: 24rem;
`;

const BtTitle = styled.h3`
  color: var(--gray-gray-01, #36393c);
  font-size: 1.4rem;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
`;

const HorizontalLine = styled.hr`
  border-top: 1px solid #f6f7fa;
  margin-left: 2.4rem;
  margin-right: 2rem;
`;

const Line = styled.hr`
  border: none;
  margin-left: 2.4rem;
  margin-right: 2rem;
`;

const IntroductionBox = styled.div`
  width: 33.5rem;
  height: 11.2rem;
  flex-shrink: 0;

  margin-left: 2rem;
  margin-right: 2rem;

  border-radius: 6px;
  background: var(--gray-gray-12, #fafafc);
`;

const IntroductionContent = styled.h3`
  display: flex;
  width: 30.3rem;

  margin-left: 1.6rem;
  margin-right: 1.6rem;
  padding-top: 1.6rem;

  color: var(--gray-gray-01, #36393c);
  /* body/body2_medium */
  font-size: 14px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const SpaceBox = styled.div`
  position: relative;
  width: 33.5rem;

  margin-top: 1.6rem;
  margin-left: 1.6rem;
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

  z-index: 1;
  height: 2.8rem;

  margin-left: 2rem;
  position: absolute;
  top: 1.6rem;

  img {
    width: 2.8rem;
    height: 2.8rem;
  }

  span {
    width: 4.9rem;
    height: 2rem;
    margin-left: 0.2rem;
    margin-right: 26rem;

    color: var(--gray-gray-01, #36393c);

    /* body/body2_medium */
    font-size: 14px;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
`;

const SpaceName = styled.h3`
  position: absolute;
  z-index: 1;
  top: 5.4rem;
  left: 2rem;

  color: var(--gray-gray-01, #36393c);
  font-size: 18px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
`;

const SpaceDetail = styled.h3`
  position: absolute;
  z-index: 1;
  top: 7.8rem;
  left: 2rem;

  color: var(--gray-gray-03, #64696e);

  /* body/body2_regular */
  font-size: 14px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
