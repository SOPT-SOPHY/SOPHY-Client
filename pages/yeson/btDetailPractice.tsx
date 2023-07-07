import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import CheckBox from '../../components/CheckBox';
import BTData from './btData'; // 경로 수정 필요
import backArrow from '../../assets/icon/backArrow.svg';
import detailImage from '../../assets/img/detailImage.png';
import BTInfo from '../../components/btInfo'; // BTInfo 컴포넌트 import 필요

const btDetail = () => {
  const filteredData = BTData.filter((data) => data.id === 1);
  return (
    <>
      <Body>
        <Header>
          <ImageContainer>
            <Image src={backArrow} width={44} height={44} alt="뒤로가기" />
          </ImageContainer>
          <Title>모집 중인 북토크</Title>
        </Header>
        <hr style={{ borderTop: '1px solid #F6F7FA' }} />
        <DetailImg>
          <Image
            src={detailImage}
            width={335}
            height={184}
            alt="북토크이미지"
          />
        </DetailImg>
        <div>
          {filteredData.map((data, index) => {
            return (
              <BTInfo
                key={index}
                title={data.title}
                writer={data.writer}
                field={data.field}
                bookInfo={data.bookinfo}
                date={data.date}
                people={data.people}
                price={data.price}
                preInfo={data.previnfo} // prop 이름 수정
                introduction={data.introduction}
                spaceName={data.spaceName} // 추가적인 prop들을 필요에 따라 추가해야 함
                spaceAddress={data.spaceAddress}
              />
            );
          })}
        </div>
        <CheckBox />
      </Body>
    </>
  );
};

export default btDetail;

const Body = styled.div`
  width: 37.5rem;
  margin: 0 auto;
  padding: 0;
  border: 1px solid black;
  background: #fff;
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

const Title = styled.h1`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  margin-right: 12.8rem;
  font-family: Pretendard;
  line-height: 2.2rem;
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

