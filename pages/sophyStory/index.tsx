/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Layout from '../../components/Layout';
import theme from '../../styles/theme';
import {
  BlackDownIcon,
  GrayDownIcon,
  NavPinGrayIcon,
  NavPersonGrayIcon,
  NavBookColorIcon,
  NavHomeGrayIcon,
} from '../../assets/icon';
import SophyStorySlider from '../../components/SophyStorySlider';
import { ComputerType, GroupType, LoveType } from '../../assets/img';
import { uesFetchMemberHome } from '../../hooks/queries/home';
import { uesFetchMyInfo } from '../../hooks/queries/mypage';
import { uesFetchSophyStory } from '../../hooks/queries/sophyStory';

function SophyStory() {
  const [isSelected, setIsSelected] = useState('category');
  const router = useRouter();

  const { myInfo } = uesFetchMyInfo();
  const { sophyStory } = uesFetchSophyStory();
  console.log(sophyStory);

  const accessToken = Cookies.get('accessToken');
  const refreshToken = Cookies.get('refreshToken');
  const memberId = Cookies.get('memberId');

  useEffect(() => {
    if (!refreshToken && !accessToken && memberId) {
      Cookies.remove('memberId');
      router.push('auth/login');
    }
  }, [accessToken, refreshToken, router]);

  const data = uesFetchMemberHome();

  return (
    <Layout noHeader noFooter noMenuBar>
      <Head>
        지금까지
        <span
          style={{ color: `${theme.colors.primary}`, marginLeft: '0.3rem' }}>
          3개의
        </span>
        <br />
        소피스토리를 엮었어요
      </Head>
      <ButtonWrapper>
        <CategoryButton
          isSelected={isSelected}
          onClick={() => setIsSelected('category')}>
          All
        </CategoryButton>
        <DateButton
          isSelected={isSelected}
          onClick={() => setIsSelected('date')}>
          July, 2023
          <Image
            src={isSelected === 'date' ? BlackDownIcon : GrayDownIcon}
            alt="더 보기 아이콘"
          />
        </DateButton>
      </ButtonWrapper>
      <SophyStorySlider />
      <SophyType>{data?.name}님의 소피타입</SophyType>
      <Image
        src={LoveType}
        alt="사랑밖에 난 몰라"
        width={303}
        height={67}
        style={{ marginBottom: '1rem' }}
      />
      <Image
        src={GroupType}
        alt="북토크 프로 출첵러"
        width={303}
        height={67}
        style={{ marginBottom: '1rem' }}
      />
      <Image
        src={ComputerType}
        alt="공대생이신가요?"
        width={303}
        height={67}
        style={{ marginBottom: '11.9rem' }}
      />
      <FooterWrapper>
        <Footer>
          <IconsWrapper>
            <IconWrapper>
              <Image
                src={NavHomeGrayIcon}
                alt="홈 화면 바로가기 아이콘"
                onClick={() => router.push('/home')}
              />
              <UnClickedIconText>홈</UnClickedIconText>
            </IconWrapper>
            <IconWrapper>
              <Image
                src={NavPinGrayIcon}
                alt="지역 화면 바로가기 아이콘"
                onClick={() => {
                  if (myInfo?.city === null) {
                    router.push('/booktalk/search/의정부시%20전체');
                  } else {
                    router.push(`/booktalk/search/${myInfo?.city}`);
                  }
                }}
              />
              <UnClickedIconText>지역</UnClickedIconText>
            </IconWrapper>
            <IconWrapper>
              <Image
                src={NavBookColorIcon}
                alt="소피스토리 화면 바로가기 아이콘"
              />
              <IconText>소피스토리</IconText>
            </IconWrapper>
            <IconWrapper>
              <Image
                src={NavPersonGrayIcon}
                alt="MY 페이지 바로가기 아이콘"
                onClick={() => router.push('/mypage/home')}
              />
              <UnClickedIconText>나의 소피</UnClickedIconText>
            </IconWrapper>
          </IconsWrapper>
        </Footer>
      </FooterWrapper>
    </Layout>
  );
}

export default SophyStory;

const Head = styled.div`
  width: 30.3rem;

  ${theme.fonts.headline2_bold};
  color: ${theme.colors.gray02};

  margin-top: 7.3rem;
  margin-bottom: 3.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 30.3rem;
  height: 2.8rem;

  margin-bottom: 3.1rem;
`;

const CategoryButton = styled.div<{ isSelected: string }>`
  width: 4.3rem;
  height: 2.6rem;

  color: ${(props) =>
    props.isSelected === 'category'
      ? theme.colors.gray03
      : theme.colors.gray09};
  background-color: ${(props) =>
    props.isSelected === 'category' ? theme.colors.gray11 : theme.colors.white};

  border-radius: 0.8rem;

  ${theme.fonts.subhead4_bold};
  text-align: center;

  cursor: pointer;
`;

const DateButton = styled.div<{ isSelected: string }>`
  display: flex;
  justify-content: center;

  width: 13.6rem;
  height: 2.6rem;

  color: ${(props) =>
    props.isSelected === 'date' ? theme.colors.gray03 : theme.colors.gray09};
  background-color: ${(props) =>
    props.isSelected === 'date' ? theme.colors.gray11 : theme.colors.white};

  border-radius: 0.8rem;

  ${theme.fonts.subhead4_bold};
  text-align: center;

  cursor: pointer;
`;

const SophyType = styled.div`
  width: 30.3rem;

  color: ${theme.colors.gray02};
  ${theme.fonts.subhead1_bold};

  margin-top: 4.8rem;
  margin-bottom: 1.7rem;
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

  background-color: ${theme.colors.white};

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

  cursor: pointer;
`;

const IconText = styled.div`
  color: ${theme.colors.green06};
  ${theme.fonts.caption};
  text-align: center;
`;

const UnClickedIconText = styled.div`
  color: ${theme.colors.gray06};
  ${theme.fonts.caption};
  text-align: center;
`;

const IconsWrapper = styled.div`
  width: 32.5rem;
  display: flex;
  justify-content: space-between;
`;
