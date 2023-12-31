/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import Link from 'next/link';
import NextIcon from '../../assets/icon/NextIcon.svg';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PredictedBTSlider from '../PredictedBTSlider';
// import HotBookTalkSlider from '../HotBookTalkSlider';
// import SimpleSlider from '../SimpleSlider';

function PredictedBT(props: any) {
  const { booktalkList } = props;
  return (
    <div>
      <Header>
        <Title>예정된 북토크</Title>
        {booktalkList?.length === 0 ? (
          <></>
        ) : (
          <Link href="/mypage/bookedBookTalk">
            <MoreWrapper>
              <More>더보기</More>
              <Image
                src={NextIcon}
                width={20}
                height={20}
                alt="유저 정보 수정 아이콘"
              />
            </MoreWrapper>
          </Link>
        )}
      </Header>
      <PredictedBTSlider booktalkList={booktalkList} />
      {/* <SimpleSlider />
      <HotBookTalkSlider /> */}
      <HorizontalLine />
    </div>
  );
}

export default PredictedBT;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 1.3rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.subhead2_bold};
  color: ${({ theme }) => theme.colors.black};
`;

const MoreWrapper = styled.div`
  display: flex;

  align-items: center;

  img {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const More = styled.h2`
  ${({ theme }) => theme.fonts.body2_regular};
  color: ${({ theme }) => theme.colors.gray06};
`;

const HorizontalLine = styled.hr`
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray10};
`;
