/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Layout from '../../components/common/Layout';
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
import Footer from '../../components/common/Footer/Footer';

function SophyStory() {
  const [isSelected, setIsSelected] = useState('category');
  const router = useRouter();

  const { myInfo } = uesFetchMyInfo();
  const { sophyStory } = uesFetchSophyStory();
  console.log(sophyStory);

  const accessToken = Cookies.get('accessToken');
  const refreshToken = Cookies.get('refreshToken');

  useEffect(() => {
    if (!refreshToken && !accessToken) {
      console.log('비회원 접근 불가');
      alert('비회원은 접근할 수 없는 페이지예요 :(');
      router.push('auth');
    }
  }, [accessToken, refreshToken, router]);

  const data = uesFetchMemberHome();

  return (
    <Layout>
      <Head>
        지금까지
        <span
          style={{ color: `${theme.colors.primary}`, marginLeft: '0.3rem' }}>
          {sophyStory?.length}개의
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
      <SophyStorySlider sophyStory={sophyStory} />
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
      <Footer />
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
