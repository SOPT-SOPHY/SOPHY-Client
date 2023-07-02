import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import backArrow from '../../assets/icon/backArrow.svg';

const RegionSelect = () => {
  return (
    <>
      <Body>
        <Header>
          <ImageContainer>
            <Image src={backArrow} width={30} height={30} alt="뒤로가기" />
          </ImageContainer>
          <Title>북토크 개설 신청</Title>
        </Header>
        <div>
          <SubTItle>지역을 선택해주세요.</SubTItle>
          <RegionContainer>
            <RegionBox>
              <VerticalLine />
              <SelectBox>
                <h1>의정부</h1>
              </SelectBox>
              <DongBoxContainer>
                <DongBox>
                  <ul>의정부시 전체</ul>
                </DongBox>
                <DongBox>
                  <ul>가능동</ul>
                </DongBox>
                <DongBox>
                  <ul>가능1동</ul>
                </DongBox>
                <DongBox>
                  <ul>고산동</ul>
                </DongBox>
                <DongBox>
                  <ul>금오동</ul>
                </DongBox>
                <DongBox>
                  <ul>낙양동</ul>
                </DongBox>
                <DongBox>
                  <ul>녹양동</ul>
                </DongBox>
                <DongBox>
                  <ul>민락동</ul>
                </DongBox>
                <DongBox>
                  <ul>산곡동</ul>
                </DongBox>
                <DongBox>
                  <ul>신곡1동</ul>
                </DongBox>
              </DongBoxContainer>
            </RegionBox>
          </RegionContainer>
        </div>
        <Button type="button">다음으로</Button>
      </Body>
    </>
  );
};

export default RegionSelect;

const Body = styled.div`
  width: 23.4375rem;
  height: 50.75rem;
  margin: 0 auto;
  padding: 0;
  border: 1px solid black;
  background: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 7.81rem;

  padding-top: 1.57rem;
`;

const ImageContainer = styled.div`
  margin-left: 1.25rem;
  width: 1.875rem;
  height: 1.875rem;

  img {
    width: 1.875rem;
    height: 1.875rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.125rem;
  font-weight: 700;
  margin-right: 8.06rem;
  font-family: Pretendard;
`;

const SubTItle = styled.h2`
  font-size: 1.25rem;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.625rem;

  margin-left: 1.25rem;
  margin-bottom: 1rem;
`;

const RegionContainer = styled.div`
  width: 20.9375rem;
  height: 27.8125rem;
  flex-shrink: 0;

  margin: 0 auto;

  border-radius: 8px;
  background: var(--gray-gray-11, #f6f7fa);
`;

const RegionBox = styled.div`
  position: relative;

  width: 20.9375rem;
  height: 27.8125rem;
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  background-color: #e2e6ea;
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 10.4375rem;
  height: 2.375rem;
  flex-shrink: 0;

  position: relative;
  top: 1.37rem;
  background-color: #54b7b5;

  h1 {
    color: #fff;
    font-size: 0.875rem;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 1.375rem;

    margin-left: 1.88rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const DongBoxContainer = styled.div`
  position: absolute;
  top: 1.37rem;
  left: 50%;
  gap: 0.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DongBox = styled.div`
  width: 10.4375rem;
  height: 2.375rem;
  flex-shrink: 0;

  position: relative;

  ul {
    color: #36393c;
    font-size: 0.875rem;
    font-family: Pretendard;
    font-weight: 600;
    line-height: 1.375rem;

    margin-left: 1.87rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const Button = styled.button`
  width: 20.9375rem;
  height: 3.25rem;
  flex-shrink: 0;

  border: none;
  border-radius: 6px;
  background: #56b5b3;

  margin-top: 3.12rem;
  margin-left: 1.25rem;
  margin-right: 1.25rem;

  color: #fff;
  font-size: 1rem;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 1.5rem;
`;
