import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import backArrow from '../../../assets/icon/ic_backArrow.svg';
import detailImage from '../../../assets/img/detailImage.png';
import icBook from '../../../assets/icon/ic_book.svg';
import icPerson from '../../../assets/icon/ic_person.svg';
import icBookinfo from '../../../assets/icon/ic_bookinformation.svg';
import icCoin from '../../../assets/icon/ic_coin.svg';
import icField from '../../../assets/icon/ic_field.svg';
import icPeople from '../../../assets/icon/ic_people.svg';
import icPin from '../../../assets/icon/ic_pin.svg';
import icPreinfo from '../../../assets/icon/ic_preinformation.svg';
import icQuotes from '../../../assets/icon/ic_quotes.svg';
import icSchedule from '../../../assets/icon/ic_schedule.svg';
import sophySpaceinfo from '../../../assets/img/sophy_spaceinfo.svg';
// import CheckBox from '../../components/CheckBox';

function BTDetail() {
  return (
    <Body>
      <Header>
        <ImageContainer>
          <Image src={backArrow} width={44} height={44} alt="뒤로가기" />
        </ImageContainer>
      </Header>
      <hr style={{ borderTop: '1px solid #F6F7FA' }} />
      <DetailImg>
        <Image src={detailImage} width={335} height={184} alt="북토크이미지" />
      </DetailImg>
      <InfoContainer>
        <InfoBox>
          <IconWrapper>
            <Image src={icBook} width={24} height={24} alt="제목" />
          </IconWrapper>
          <InfoCategory>제목</InfoCategory>
        </InfoBox>
        <BtTitleContainer>
          <BtTitle>강민지 작가와 함께하는 기획의 첫 걸음</BtTitle>
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
          <BtTitle>강민지</BtTitle>
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
          <BtTitle>IT/컴퓨터</BtTitle>
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
          <BtTitle>서비스 기획자로 살아남기</BtTitle>
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
          <BtTitle>2023.07.21 14시-15시</BtTitle>
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
          <BtTitle>6명</BtTitle>
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
          <BtTitle>무료</BtTitle>
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
          <BtTitle>발췌문을 드려요</BtTitle>
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
        <IntroductionContent>
          서비스 기획 10년 차 강민지 작가의, 왕초보를 위한 서비스 기획 꿀팁
          대방출! ~~한 사람들을 대상으로 ~~ 활동을 해왔던 작가는 이번 북토크에서
          ~~를 하고자 합니다. ~~
        </IntroductionContent>
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
          <SpaceName>의정부 미술도서관</SpaceName>
          <SpaceDetail>경기도 의정부시 민락로 304-1</SpaceDetail>
        </SpaceImage>
      </SpaceBox>
      <HorizontalLine />
      {/* <CheckBox /> */}
    </Body>
  );
}

export default BTDetail;

const Body = styled.div`
  width: 37.5rem;

  margin: 0 auto;
  padding: 0;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 4.4rem;

  margin-top: 4.4rem;
`;

const ImageContainer = styled.div`
  width: 4.4rem;
  height: 4.4rem;

  img {
    width: 4.4rem;
    height: 4.4rem;
  }
`;

const DetailImg = styled.div`
  margin-top: 2.1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 1.9rem;

  img {
    width: 33.5rem;
    height: 18.4rem;
    flex-shrink: 0;
  }
`;

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
  margin-left: 1.6rem;
  margin-right: 2rem;
  margin-bottom: 3.2rem;
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
  z-index: 1;
  top: 5.4rem;
  left: 2rem;

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
