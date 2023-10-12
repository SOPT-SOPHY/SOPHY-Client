import React from 'react';
import { styled } from 'styled-components';
import theme from '../../../styles/theme';
import dayjs from 'dayjs';
import Image from 'next/image';
import SpaceInfoImage from '../../../assets/img/sophy_spaceinfo.svg';
import icPin from '../../../assets/icon/ic_pin.svg';

interface BootalkDetailContentType {
  data: any;
}

const BootalkDetailContent = (props: BootalkDetailContentType) => {
  const { data } = props;

  return (
    <div>
      <ContentWrapper>
        <ContentTitle>도서정보</ContentTitle>
        <Content>{data.book}</Content>
      </ContentWrapper>
      <ContentWrapper>
        <ContentTitle>개최일정</ContentTitle>
        <Content>
          {dayjs(data.startDate).year()}.{dayjs(data.startDate).month()}.
          {dayjs(data.startDate).day()} {dayjs(data.startDate).hour()}시~
          {dayjs(data.endDate).hour()}시
        </Content>
      </ContentWrapper>
      <ContentWrapper>
        <ContentTitle>모집인원</ContentTitle>
        <Content>{data.participant}명</Content>
      </ContentWrapper>
      <ContentWrapper>
        <ContentTitle>참가비</ContentTitle>
        <Content>
          {data.participationFee === 0 ? '무료' : data.participationFee}
        </Content>
      </ContentWrapper>
      <ContentWrapper>
        <ContentTitle>사전정보</ContentTitle>
        <Content>{data.preliminaryInfo}</Content>
      </ContentWrapper>
      <ContentWrapper>
        <ContentTitle>소개</ContentTitle>
      </ContentWrapper>
      <IntroductionBox>{data.description}</IntroductionBox>
      <SpaceInfoWrapper>
        <div style={{ display: 'flex' }}>
          <Image
            src={icPin}
            width={28}
            height={28}
            alt="핀아이콘"
            style={{ marginLeft: '1.6rem', marginTop: '1.3rem' }}
          />
          <div style={{ marginTop: '1.6rem', marginLeft: '0.2rem' }}>
            공간정보
          </div>
        </div>
        <PlaceName>{data.placeName}</PlaceName>
        <PlaceAddress>{data.placeAddress}</PlaceAddress>
      </SpaceInfoWrapper>
    </div>
  );
};

export default BootalkDetailContent;

const ContentWrapper = styled.div`
  display: flex;
  padding-top: 1.3rem;
  margin-bottom: 1.3rem;
  margin-left: 2.2rem;
  border-top: 0.1rem solid ${theme.colors.gray11};
`;

const ContentTitle = styled.div`
  width: 4.9rem;
  margin-right: 2rem;
  ${theme.fonts.body2_regular};
  color: ${theme.colors.gray05};
`;

const Content = styled.div`
  ${theme.fonts.body2_medium};
  color: ${theme.colors.gray01};
`;

const IntroductionBox = styled.div`
  width: 33.5rem;
  background-color: ${theme.colors.gray12};
  color: ${theme.colors.gray01};
  ${theme.fonts.body2_medium};
  padding: 1.6rem;
  margin-bottom: 1.6rem;
  margin-left: 2rem;
`;

const SpaceInfoWrapper = styled.div`
  background-image: url(${SpaceInfoImage.src});
  width: 33.5rem;
  height: 11.4rem;
  border-radius: 0.8rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
  margin-left: 2rem;
  color: ${theme.colors.gray01};
  ${theme.fonts.body2_medium};
`;

const PlaceName = styled.div`
  ${theme.fonts.subhead2_bold};
  color: ${theme.colors.gray01};
  margin-left: 2rem;
  margin-top: 1.1rem;
`;

const PlaceAddress = styled.div`
  ${theme.fonts.body2_regular};
  color: ${theme.colors.gray03};
  margin-left: 2rem;
`;
