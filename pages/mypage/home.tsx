import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import NextIcon from '../../assets/icon/NextIcon.svg';
import NonLocalCertificationIcon from '../../assets/icon/NonLocalCertificationIcon.svg';
import {
  NavBookGrayIcon,
  NavHomeColorIcon,
  NavPersonGrayIcon,
  NavPinGrayIcon,
} from '../../assets/icon';
import Card from '../../components/mypage/Card';
import PredictedBT from '../../components/mypage/PredictedBT';

function MySophy() {
  return (
    <Body>
      <Header>
        *<Title>나의 소피</Title>
      </Header>
      <Profile>
        <UserWrapper>
          <UserName>
            <h1>구경민</h1>
            <h2>님</h2>
          </UserName>
          <ButtonWrapper>
            <Image
              src={NextIcon}
              width={20}
              height={20}
              alt="유저 정보 수정 아이콘"
            />
          </ButtonWrapper>
        </UserWrapper>
        <NonLocalCertification>
          <Image
            src={NonLocalCertificationIcon}
            width={87}
            height={28}
            alt="지역 인증 전 아이콘"
          />
        </NonLocalCertification>
      </Profile>
      <Card />
      <PredictedBT />
      <ListWrapper>
        <List>
          <h1>작가 인증하기</h1>
          <h1>개인정보 처리 방침</h1>
          <h1>서비스 이용 약관</h1>
        </List>
      </ListWrapper>
      <FooterWrapper>
        <Footer>
          <IconsWrapper>
            <IconWrapper>
              <Image src={NavHomeColorIcon} alt="홈 화면 바로가기 아이콘" />
              <IconText>홈</IconText>
            </IconWrapper>
            <IconWrapper>
              <Image src={NavPinGrayIcon} alt="지역 화면 바로가기 아이콘" />
              <UnClickedIconText>지역</UnClickedIconText>
            </IconWrapper>
            <IconWrapper>
              <Image
                src={NavBookGrayIcon}
                alt="소피스토리 화면 바로가기 아이콘"
              />
              <UnClickedIconText>소피스토리</UnClickedIconText>
            </IconWrapper>
            <IconWrapper>
              <Image src={NavPersonGrayIcon} alt="MY 페이지 바로가기 아이콘" />
              <UnClickedIconText>MY</UnClickedIconText>
            </IconWrapper>
          </IconsWrapper>
        </Footer>
      </FooterWrapper>
    </Body>
  );
}

export default MySophy;

const Body = styled.div`
  width: 37.5rem;

  margin: 0 auto;
  padding: 0;

  background-color: ${({ theme }) => theme.colors.white};

  border: 1px solid ${({ theme }) => theme.colors.gray11};
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  position: fixed;
  width: 37.5rem;
  height: 4.4rem;
  z-index: 2;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.subhead2_bold};
  color: ${({ theme }) => theme.colors.black};
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  height: 4.4rem;
  gap: 0.4rem;

  margin-top: 7.1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 1.4rem;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  h1 {
    ${({ theme }) => theme.fonts.headline3_bold};
    color: ${({ theme }) => theme.colors.gray01};
  }

  h2 {
    ${({ theme }) => theme.fonts.subhead1_medium};
    color: ${({ theme }) => theme.colors.gray01};
  }
`;

const ButtonWrapper = styled.span`
  img {
    width: 2rem;
    height: 2rem;
  }
`;

const NonLocalCertification = styled.div`
  display: flex;
  margin-left: img {
    width: 8.7rem;
    height: 2.8rem;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 37.5rem;
  height: 8.3rem;

  padding-left: 3rem;
  padding-right: 3rem;

  margin-top: 1rem;

  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: 0rem -0.4rem 0.8rem rgba(54, 57, 60, 4%);
`;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
`;

const IconWrapper = styled.div`
  text-align: center;
  width: 4.9rem;
  height: 5.1rem;
`;

const IconText = styled.div`
  text-align: center;

  ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.green06};
`;

const UnClickedIconText = styled.div`
  text-align: center;

  ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.colors.gray06};
`;

const IconsWrapper = styled.div`
  width: 32.5rem;
  display: flex;
  justify-content: space-between;
`;

const ListWrapper = styled.div`
  margin-top: 3.2rem;
  margin-left: 2rem;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  h1 {
    ${({ theme }) => theme.fonts.body1_medium};
    color: ${({ theme }) => theme.colors.black};
  }
`;
